var mongoose = require('mongoose');
var articlesSchema = require('../schemas/articles');

module.exports = mongoose.model('Articles',articlesSchema);