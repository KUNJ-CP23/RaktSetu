// models/DonorCheckUpReport.js
const mongoose = require('mongoose');

const donorCheckUpReportSchema = new mongoose.Schema({

    donorId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    
    healthCheckDate: Date,
    
    sugarLevel: String,
    
    bp: String,
    
    hemoglobinLevel: Number,
    
    weight: Number,
    
    healthStatus: String,
    
    notes: String,
    
    uploadedBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
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

module.exports = mongoose.model('DonorCheckUpReport', donorCheckUpReportSchema);