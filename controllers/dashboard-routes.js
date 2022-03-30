const router = require('express').Router();
const sequelize = require('../config/connection');
const { Game, Player} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Game.findAll({
        where: {
          // use the ID from the session
          player_id: req.session.player_id
        },
        attributes: [
          'id',
          'game_type',
          'game_time',
          // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE game.id = attened.post_id)'), 'vote_count']
        ],
        // include: [
        //   // {
        //   //   model: Comment,
        //   //   attributes: ['id', 'comment_text', 'game_id', 'player_id', 'created_at'],
        //   //   include: {
        //   //     model: Player,
        //   //     attributes: ['username']
        //   //   }
        //   // },
        //   {
        //     model: Player,
        //     attributes: ['username']
        //   }
        // ]
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

