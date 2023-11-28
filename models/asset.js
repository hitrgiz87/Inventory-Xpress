const mongoose = require('mongoose')


const assetSchema = new mongoose.Schema({

    assetID: {
        type: Number,
        required: true
    },
    assetName: {
        type: String,
        required: true
    },
    assetType: {
        type: String,
        required: true
    },

    OwnerID: {
        type: String,
        required: false
    },


});

const Asset = mongoose.model('asset', assetSchema);

module.exports = Asset;


