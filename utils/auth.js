const withAuth = (req, res, next) => {
    if (!req.session.player_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;