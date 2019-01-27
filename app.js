var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./config/database');
var bodyParser = require('body-parser');

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

// setup body parser
// par application/x-www-form-urlencoded
app.use(bodyParser, urlencoded({ extended: false }));

// 2-parse application/json
app.use(bodyParser.json());








// setup home index
// set rout
var pages = require('./routes/pages');
var adminPages = require('./routes/admin_pages');

// Redirection
app.use('/', pages);
app.use('/admin/pages', adminPages);
// setup public folder
app.use(express.static(path.join(__dirname, 'public')));






// setup server
var port = 3000;
app.listen(port, function() {
    console.log("server running on port" + port);
});