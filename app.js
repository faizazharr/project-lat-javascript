var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./config/database');
var bodyParser = require('body-parser');
var session = require('express-session');
var expressValidator = require('express-validator');

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

// setup midle ware

// setup body parser
// par application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// 2-parse application/json
app.use(bodyParser.json());

// setup session
app.use(session({
    secret: 'keywoard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

// setup validator
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.'),
            root = namespace.shift(),
            formParam = root;
        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));

//setup express messages
app.use(require('connect-flash')());
app.use(function(req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});

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