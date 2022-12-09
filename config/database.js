const Sequelize = require("sequelize");

// // Sequelize connexion
const sequelize = new Sequelize("banhammer", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = sequelize;