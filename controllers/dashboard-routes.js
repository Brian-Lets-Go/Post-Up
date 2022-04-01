const router = require('express').Router();
const sequelize = require('../config/connection');
const { Game, Player, Attend } = require('../models');
const withAuth = require('../utils/auth');

// get all games for dashboard
router.get('/', withAuth, (req, res) => {
    Game.findAll({
        attributes: [
          'id',
          'game_title',
          'game_type',
          'game_date',
          'game_time',
          'game_venue',
          [sequelize.literal('(SELECT COUNT(*) FROM attend WHERE game.id = attend.game_id)'), 'attend_count']
        ]
      })
        .then(dbGameData => {
          // serialize data before passing to template
          const game = dbGameData.map(game => game.get({ plain: true }));
          res.render('dashboard', { game, loggedIn: true });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });

module.exports = router;

