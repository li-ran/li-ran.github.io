var mongoose = require('mongoose');
var articlesMsgSchema = require('../schemas/articlesMsg');

module.exports = mongoose.model('ArticlesMsg',articlesMsgSchema);