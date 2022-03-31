// import all models
const Game = require('./Game');
const Player = require('./Player');
const Attend = require('./Attend');
// const Comment = require('./Comment');

// create associations
// Player.hasMany(Game, {
//   foreignKey: 'player_id'
// });

// Game.belongsTo(Player, {
//   foreignKey: 'player_id',
//   onDelete: 'SET NULL'
// });

// Player.belongsToMany(Game, {
//   through: Attend,
//   as: 'games_playing',

//   foreignKey: 'player_id',
//   onDelete: 'SET NULL'
// })

// Game.hasMany(Player, {
//     foreignKey: 'player_id'
// })

Game.hasMany(Attend, {
    foreignKey: 'game_id'
})

Attend.belongsTo(Game, {
    foreignKey: 'game_id'
})

module.exports = { Player, Game, Attend };