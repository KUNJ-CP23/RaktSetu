const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    
    RoleID: {
        type: Number,
        required: true,
        unique: true
    },

    Name: {
        type: String,
        required: true
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

module.exports = mongoose.model('Role', roleSchema, 'Roles');
