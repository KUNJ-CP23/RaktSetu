// models/Request.js
const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({

    requesterId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    
    bloodGroupId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'BloodGroup' 
    },
    
    quantity: Number,
    
    location: String,
    
    urgency: String,
    
    status: String,
    
    matchedDonorId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    
    matchedBloodBankId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'BloodBank' 
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

module.exports = mongoose.model('Request', requestSchema);