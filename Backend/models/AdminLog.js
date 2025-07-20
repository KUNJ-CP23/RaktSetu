// models/AdminLog.js
const mongoose = require('mongoose');

const adminLogSchema = new mongoose.Schema({

    LogID: { 
        type: Number, 
        required: true, 
        unique: true 
    },

    AdminID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },

    Action: String,

    TargetID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },

    Description: String,

    Timestamp: { 
        type: Date, 
        default: Date.now 
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

module.exports = mongoose.model('AdminLog', adminLogSchema, 'AdminLogs');