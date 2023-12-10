var express = require('express');
var router = express.Router();
var Asset = require('../models/asset.js');
var User = require('../models/user.js');

router.get('/', async function(req, res, next) {
  try {
   // Fetch asset data from the database
      var assets = await Asset.find();
      var users = await User.find();
      // Count occurrences of each asset type
      var assetCounts = countAssetTypes(assets);

      // Prepare data for the doughnut chart
      var data = {
          labels: Object.keys(assetCounts),
          datasets: [{
              data: Object.values(assetCounts),
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
          }]
      };

      // Render the index view with the asset data
      res.render('index', { assets: assets, doughnutData: data, users: users });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});

// Function to count occurrences of each asset type
function countAssetTypes(assets) {
  var assetCounts = {};

  assets.forEach(asset => {
      var assetType = asset.assetType;

      // Count occurrences
      if (assetCounts.hasOwnProperty(assetType)) {
          assetCounts[assetType]++;
      } else {
          assetCounts[assetType] = 1;
      }
  });

  return assetCounts;
}



// Route to fetch data for the doughnut chart
router.get('/doughnut-chart-data', async function (req, res, next) {
    try {
        // Fetch asset data from the database
        const assets = await Asset.find();

        // Count occurrences of each asset type
        const assetCounts = countAssetTypes(assets);

        // Sending the data as JSON
        res.json({
            labels: Object.keys(assetCounts),
            data: Object.values(assetCounts)
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
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

router.get('/user-count', async function (req, res, next) {
  try {
      const userCount = await User.countDocuments();
      res.json({ userCount });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/asset-count', async function (req, res, next) {
  try {
      const assetCount = await Asset.countDocuments();
      res.json({ assetCount });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
