var express = require('express')
var router = express.Router()

router.get('/a', function (req, res, nex) {
  res.render('../dist/index')
})

module.exports = router
