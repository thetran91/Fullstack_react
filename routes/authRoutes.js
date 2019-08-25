const passport = require('passport');

module.exports = app => {
  /* Tell google that we have user's token to access thier account */
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
      /* Scope: thong bao google biet chung ta muon lay thong tin gi, google co nhieu thuoc tinh khac ngoai 2 thuoc tinh tren */
    })
  );
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );
  /* Tat cookie id */
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
  /* Figure 15 and this route the hien luong du lieu tu req cho den khi tra ve req.user */
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
    // res.send(req.session);
  });
};
