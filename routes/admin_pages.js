var express = require('express');
var router = express.Router();

// setup route home index
router.get('/', function(req, res) {
    res.json('Ini Admin Area');
});

//setup route get add-page
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

// setup route POST add-page
router.post('/add-page', function(req, res) {
    req.checkBody('title', "Title harus di isi").notEmpty();
    req.checkBody('content', "Content harus di isi").notEmpty();

    var title = req.body.title;
    var slug = req.body.slug.replace(/\s+/g, '_').toLowerCase();
    if (slug == "") s;
    ig = title.replace(/\s+/g, '_').toLowerCase();

    var content = req.body.content;
    var errors = req.validationErrors();

    if (errors) {
        console.log('errors');

        res.render('admin/add_page', {
            errors: errors,
            title: title,
            slug: slug,
            content: content
        })
    } else {
        console.log('succes');
    }
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