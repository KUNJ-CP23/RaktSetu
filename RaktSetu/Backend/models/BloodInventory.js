// models/BloodInventory.js
const mongoose = require('mongoose');

const bloodInventorySchema = new mongoose.Schema({

    bloodBankId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'BloodBank' 
    },
    
    bloodGroupId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'BloodGroup' 
    },
    
    quantity: Number,
    
    collectionDate: Date,
    
    expiryDate: Date,
    
    donorId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    
    qrCodeTag: String,
    
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    
    modifiedAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('BloodInventory', bloodInventorySchema);