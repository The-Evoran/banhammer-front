const Sequelize = require("sequelize");

// // Sequelize connexion

const sequelize = new Sequelize('banhammer', 'test', 'j\'c74PPFPXjG*cTS', {
  dialect: 'mysql',
  host: '/cloudsql/banhammher:europe-west1:banhammer',
  timestamps: false,
  dialectOptions: {
    socketPath: '/cloudsql/banhammher:europe-west1:banhammer'
},
});
module.exports = sequelize;