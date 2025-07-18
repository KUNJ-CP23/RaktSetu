// models/Document.js
const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    
    uploadedBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    
    userRoleId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Role' 
    },
    
    type: String,
    
    filePath: String,
    
    uploadedAt: { 
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

module.exports = mongoose.model('Document', documentSchema);