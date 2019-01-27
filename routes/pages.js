var express = require('express');
var router = express.Router();

// setup home index
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Home eSHOP'
    }); //send atau json bisa semua    
});


module.exports = router;