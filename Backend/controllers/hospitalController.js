const Hospital = require('../models/Hospital');

// Get All Hospitals
exports.getAllHospitals = async (req, res) => {
    try {
        const hospitals = await Hospital.find();
        res.status(200).json(hospitals);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch hospitals',
            error: error.message
        });
    }
};

// Get Hospital by ID
exports.getHospitalById = async (req, res) => {
    const id = req.params.id;
    try {
        const hospital = await Hospital.findOne({ HospitalID: id });
        if (!hospital) {
            return res.status(404).json({ message: 'Hospital not found' });
        }
        res.status(200).json(hospital);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching hospital',
            error: error.message
        });
    }
};

// Insert New Hospital
exports.insertHospital = async (req, res) => {
    try {
        const hospital = new Hospital(req.body);
        await hospital.save();
        res.status(201).json({
            message: 'Hospital inserted successfully',
            hospital
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to insert hospital',
            error: error.message
        });
    }
};

// Update Hospital
exports.updateHospital = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedHospital = await Hospital.findOneAndUpdate(
            { HospitalID: id },
            req.body,
            { new: true }
        );
        if (!updatedHospital) {
            return res.status(404).json({ message: 'Hospital not found' });
        }
        res.status(200).json({
            message: 'Hospital updated successfully',
            updatedHospital
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to update hospital',
            error: error.message
        });
    }
};

// Delete Hospital
exports.deleteHospital = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Hospital.deleteOne({ HospitalID: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Hospital not found for deletion' });
        }
        res.status(200).json({ message: 'Hospital deleted successfully' });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to delete hospital',
            error: error.message
        });
    }
};
