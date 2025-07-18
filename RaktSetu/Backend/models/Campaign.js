// models/Campaign.js
const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({

    CampaignID: { 
        type: Number, 
        required: true, 
        unique: true 
    },

    Title: String,

    OrganizedBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },

    Location: String,

    StartDate: Date,

    EndDate: Date,

    ParticipantsCount: Number,

    Status: String,

    CreatedAt: { 
        type: Date, 
        default: Date.now 
    },

    ModifiedAt: { 
        type: Date, 
        default: Date.now 
    }

});

module.exports = mongoose.model('Campaign', campaignSchema, 'Campaigns');
