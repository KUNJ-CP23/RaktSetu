const AdminLog = require('../models/AdminLog');

// Get All
exports.getAllAdminLogs = async (req, res) => {
    try {
        const logs = await AdminLog.find();
        res.json(logs);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch admin logs',
            error: error.message
        });
    }
};

// Get By ID
exports.getAdminLogById = async (req, res) => {
    try {
        const id = req.params.id;
        const log = await AdminLog.findOne({ LogID: id });
        if (!log) {
            return res.status(404).json({ message: 'Admin log not found' });
        }
        res.json(log);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching admin log',
            error: error.message
        });
    }
};

// Insert
exports.insertAdminLog = async (req, res) => {
    try {
        const data = req.body;
        const log = new AdminLog(data);
        await log.save();
        res.json({
            message: 'Admin log inserted successfully',
            log
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to insert admin log',
            error: error.message
        });
    }
};

// Update
exports.updateAdminLog = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const updatedLog = await AdminLog.findOneAndUpdate({ LogID: id }, data, { new: true });
        if (!updatedLog) {
            return res.status(404).json({ message: 'Admin log not found' });
        }
        res.json({
            message: 'Admin log updated successfully',
            updatedLog
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to update admin log',
            error: error.message
        });
    }
};

// Delete
exports.deleteAdminLog = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await AdminLog.deleteOne({ LogID: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Admin log not found for deletion' });
        }
        res.json({ message: 'Admin log deleted successfully' });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to delete admin log',
            error: error.message
        });
    }
};
