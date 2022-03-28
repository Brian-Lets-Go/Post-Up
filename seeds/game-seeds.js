const { Game } = require('../models');

const gamedata = [
  {
    game_type: "Basketball",
    game_date: "4/22/2022",
    game_time: "12:00",
    game_venue: "Thompkins Square Park",
    player_id: 1
  },
  {
    game_type: "Basketball",
    game_date: "4/22/2022",
    game_time: "16:00",
    game_venue: "Central Park",
    player_id: 4
  },
  {
    game_type: "Softball",
    game_date: "4/30/2022",
    game_time: "19:00",
    game_venue: "Buddy Keaton Field",
    player_id: 3
  },
  {
    game_type: "Flag Football",
    game_date: "5/3/2022",
    game_time: "19:30",
    game_venue: "Randalls Island",
    player_id: 2
  },
  {
    game_type: "Basketball",
    game_date: "5/8/2022",
    game_time: "18:00",
    game_venue: "W 4th Street",
    player_id: 5
  },
  {
    game_type: "Sortball",
    game_date: "5/10/2022",
    game_time: "11:00",
    game_venue: "Central Park",
    player_id: 6
  },
];

const seedGames = () => Game.bulkCreate(gamedata);

module.exports = seedGames;