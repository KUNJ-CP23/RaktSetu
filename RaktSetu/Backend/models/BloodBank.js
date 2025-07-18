// models/BloodBank.js
const mongoose = require('mongoose');

const bloodBankSchema = new mongoose.Schema({

    BloodBankID: { 
        type: Number, 
        required: true, 
        unique: true 
    },

    Name: String,

    Contact: String,

    Location: String,

    LicenseDoc: String,

    RegisteredDate: Date,

    CreatedAt: { 
        type: Date, 
        default: Date.now 
    },

    ModifiedAt: { 
        type: Date, 
        default: Date.now 
    }

});

module.exports = mongoose.model('BloodBank', bloodBankSchema, 'BloodBanks');
