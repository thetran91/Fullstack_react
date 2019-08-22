const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
/*Lay google oauth key */
const keys = require('../config/keys');
/* Goi model user vua tao trong User.js */
const User = mongoose.model('users');

/* Serialize cho user da duoc dang nhap o ben duoi bang id Figure 26*, null error/
/* user.id o day khong giong voi profile.id, no dung de tao cookie, no la id trong database tai mlab */
passport.serializeUser((user, done) => {
  done(null, user.id);
});
/* Tra id token ve cho nguoi dung, thong qua tim kiem nguoi dung bang id trong database */
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

/* Su dung Strategy */
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      /* URL The route user wiil be sent to after they allow login thier email */
      callbackURL: '/auth/google/callback'
    },
    /* Tra ve token cua user sau khi dang nhap */
    (accessToken, refreshToken, profile, done) => {
      /* Kiem tra id da ton tai trong database hay chua */
      User.findOne({ googleID: profile.id }).then(existingUser => {
        if (existingUser) {
          /* This user id is already created in db */
          /* null la khong co loi gi, tra ve existingUser */
          done(null, existingUser);
        } else {
          /* Create new id in database for this id */
          new User({ googleID: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
      /* Tao user moi voi thong tin tra ve tu profile la id sau do dung fuction save()de chuyen data den mongo database*/
    }
  )
);
