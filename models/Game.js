const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Game extends Model {
        static attend(body, models) {
          return models.Attend.create({
            player_id: body.player_id,
            game_id: body.game
        })
        .then(() => {
            return Game.findOne({
                 where: {
                 id: body.game
              },
              attributes: [
                'id',
                'game_title',
                'game_type',
                'game_date',
                'game_time',
                'game_venue',
                
                [sequelize.literal('(SELECT COUNT(*) FROM attend WHERE game.id = attend.game_id)'), 'attend_count']
              ],
              // include: [

              //   [sequelize.literal('(SELECT COUNT(*) FROM attend WHERE game.id = attend.game_id)'), 'attend_count']
              // //   {
              // //       model: models.Player,
              // //       attributes: ['username']
              // //   }
              // ],
              // order: [
              //   [sequelize.literal('attend_count'), 'DESC']
              // ]
            },
          )
      })
    }
  }

// create fields/columns for Post model
Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    game_title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    game_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    game_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    game_time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    game_venue: {
      type: DataTypes.STRING,
      allowNull: false
    },
    player_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'player',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'game'
  }
);

module.exports = Game;