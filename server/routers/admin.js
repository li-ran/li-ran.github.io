var express = require('express');
var router = express.Router();

router.get('/user',function(req,res,nex){
	console.log("user");
	res.send('User');
})
module.exports = router;