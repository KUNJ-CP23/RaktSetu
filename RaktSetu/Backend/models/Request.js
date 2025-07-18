// models/Request.js
const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({

    RequestID: { 
        type: Number, 
        required: true, 
        unique: true 
    },

    RequesterID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },

    BloodGroupID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'BloodGroup' 
    },

    Quantity: Number,

    Location: String,

    Urgency: String,

    Status: String,

    MatchedDonorID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },

    MatchedBloodBankID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'BloodBank' 
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

module.exports = mongoose.model('Request', requestSchema, 'Requests');
