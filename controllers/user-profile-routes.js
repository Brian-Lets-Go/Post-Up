const router = require('express').Router();
const sequelize = require('../config/connection');
const { Game, Player, Attend } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('profile', {
        player_id: req.session.player_id
    });
});

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
        //     [sequelize.literal('(SELECT COUNT(*) FROM attend WHERE game.id = attend.game_id)'), 'attend_count']
        ],
        // include: [
        //     {
        //         model: Comment,
        //         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        //         include: {
        //             model: User,
        //             attributes: ['username']
        //         }
        //     },
        //     {
        //         model: User,
        //         attributes: ['username']
        //     }
        // ]
    })
        .then(dbGameData => {
            const posts = dbGameData.map(game => game.get({ plain: true }));
            res.render('profile', { posts, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;