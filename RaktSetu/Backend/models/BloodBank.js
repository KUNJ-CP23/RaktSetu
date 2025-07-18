// models/BloodBank.js
const mongoose = require('mongoose');

const bloodBankSchema = new mongoose.Schema({

    name: String,
    
    contact: String,
    
    location: String,
    
    licenseDoc: String,
    
    registeredDate: Date,
    
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    
    modifiedAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('BloodBank', bloodBankSchema);