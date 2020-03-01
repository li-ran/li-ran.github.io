var Mongoose = require('mongoose');
module.exports = new Mongoose.Schema({
	//id
	id:Number,
	//图片路径
    img_src:String,
    outline:String,
    content:String
});