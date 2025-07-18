// models/BloodGroup.js
const mongoose = require('mongoose');

const bloodGroupSchema = new mongoose.Schema({

    name: { 
        type: String, 
        required: true 
    },
    
    rhFactor: { 
        type: String, 
        required: true 
    },
    
    compatibleWith: [{ 
        type: String 
    }],
        
    createdAt: { 
        type: Date, 
        default: Date.now 
    },

    modifiedAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('BloodGroup', bloodGroupSchema);