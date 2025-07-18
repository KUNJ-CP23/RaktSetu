// controllers/hospitalController.js

const Hospital = require('../models/Hospital');

// Get All
exports.getAllHospitals = async (res) => {
    try {
        const hospitals = await Hospital.find();
        res.end(JSON.stringify(hospitals));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to fetch hospitals', error: error.message }
        ));
    }
};

// Get By ID
exports.getHospitalById = async (res, id) => {
    try {
        const hospital = await Hospital.findOne({ HospitalID: id });
        if (!hospital) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Hospital not found' }
            ));
        }
        res.end(JSON.stringify(hospital));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Error fetching hospital', error: error.message }
        ));
    }
};

// Insert
exports.insertHospital = async (res, data) => {
    try {
        const hospital = new Hospital(data);
        await hospital.save();
        res.end(JSON.stringify(
            { message: 'Hospital inserted successfully', hospital }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to insert hospital', error: error.message }
        ));
    }
};

// Update
exports.updateHospital = async (res, id, data) => {
    try {
        const updatedHospital = await Hospital.findOneAndUpdate({ HospitalID: id }, data, { new: true });
        if (!updatedHospital) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Hospital not found' }
            ));
        }
        res.end(JSON.stringify(
            { message: 'Hospital updated successfully', updatedHospital }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to update hospital', error: error.message }
        ));
    }
};

// Delete
exports.deleteHospital = async (res, id) => {
    try {
        const result = await Hospital.deleteOne({ HospitalID: id });
        if (result.deletedCount === 0) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Hospital not found for deletion' }
            ));
        }
        res.end(JSON.stringify(
            { message: 'Hospital deleted successfully' }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to delete hospital', error: error.message }
        ));
    }
};