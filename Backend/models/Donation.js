// models/Donation.js
const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({

    DonationID: { 
        type: Number, 
        required: true, 
        unique: true 
    },

    DonorID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },

    BloodBankID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'BloodBank' 
    },

    DonationDate: Date,

    HealthCertificate: String,

    Status: String, // Scheduled / Completed / Cancelled

    CheckUpReportID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'DonorCheckUpReport' 
    },

    CreatedAt: { 
        type: Date, 
        default: Date.now 
    },

    ModifiedAt: { 
        type: Date, 
        default: Date.now 
    }

});

module.exports = mongoose.model('Donation', donationSchema, 'Donations');