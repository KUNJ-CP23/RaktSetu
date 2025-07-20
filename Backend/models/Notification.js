// models/Notification.js
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({

    NotificationID: { 
        type: Number, 
        required: true, 
        unique: true 
    },

    UserID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },

    Type: String,

    Message: String,

    Seen: { 
        type: Boolean, 
        default: false 
    },

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

module.exports = mongoose.model('Notification', notificationSchema, 'Notifications');