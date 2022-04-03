// import all models
const Game = require('./Game');
const Player = require('./Player');
const Attend = require('./Attend');
const Comment = require('./Comment');
// const Comment = require('./Comment');

// create associations
Player.hasMany(Game, {
        foreignKey: 'player_id'
 });

 Player.hasMany(Game, {
    foreignKey: 'player_id'
  });
  
  Game.belongsTo(Player, {
    foreignKey: 'player_id',
    onDelete: 'SET NULL'
  });
  
  Player.belongsToMany(Game, {
    through: Attend,
    as: 'attend_games',
  
    foreignKey: 'player_id',
    onDelete: 'SET NULL'
  });
  
  Game.belongsToMany(Player, {
    through: Attend,
    as: 'attend_games',
    foreignKey: 'game_id',
    onDelete: 'SET NULL'
  });
  
  Attend.belongsTo(Player, {
    foreignKey: 'player_id',
    onDelete: 'SET NULL'
  });
  
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
    foreignKey: 'player_id',
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

module.exports = { Player, Game, Attend };
