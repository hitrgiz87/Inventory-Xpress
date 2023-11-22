var express = require('express');
var router = express.Router();
var User = require('../models/user.js');




router.get('/', async function(req, res, next) {

  
  
    
     var Users = await User.find();
     res.render('User', { User: Users});
   

})





router.post('/', async function(req, res, next) {
  // Extract data from the request body
  const { userId, firstName, lastName } = req.body;

  // Create a new User instance with the extracted data
  const user = new User({
    userID: userId,
    firstName: firstName,
    lastName: lastName
  });

  try {
    // Save the user data to the database
    await user.save();
    res.redirect('/users');
  } catch (err) {
    // Handle errors and send an appropriate response
    console.error(err);
    res.redirect('/users');
  }

});

router.get('/delete', async function(req, res, next) {

  
let id = req.query._id

try {
 
  await User.findByIdAndDelete(id);
  res.redirect('/users');
} catch (err) {
  
  console.error(err);
  res.status(500).send('Error Deleting user');
    



}

});

router.post('/edit', async function(req, res, next) {



  let id = req.query._id
  
  try {
   
    await User.findByIdAndUpdate(id);
    res.redirect('/users');
  } catch (err) {
    
    console.error(err);
    res.status(500).send('Error saving user');
      
  
  
  
  }
  
  });


module.exports = router;






