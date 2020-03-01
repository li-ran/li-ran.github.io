var express = require('express')
var router = express.Router()

router.get('/', function (req, res, nex) {
  res.render('../dist/index')
})
router.get('/main', function (req, res, nex) {
  res.render('../dist/index')
})

module.exports = router
