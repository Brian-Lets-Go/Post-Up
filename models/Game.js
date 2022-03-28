const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Game extends Model {
//   static upvote(body, models) {
//     return models.Vote.create({
//       user_id: body.user_id,
//       post_id: body.post_id
//     }).then(() => {
//       return Post.findOne({
//         where: {
//           id: body.post_id
//         },
//         attributes: [
//           'id',
//           'post_url',
//           'title',
//           'created_at',
//           [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
//         ],
//         include: [
//           {
//             model: models.Comment,
//             attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//             include: {
//               model: models.User,
//               attributes: ['username']
//             }
//           }
//         ]
//       });
//     });
//   }
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