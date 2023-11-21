const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

   userID: {
      type: int64, // Change the data type to Number
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

const User = mongoose.model('Users', userSchema); // Change the model name

module.exports = User; // Change the export name
