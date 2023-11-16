var express = require('express');
var router = express.Router();
var UserModel = require('../models/user'); // Change the variable name

router.get('/user', function(req, res, next) {
  res.render('user');
});

router.get('/', async function(req, res, next) {
  var users = await UserModel.find(); // Change the variable name
  res.render('Users', { Users: users }); // Pass the correct variable name
});



module.exports = router;
