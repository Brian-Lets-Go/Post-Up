const { Model, DataTypese} = require ('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Player extends Model {

    checkPassword(logiPw) {
        return bcrypte.compareSync(loginPw, this.pawword);
    }
};

Player.init (
    {
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allownull: false,
        validate: {
            len: [4]
        }
    }  

},
{
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      async beforeCreate(newPlayerData) {
        newPlayerData.password = await bcrypt.hash(newPlayerData.password, 10);
        return newPlayerData;
      },

      async beforeUpdate(updatedPlayerData) {
        updatedPlayerData.password = await bcrypt.hash(updatedPlayerData.password, 10);
        return updatedPlayerData;
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'player'
  }
);

module.exports = Player;