const router = require('express').Router();
const { Player, Game } = require('../../models');
const db = require

// find all function to display only the games a user has made
router.get('/userposts', (req, res) => 
    Game.findAll() {
        .then(dbGameData => {
            // serialize data before passing to template
            const game = dbGameData.map(game => game.get({ plain: true }));
            res.render('dashboard', { game, loggedIn: true });
          })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
})

module.exports = router;