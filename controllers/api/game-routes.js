const router = require('express').Router();
const { Game } = require('../../models');

router.get('/', (req, res) => {
  Game.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // expects =>   { "game_type": "Baseball", "game_date": "5/25/2022", "game_time": "19:00", "game_venue": "East Side Park", "player_id": 2 },
  Game.create({
    game_type: req.body.game_type,
    game_date: req.body.game_date,
    game_time: req.body.game_time,
    game_venue: req.body.game_venue,
    player_id: req.session.player_id,
  })
    .then(dbCommentData => res.json(dbCommentData))
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
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No game found with this id!' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
