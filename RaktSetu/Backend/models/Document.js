// models/Document.js
const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({

    DocumentID: { 
        type: Number, 
        required: true, 
        unique: true 
    },

    UploadedBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },

    UserRoleID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Role' 
    },

    Type: String,

    FilePath: String,

    UploadedAt: { 
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

module.exports = mongoose.model('Document', documentSchema, 'Documents');
