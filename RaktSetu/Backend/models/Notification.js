// models/Notification.js
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    
    type: String,
    
    message: String,
    
    seen: { 
        type: Boolean, 
        default: false 
    },
    
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

module.exports = mongoose.model('Notification', notificationSchema);