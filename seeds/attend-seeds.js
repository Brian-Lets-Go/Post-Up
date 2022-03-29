const { Attend } = require('../models');

const attenddata = [
  {
    player_id: 1,
    game_id: 1
  },
  {
    player_id: 1,
    game_id: 3
  },
  {
    player_id: 1,
    game_id: 5
  },
  {
    player_id: 1,
    game_id: 6
  },
  {
    player_id: 2,
    game_id: 1
  },
  {
    player_id: 2,
    game_id: 2
  },
  {
    player_id: 2,
    game_id: 4
  },
  {
    player_id: 2,
    game_id: 6
  },
  {
    player_id: 3,
    game_id: 1
  },
  {
    player_id: 3,
    game_id: 5
  },
  {
    player_id: 3,
    game_id: 6
  },
  {
    player_id: 4,
    game_id: 1
  },
  {
    player_id: 4,
    game_id: 3
  },
  {
    player_id: 5,
    game_id: 2
  },
  {
    player_id: 5,
    game_id: 4
  },
  {
    player_id: 5,
    game_id: 6
  },
];

const seedAttendance = () => Attend.bulkCreate(attenddata);

module.exports = seedAttendance;