const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {
    static attendance(body, models) {
        return models.Attend.create({
            player_id: body.player_id,
            game_id: body.game_id
        }).then(()=> {
            return Game.findOne({
                where: {
                    id: body.game_id
                },
                attributes: [
                    'id',
                    'game_url',
                    'title',
                    'game_date',
                    'game_time',
                    'game_type',
                    'game_venue',
                    [sequelize.literal('(SELECT COUNT(*) FROM attend WHERE game.id = attend.game_id'), 'attend_count']
                ],
                include: [
                    {
                        model: models.Comment,
                        attributes: [ 'id', 'comment_text', 'game_id', 'created_at'],
                        include: {
                            model: models.Player,
                            attributes:['username']
                        }
                    }
                ]
            })
        })
    }


}