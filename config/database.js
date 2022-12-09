const Sequelize = require("sequelize");

// // Sequelize connexion
const sequelize = new Sequelize("banhammer", "test", "j'c74PPFPXjG*cTS", {
  host: "34.140.85.168",
  dialect: "mysql",
  dialectOptions: {
    socketPath: '/cloudsql/34.140.85.168'
},
});

module.exports = sequelize;