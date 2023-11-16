var express = require('express');
var router = express.Router();
var Users = require('../models/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/inventory', function(req, res, next) {
  res.render('inventory');
});

module.exports = router;