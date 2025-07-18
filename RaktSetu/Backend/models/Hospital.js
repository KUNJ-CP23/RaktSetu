// models/Hospital.js
const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({

    name: String,
    
    contact: String,
    
    location: String,
    
    registeredDate: Date,
    
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    
    modifiedAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Hospital', hospitalSchema);