const router = require('express').Router();
const sequelize = require('../config/connection');
const { Game, Player, Attend } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Game.findAll({
        where: {
            player_id: req.session.player_id
        },
        attributes: [
            'id',
            'game_title',
            'game_type',
            'game_date',
            'game_time',
            'game_venue',
            [sequelize.literal('(SELECT COUNT(*) FROM attend WHERE game.id = attend.game_id)'), 'attend_count']
        ],

    })
        .then(dbGameData => {
            // console.log(dbGameData, 'dbGameData logged');
            const posts = dbGameData.map(game => game.get({ plain: true }));
            // console.log(posts);
            res.render('profile', { posts, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;