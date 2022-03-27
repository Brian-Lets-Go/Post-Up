const Attend = require ('./Attend');
const Game = require ('./Game');
const Player = require ('./Player');
const Comment = require('./Comment');

Player.hasMany(Game, {
    foreignKey: "player_id",
    onDelete: 'SET NULL'

});

Game.belongsTo(Player, {
    foreignKey: 'player_id',
    onDelete: 'Set Null'
})

Player.belongsToMany(Game, {
    through: Attend,
    as: 'attending_games',
    foreignKey: 'player_id',
    onDelete: 'SET NULL'
})

Game.belongsToMany(Player, {
    through: Attend,
    as: 'attending_game',
    foreignKey: 'game_id',
    onDelete: 'SET NULL'
})

Attend.belongsTo(Player, {
    foreignKey: 'player_id',
    onDelete: 'SET NULL'
})


Attend.belongsTo(Game, {
    foreignKey: 'game_id',
    onDelete: 'SET NULL'
  });
  
  Player.hasMany(Attend, {
    foreignKey: 'player_id'
  });
  
  Game.hasMany(Attend, {
    foreignKey: 'game_id'
  });
  
  Comment.belongsTo(Player, {
    foreignKey: 'Player_id',
    onDelete: 'SET NULL'
  });
  
  Comment.belongsTo(Game, {
    foreignKey: 'game_id',
    onDelete: 'SET NULL'
  });
  
Player.hasMany(Comment, {
    foreignKey: 'player_id',
    onDelete: 'SET NULL'
  });
  
  Game.hasMany(Comment, {
    foreignKey: 'game_id'
  });
  
  module.exports = { Player, Game, Attend, Comment };
  