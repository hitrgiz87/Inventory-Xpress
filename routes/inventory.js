var express = require('express');
var router = express.Router();
//var Users = require('./public/models/user.js')

router.get('/', function(req, res, next) {
  res.render('inventory');
});

module.exports = router;