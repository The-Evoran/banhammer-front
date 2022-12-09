// Load Node modules
var express = require('express');
const ejs   = require('ejs');
const {Sequelize, DataTypes} = require('sequelize');

// // Sequelize connexion
// const sequelize = new Sequelize(
//     'banhammer',
//     'root',
//     '',
//     {
//         host: '35.195.43.177',
//         dialect: 'mysql',
//         timestamps: false,
//      pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//       },
        

//     }
// );

// // Essaye de te connecter putain
// sequelize.authenticate().then(() => {
//    console.log('Connection has been established successfully.');
// }).catch((error) => {
//    console.error('Unable to connect to the database: ', error);
// });

// // créé les utilisateurs omg
// const User = sequelize.define("users", {
//     id:{
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     access_token: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     expires_in: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     refresh_token: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// });
// const banlist = sequelize.define("banlist", {
//     id:{
//         type: DataTypes.STRING,
//         primaryKey: true
//     },
//     owner:{
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     banned:{
//         type: DataTypes.STRING
//     }
// })

// // Synchronisation de la BDD hihi
// sequelize.sync().then(() => {
//     console.log('Beep boop les utilisateurs sont correctement ajouté!');
//  }).catch((error) => {
//     console.error('Beep boop la creation de table rencontre une erreur : ', error);
//  }); 

// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// View engine set to EJS

app.set('view engine', 'ejs');
// Port website will run on
app.listen(8080);


app.get('/', function(req, res) {
    var name = "JAMBON";
    res.render('pages/index', {
        name: name
    });
});
app.get('/panel', function(req,res) {
    res.render('pages/pannel')
});

app.get('/oauth', function(req,res) {
    var body = req.body;

});

// Book.create({
//     title: "Clean Code",
//     author: "Robert Cecil Martin",
//     release_date: "2021-12-14",
//     subject: 3
// }).then(res => {
//     console.log(res)
// }).catch((error) => {
//     console.error('Failed to create a new record : ', error);
// });