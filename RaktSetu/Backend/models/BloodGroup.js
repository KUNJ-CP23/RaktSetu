// models/BloodGroup.js
const mongoose = require('mongoose');

const bloodGroupSchema = new mongoose.Schema({

    BloodGroupID: { 
        type: Number, 
        required: true, 
        unique: true 
    },

    Name: String,

    RHFactor: String,

    CompatibleWith: [String],

    CreatedAt: { 
        type: Date, 
        default: Date.now 
    },

    ModifiedAt: { 
        type: Date, 
        default: Date.now 
    }
    
});

module.exports = mongoose.model('BloodGroup', bloodGroupSchema, 'BloodGroups');
