const Sequelize = require("sequelize");

// // Sequelize connexion
const sequelize = new Sequelize("banhammer", "root", "", {
  host: "/cloudsql/nodejs-ubuntu-20-04-1-vm",
  dialect: "mysql"
});

module.exports = sequelize;