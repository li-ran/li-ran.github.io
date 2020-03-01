var Mongoose = require('mongoose');
module.exports = new Mongoose.Schema({
    articlesId: String,
    user:String,
    contactWay:String,
    msg:String,
    time:String
});