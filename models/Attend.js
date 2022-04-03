const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Attend extends Model {}

Attend.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    player_id: {
      type: DataTypes.INTEGER,
        references: {
        model: 'player',
        key: 'id'
      }
    },
    game_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'game',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'attend'
  }
);

module.exports = Attend;
