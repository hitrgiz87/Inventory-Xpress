var express = require('express');
var router = express.Router();
var User = require('./public/models/user.js');


router.get('/', function(req, res, next) {
  res.render('user');
});


app.get('/', async (req, res) => {
  try {
   //Fetch items from MongoDB
    const items = await Users.find();
    res.render('user', { Users });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
 

module.exports = router;