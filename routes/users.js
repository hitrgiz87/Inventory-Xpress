var express = require('express');
var router = express.Router();
var User = require('../models/user.js');





router.get('/', async function(req, res, next) {

var user = new  User({
  userID: '1',
  firstName: 'John',
  lastName: 'Doe'

  
});

try {
await user.save();
}catch(err){

console.log(err)

}
res.render('user');
});
 

module.exports = router;



//try {
  
  //const items = await User.find();
  //res.render('user', { User });
 //} catch (error) {
   //console.error(error);
   //res.status(500).send('Internal Server Error');
//}