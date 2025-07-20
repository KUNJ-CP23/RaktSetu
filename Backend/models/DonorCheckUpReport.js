// models/DonorCheckUpReport.js
const mongoose = require('mongoose');

const donorCheckUpReportSchema = new mongoose.Schema({
    
    ReportID: { 
        type: Number, 
        required: true, 
        unique: true 
    },
    
    DonorID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    
    HealthCheckDate: Date,
    
    SugarLevel: String,
    
    BP: String,
    
    HemoglobinLevel: Number,
    
    Weight: Number,
    
    HealthStatus: String,
    
    Notes: String,
    
    UploadedBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
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

module.exports = mongoose.model('DonorCheckUpReport', donorCheckUpReportSchema, 'DonorCheckUpReports');