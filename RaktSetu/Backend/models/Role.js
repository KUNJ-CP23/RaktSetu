const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
  
    description: {
        type: String,
        default: ''
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

module.exports = mongoose.model('Role', roleSchema);