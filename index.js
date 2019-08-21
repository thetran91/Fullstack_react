const express = require('express');
// const authRoutes =

// const passportConfig =
require('./services/passport');

const app = express();
// authRoutes(app);
require('./routes/authRoutes')(app);
// app.get('/', (req, res) => {
//   res.send('Hello');
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT);
