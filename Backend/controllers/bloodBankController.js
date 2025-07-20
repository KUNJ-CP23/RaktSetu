const BloodBank = require('../models/BloodBank');

// Get All
exports.getAllBloodBanks = async (req, res) => {
    try {
        const bloodBanks = await BloodBank.find();
        res.status(200).json(bloodBanks);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch blood banks',
            error: error.message
        });
    }
};

// Get By ID
exports.getBloodBankById = async (req, res) => {
    try {
        const { id } = req.params;
        const bloodBank = await BloodBank.findOne({ BloodBankID: id });
        if (!bloodBank) {
            return res.status(404).json({ message: 'Blood bank not found' });
        }
        res.status(200).json(bloodBank);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching blood bank',
            error: error.message
        });
    }
};

// Insert
exports.insertBloodBank = async (req, res) => {
    try {
        const bloodBank = new BloodBank(req.body);
        await bloodBank.save();
        res.status(201).json({
            message: 'Blood bank inserted successfully',
            bloodBank
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to insert blood bank',
            error: error.message
        });
    }
};

// Update
exports.updateBloodBank = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBloodBank = await BloodBank.findOneAndUpdate(
            { BloodBankID: id },
            req.body,
            { new: true }
        );
        if (!updatedBloodBank) {
            return res.status(404).json({ message: 'Blood bank not found' });
        }
        res.status(200).json({
            message: 'Blood bank updated successfully',
            updatedBloodBank
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to update blood bank',
            error: error.message
        });
    }
};

// Delete
exports.deleteBloodBank = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await BloodBank.deleteOne({ BloodBankID: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Blood bank not found for deletion' });
        }
        res.status(200).json({ message: 'Blood bank deleted successfully' });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to delete blood bank',
            error: error.message
        });
    }
};

// Search
exports.searchBloodBanks = async (req, res) => {
    try {
        const { name, location, bloodGroup } = req.query;
        const filter = {};

        if (name) {
            filter.name = { $regex: new RegExp(name, 'i') };
        }

        // if (location) {
        //     filter.location = { $regex: new RegExp(location, 'i') };
        // }

        // if (bloodGroup) {
        //     filter.availableBloodGroups = bloodGroup;
        // }

        const bloodBanks = await BloodBank.find(filter);
        res.status(200).json(bloodBanks);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
