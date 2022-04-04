const { Game } = require('../models');

const gamedata = [
  {
    game_title: "Basketball Game",
    game_type: "Basketball",
    game_date: "2022-09-05",
    game_time: "12:00",
    game_venue: "Thompkins Square Park",
    player_id: 1
  },
  {
    game_title: "Basketball game in Central Park",
    game_type: "Basketball",
    game_date: "2022-04-08",
    game_time: "16:00",
    game_venue: "Central Park",
    player_id: 4
  },
  {
    game_title: "Softball game",
    game_type: "Softball",
    game_date: "2022-07-12",
    game_time: "19:00",
    game_venue: "Buddy Keaton Field",
    player_id: 3
  },
  {
    game_title: "Flag Football game late night",
    game_type: "Flag Football",
    game_date: "2022-04-15",
    game_time: "20:30",
    game_venue: "Randalls Island",
    player_id: 2
  },
  {
    game_title: "Basketball game",
    game_type: "Basketball",
    game_date: "2022-02-18",
    game_time: "18:00",
    game_venue: "W 4th Street",
    player_id: 5
  },
  {
    game_title: "Softball game in Central Park",
    game_type: "Softball",
    game_date: "2022-04-20",
    game_time: "11:00",
    game_venue: "Central Park",
    player_id: 6
  },
];

const seedGames = () => Game.bulkCreate(gamedata);

module.exports = seedGames;