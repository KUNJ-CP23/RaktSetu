// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    UserID: { 
        type: Number,
        required: true,
        unique: true
    },

    Name: String,

    Email: { 
        type: String, 
        unique: true 
    },

    Phone: String,

    Password: String,

    RoleID: Number,  

    Gender: String,

    DOB: Date,

    BloodGroupID: Number, 

    Location: String,

    LastDonationDate: Date,

    PrivacySettings: Object,

    GovernmentIDProof: String,

    ProfileImage: String,

    Verified: { 
        type: Boolean, 
        default: false 
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

module.exports = mongoose.model('User', userSchema, 'Users');
