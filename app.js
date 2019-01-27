var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./config/database');
// connect database 
mongoose.connect(config.database);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('connected to Mongodb');
})

// initial app
var app = express();

// setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// setup home index
app.get('/', function(req, res) {
    res.render('index', {
            title: 'Home eSHOP'
        }) //send atau json bisa semua    
});

// setup public folder
app.use(express.static(path.join(__dirname, 'public')));






// setup server
var port = 3000;
app.listen(port, function() {
    console.log("server running on port" + port);
});