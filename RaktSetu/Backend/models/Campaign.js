// models/Campaign.js
const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    
    title: String,
    
    organizedBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    
    location: String,
    
    startDate: Date,
    
    endDate: Date,
    
    participantsCount: Number,
    
    status: String,
    
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    
    modifiedAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Campaign', campaignSchema);