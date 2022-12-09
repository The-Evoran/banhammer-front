// Load Node modules
var express = require('express');
const ejs   = require('ejs');
const db = require("./config/database");
const UserModel = require("./models/user");
const banlistModel = require("./models/user");
const port = 3000;


// // Essaye de te connecter putain
const initApp = async () => {
    console.log("Testing the database connection..");
    /**
     * Test the connection.
     * You can use the .authenticate() function to test if the connection works.
     */
    try {
        await db.authenticate();
        console.log("Connection has been established successfully.");
        UserModel.sync({
            alter:true,
        });
        banlistModel.sync({
            alter:true,
        });
        /**
         * Start the web server on the specified port.
         */
        app.listen(port, () => {
            console.log(`Server is up and running at: http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Unable to connect to the database:", error.original);
    }
};
initApp();





// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// View engine set to EJS

app.set('view engine', 'ejs');
// Port website will run on
app.listen(8080);


app.get('/', function(req, res) {
    res.render('pages/index', {
    });
});
app.get('/panel', function(req, res) {
    res.render('pages/pannel')
});

app.get('/oauth', function(req, res, next) {
    UserModel.create({
        access_token: req.query.code,

    })
    .then((result) => {
        return res.json({
          	message: "User added created successfully!",
        });
    })
    .catch((error) => {
        console.log(error);
        return res.json({
          	message: "Unable to add user!",
        });
    });
    res.send('code is ' + req.query.code + ' scope is ' + req.query.scope + ' state is ' + req.query.state);
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

