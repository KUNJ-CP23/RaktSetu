// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: String,

    email: { 
        type: String, 
        unique: true 
    },
    
    phone: String,

    password: String,

    roleId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Role' 
    },

    gender: String,

    dob: Date,

    bloodGroupId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'BloodGroup' 
    },

    location: String,

    lastDonationDate: Date,

    privacySettings: Object,

    governmentIdProof: String,

    profileImage: String,

    verified: { 
        type: Boolean, 
        default: false 
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

module.exports = mongoose.model('User', userSchema);