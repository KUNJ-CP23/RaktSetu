// models/BloodInventory.js
const mongoose = require('mongoose');

const bloodInventorySchema = new mongoose.Schema({

    InventoryID: { 
        type: Number, 
        required: true, 
        unique: true 
    },
    
    BloodBankID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'BloodBank' 
    },
    
    BloodGroupID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'BloodGroup' 
    },
    
    Quantity: Number,
    
    CollectionDate: Date,
    
    ExpiryDate: Date,
    
    DonorID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    
    QRCodeTag: String,
    
    CreatedAt: { 
        type: Date, 
        default: Date.now 
    },
    
    ModifiedAt: { 
        type: Date, 
        default: Date.now 
    }

});

module.exports = mongoose.model('BloodInventory', bloodInventorySchema, 'BloodInventory');