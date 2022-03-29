const router = require('express').Router();
const sequelize = require('../config/connection');
const{ Game, Player, Attend } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Game.findAll({
        // where: {
        //   // use the ID from the session
        //   user_id: req.session.user_id
        // },
        attributes: [
          'id',
          'game_type',
          'game_date',
          'game_time',
          'game_venue',
          // [sequelize.literal('(SELECT COUNT(*) FROM Attend WHERE game.id = attend.game_id)')]
        ],
      })
        .then(dbPostData => {
          // serialize data before passing to template
          const posts = dbPostData.map(post => post.get({ plain: true }));
          res.render('dashboard', { posts, loggedIn: true });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });

module.exports = router;

