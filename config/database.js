const Sequelize = require("sequelize");

// // Sequelize connexion
const sequelize = new Sequelize("banhammer", "root", "", {
  host: "34.116.219.208",
  dialect: "mysql"
});

module.exports = sequelize;