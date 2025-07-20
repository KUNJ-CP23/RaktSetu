// models/Hospital.js
const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({

    HospitalID: { 
        type: Number, 
        required: true, 
        unique: true 
    },

    Name: String,

    Contact: String,

    Location: String,

    RegisteredDate: Date,

    CreatedAt: { 
        type: Date, 
        default: Date.now 
    },

    ModifiedAt: { 
        type: Date, 
        default: Date.now 
    }

});

module.exports = mongoose.model('Hospital', hospitalSchema, 'Hospitals');