var express = require('express');
var router = express.Router();

// setup route home index
router.get('/', function(req, res) {
    res.json('Ini Admin Area');
});

//setup route add-page
router.get('/add-page', function(req, res) {
    var title = "";
    var slug = "";
    var content = "";

    res.render('admin/add_page', {
        title: title,
        slug: slug,
        content: content
    })
});

module.exports = router;