// models/Donation.js
const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({

    donorId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    
    bloodBankId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'BloodBank' 
    },
    
    donationDate: Date,
    
    healthCertificate: String,
    
    status: { 
        type: String, 
        enum: ['Scheduled', 'Completed', 'Cancelled'] 
    },
    
    checkUpReportId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'DonorCheckUpReport' 
    },
    
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    
    modifiedAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Donation', donationSchema);