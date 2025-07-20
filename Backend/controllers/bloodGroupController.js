// controllers/bloodGroupController.js

const BloodGroup = require('../models/BloodGroup');

// Get All
exports.getAllBloodGroups = async (req, res) => {
    try {
        const bloodGroups = await BloodGroup.find();
        console.log('Fetched blood groups:', bloodGroups);
        res.status(200).json(bloodGroups);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Failed to fetch blood groups',
            error: error.message
        });
    }
};

// Get By ID
exports.getBloodGroupById = async (req, res) => {
    const id = req.params.id;
    try {
        const bloodGroup = await BloodGroup.findOne({ BloodGroupID: id });
        if (!bloodGroup) {
            return res.status(404).json({ message: 'Blood group not found' });
        }
        res.status(200).json(bloodGroup);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching blood group',
            error: error.message
        });
    }
};

// Insert
exports.insertBloodGroup = async (req, res) => {
    try {
        const bloodGroup = new BloodGroup(req.body);
        await bloodGroup.save();
        res.status(201).json({
            message: 'Blood group inserted successfully',
            bloodGroup
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to insert blood group',
            error: error.message
        });
    }
};

// Update
exports.updateBloodGroup = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedBloodGroup = await BloodGroup.findOneAndUpdate(
            { BloodGroupID: id },
            req.body,
            { new: true }
        );
        if (!updatedBloodGroup) {
            return res.status(404).json({ message: 'Blood group not found' });
        }
        res.status(200).json({
            message: 'Blood group updated successfully',
            updatedBloodGroup
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to update blood group',
            error: error.message
        });
    }
};

// Delete
exports.deleteBloodGroup = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await BloodGroup.deleteOne({ BloodGroupID: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({
                message: 'Blood group not found for deletion'
            });
        }
        res.status(200).json({
            message: 'Blood group deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to delete blood group',
            error: error.message
        });
    }
};
