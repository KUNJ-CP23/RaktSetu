// models/Message.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({

    MessageID: { 
        type: Number, 
        required: true, 
        unique: true 
    },

    SenderID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },

    ReceiverID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },

    Message: String,

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

module.exports = mongoose.model('Message', messageSchema, 'Messages');
