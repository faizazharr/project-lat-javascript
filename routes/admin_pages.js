var express = require('express');
var router = express.Router();

// setup home index
router.get('/', function(req, res) {
    res.json('Ini Admin Area');
});


module.exports = router;