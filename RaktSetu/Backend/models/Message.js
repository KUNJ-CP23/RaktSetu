// models/Message.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    
    senderId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    
    receiverId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    
    message: String,
    
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

module.exports = mongoose.model('Message', messageSchema);