const router = require('express').Router();
const { Game, Attend, Player } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {

  console.log('hi')
  Game.findAll()
    .then(dbGameData => res.json(dbGameData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // expects =>   { "game_type": "Baseball", "game_date": "5/25/2022", "game_time": "19:00", "game_venue": "East Side Park", "player_id": 2 },
  console.log(req.body);
  Game.create({
    game_title: req.body.title,
    game_type: req.body.type,
    game_date: req.body.date,
    game_time: req.body.time,
    game_venue: req.body.venue,
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
    Game.attend({...req.body, player_id: req.session.player_id}, { Game, Attend, Player })

      .then(updatedAttendData => res.json(updatedAttendData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
