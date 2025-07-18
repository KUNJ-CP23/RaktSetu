// models/AdminLog.js
const mongoose = require('mongoose');

const adminLogSchema = new mongoose.Schema({
    
    adminId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    
    action: String,
    
    targetId: mongoose.Schema.Types.ObjectId,
    
    description: String,
    
    timestamp: { 
        type: Date, 
        default: Date.now 
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

module.exports = mongoose.model('AdminLog', adminLogSchema);