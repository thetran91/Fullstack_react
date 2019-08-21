const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

/*Lay google oauth key */
const keys = require('../config/keys');

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
      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);
      console.log('profile', profile);
    }
  )
);
