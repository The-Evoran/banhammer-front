const Sequelize = require("sequelize");

// // Sequelize connexion
const sequelize = new Sequelize("banhammer", "test", "j'c74PPFPXjG*cTS", {
  host: "34.140.85.168",
  dialect: "mysql",
  dialectOptions: {
    socketPath: '/cloudsql/banhammher:europe-west1:banhammer'
},
});

module.exports = sequelize;