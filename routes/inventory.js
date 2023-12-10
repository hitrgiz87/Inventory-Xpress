var express = require('express');
var router = express.Router();
var Asset = require('../models/asset.js');
var User = require('../models/user.js');


router.get('/', async function(req, res, next) {

  var asset = await Asset.find();

  res.render('inventory', { Asset: asset});

});




router.post('/', async function(req, res, next) {
  // Extract data from the request body
  const { assetID, assetName, assetType, OwnerID } = req.body;

  // Create a new User instance with the extracted data
  const asset = new Asset({
    assetID: assetID,
    assetName: assetName,
    assetType: assetType,
    OwnerID: OwnerID

  });

  try {
    // Save the user data to the database
    await asset.save();
    res.redirect('/inventory');
  } catch (err) {
    // Handle errors and send an appropriate response
    console.error(err);
    res.redirect('/inventory');
  }

});


router.get('/delete', async function(req, res, next) {
  
    let id = req.query._id
  
    try {
      // Delete the user data from the database
      await Asset.findByIdAndDelete(id);
      res.redirect('/inventory');
    } catch (err) {
      // Handle errors and send an appropriate response
      console.error(err);
      res.status(500).send('Error deleting asset');
    }
  
  });

  router.get('/edit', async function(req, res, next) {
    console.log('Edit route reached');
    let id = req.query._id;
  
    try {
        // Find the user data from the database
  
        var asset = await Asset.findById(id);
        console.log(asset);
        res.render('editAsset', { Asset: asset });
        
  
      } catch (err) {
        // Handle errors and send an appropriate response
        console.error(err);
        res.status(500).send('Error editing Asset');
    }
  });
  
  
  router.post('/edit', async function(req, res, next) {
  await Asset.findByIdAndUpdate(req.body._id, req.body),{
  
    assetID: req.body.assetID,  
    assetName: req.body.assetName,
    assetType: req.body.assetType,  
    OwnerID: req.body.OwnerID
  
  }
  
  res.redirect('/inventory');
  
  
  });
  

  router.get('/users-data', async (req, res) => {
    try {
      const users = await User.find({}, 'userID firstName lastName'); // Query user data from your database
      res.json(users);
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;