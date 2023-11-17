const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
   userID: {
      type: Number, // Change the data type to Number
      required: true
   },
   firstName: {
      type: String,
      required: true
   },
   lastName: {
      type: String,
      
      required: true
   },
});

const User = mongoose.model('User', userSchema); // Change the model name

module.exports = UserModel; // Change the export name
