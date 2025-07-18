// controllers/bloodBankController.js

const BloodBank = require('../models/BloodBank');

// Get All
exports.getAllBloodBanks = async (res) => {
    try {
        const bloodBanks = await BloodBank.find();
        res.end(JSON.stringify(bloodBanks));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to fetch blood banks', error: error.message }
        ));
    }
};

// Get By ID
exports.getBloodBankById = async (res, id) => {
    try {
        const bloodBank = await BloodBank.findOne({ BloodBankID: id });
        if (!bloodBank) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Blood bank not found' }
            ));
        }
        res.end(JSON.stringify(bloodBank));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Error fetching blood bank', error: error.message }
        ));
    }
};

// Insert
exports.insertBloodBank = async (res, data) => {
    try {
        const bloodBank = new BloodBank(data);
        await bloodBank.save();
        res.end(JSON.stringify(
            { message: 'Blood bank inserted successfully', bloodBank }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to insert blood bank', error: error.message }
        ));
    }
};

// Update
exports.updateBloodBank = async (res, id, data) => {
    try {
        const updatedBloodBank = await BloodBank.findOneAndUpdate({ BloodBankID: id }, data, { new: true });
        if (!updatedBloodBank) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Blood bank not found' }
            ));
        }
        res.end(JSON.stringify(
            { message: 'Blood bank updated successfully', updatedBloodBank }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to update blood bank', error: error.message }
        ));
    }
};

// Delete
exports.deleteBloodBank = async (res, id) => {
    try {
        const result = await BloodBank.deleteOne({ BloodBankID: id });
        if (result.deletedCount === 0) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Blood bank not found for deletion' }
            ));
        }
        res.end(JSON.stringify(
            { message: 'Blood bank deleted successfully' }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to delete blood bank', error: error.message }
        ));
    }
};