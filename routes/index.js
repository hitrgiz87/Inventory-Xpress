var express = require('express');
var router = express.Router();
var Asset = require('../models/asset.js');





router.get('/', async function(req, res, next) {

  var asset = await Asset.find();

  res.render('index', { Asset: asset});

});





module.exports = router;