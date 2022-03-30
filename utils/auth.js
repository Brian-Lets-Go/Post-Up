const { append } = require("express/lib/response");
const router = require("../controllers/home-routes");
const seedPlayers = require("../seeds/player-seeds");

const withAuth = (req, res, next) => {
    if (!req.session.player_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };

  // route for user logout
  router.get('/logout', (req, res) => {
    if (req.session.player && req.cookies.player) {
      seedPlayers.loggedIn = true;
      seedPlayers.userName = req.session.playerdata.userName;
      seedPlayers.title ="You are now logged in"
      res.render('index');
    } else {
      res.redirect('/login')
    }
  })
  
  module.exports = withAuth;