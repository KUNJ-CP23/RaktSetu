// controllers/bloodGroupController.js

const BloodGroup = require('../models/BloodGroup');


// Get All
exports.getAllBloodGroups = async (res) => {
    try {
        const bloodGroups = await BloodGroup.find();
        res.end(JSON.stringify(bloodGroups));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to fetch blood groups', error: error.message }
        ));
    }
};


// Get By ID
exports.getBloodGroupById = async (res, id) => {
    try {
        const bloodGroup = await BloodGroup.findOne({ BloodGroupID: id });
        if (!bloodGroup) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Blood group not found' }
            ));
        }
        res.end(JSON.stringify(bloodGroup));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Error fetching blood group', error: error.message }
        ));
    }
};


// Insert
exports.insertBloodGroup = async (res, data) => {
    try {
        const bloodGroup = new BloodGroup(data);
        await bloodGroup.save();
        res.end(JSON.stringify(
            { message: 'Blood group inserted successfully', bloodGroup }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to insert blood group', error: error.message }
        ));
    }
};


// Update
exports.updateBloodGroup = async (res, id, data) => {
    try {
        const updatedBloodGroup = await BloodGroup.findOneAndUpdate({ BloodGroupID: id }, data, { new: true });
        if (!updatedBloodGroup) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Blood group not found' }
            ));
        }
        res.end(JSON.stringify({ message: 'Blood group updated successfully', updatedBloodGroup }));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to update blood group', error: error.message }
        ));
    }
};


// Delete
exports.deleteBloodGroup = async (res, id) => {
    try {
        const result = await BloodGroup.deleteOne({ BloodGroupID: id });
        if (result.deletedCount === 0) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Blood group not found for deletion' }
            ));
        }
        res.end(JSON.stringify({ message: 'Blood group deleted successfully' }));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to delete blood group', error: error.message }
        ));
    }
};