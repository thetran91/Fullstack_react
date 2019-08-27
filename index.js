const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
/* Connect to mongoDB - Phai goi models/user truong roi moi goi passport vi passport su dung model nay*/
require('./models/User');
require('./services/passport');
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_EVN === 'production') {
  /* Express will call production asset like main.js, main.css */

  app.use(express.static('client/build'));
  /* Neu khong no se di vao index.html neu ko tim thay route, sau khi vao html no se tim dc cac file tren */
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
