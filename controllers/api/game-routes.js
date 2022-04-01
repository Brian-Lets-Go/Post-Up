const router = require('express').Router();
const { Game, Attend, Player } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {
  Game.findAll()
    .then(dbGameData => res.json(dbGameData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // expects =>   { "game_type": "Baseball", "game_date": "5/25/2022", "game_time": "19:00", "game_venue": "East Side Park", "player_id": 2 },
  Game.create({
    game_title: req.body.game_title,
    game_type: req.body.game_type,
    game_date: req.body.game_date,
    game_time: req.body.game_time,
    game_venue: req.body.game_venue,
    player_id: req.session.player_id,
  })
    .then(dbGameData => res.json(dbGameData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Game.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbGameData => {
      if (!dbGameData) {
        res.status(404).json({ message: 'No game found with this id!' });
        return;
      }
      res.json(dbGameData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.put('/attend', withAuth, (req, res) => {

    // custom static method created in models/Game.js
    Game.attend(req, { Game, Attend, Player })

      .then(updatedAttendData => res.json(updatedAttendData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
