const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

/*Lay google oauth key */
const keys = require('./config/keys');

const app = express();

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
/* Tell google that we have user's token to access thier account */
app.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
    /* Scope: thong bao google biet chung ta muon lay thong tin gi, google co nhieu thuoc tinh khac ngoai 2 thuoc tinh tren */
  })
);
app.get('/auth/google/callback', passport.authenticate('google'));

app.get('/', (req, res) => {
  res.send('Hello');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT);
