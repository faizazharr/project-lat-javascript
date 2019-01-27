var mongoose = require('mongoose');

// Schema untuk page
var PageSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    slug: {
        type: String,
    },
    content: {
        type: String,
        required
    },
    sorting: {
        type: Number
    }
});

var Page = module.exports = mongoose.model('Page', PageSchema);