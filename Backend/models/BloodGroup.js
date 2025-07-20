// models/BloodGroup.js
const mongoose = require('mongoose');

const bloodGroupSchema = new mongoose.Schema({

    BloodGroupID: { 
        type: Number, 
        required: true, 
        unique: true 
    },

    Name: {
    type: String,
    required: true
    },
    RHFactor: {
        type: String,
        enum: ['+', '-'],
        required: true
    },

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