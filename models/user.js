const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");

class User extends Model {}
class banlist extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        access_token: {
            type: DataTypes.STRING,
            allowNull: false
        },
        expires_in: {
            type: DataTypes.INTEGER,

        },
        refresh_token: {
            type: DataTypes.STRING,
    
        }
    },
    {
        sequelize,
        modelName: "users"
    }
);

module.exports = User;
