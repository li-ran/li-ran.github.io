var express = require('express')
var router = express.Router()
var fs = require('fs');
var path = require('path');
var iconv = require('iconv-lite');
var mammoth = require("mammoth");
var bodyParser = require('body-parser')
var articlesModel = require('../models/articles')
var articlesMsgModel = require('../models/articlesMsg')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
router.get('/outline', function (req, res, nex) {
    articlesModel.find(function (err, articles) {
        if (err){
          res.json({
            　code : -1,
            　data : err.message
          })
        }else{
          res.json({
      　　　　code : 200,
      　　　　data : articles
      　　})
        }
      });
      
});

router.get('/details', function (req, res, nex) {
  var id = req.query.id;
  articlesModel.find({"_id":id}, function (err, detailsData) {
      if (err){
        res.json({
          　code : -1,
          　data : err.message
        })
        return;
      }
     
      var fileName = detailsData[0].content;
      var fileContent = '';
      var currParentPath = path.resolve(__dirname, '..');
      mammoth.extractRawText({path: currParentPath+'/static/'+fileName})
          .then(function(result){
          var text = result.value; // The raw text 
          var messages = result.messages;
          detailsData[0].content = result.value;
          res.json({
          　code : 200,
            data : detailsData[0]
          })
      }).done();
    });
    
});
router.post('/message',function(req, res, nex){
  console.log(req.body)
  articlesMsgModel(req.body).save(function(err){
    if(err){
      res.json({
        code: -1,
        msg:err.message
      })
      return;
    }else{
      res.json({
        code: 0,
        msg:"success"
      })
    }
  })
})
router.get('/message',function(req, res, nex){
  var id = req.query.articlesId;
  articlesMsgModel.find({"articlesId":id},function(err,msg){
    if(err){
      res.json({
        code: -1,
        msg:err.message
      })
    }else{
      res.json({
        code: 0,
        msg:msg
      })
    }
  }).sort({_id: -1})
})
module.exports = router