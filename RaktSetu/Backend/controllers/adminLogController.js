// controllers/adminLogController.js

const AdminLog = require('../models/AdminLog');

// Get All
exports.getAllAdminLogs = async (res) => {
    try {
        const logs = await AdminLog.find();
        res.end(JSON.stringify(logs));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to fetch admin logs', error: error.message }
        ));
    }
};

// Get By ID
exports.getAdminLogById = async (res, id) => {
    try {
        const log = await AdminLog.findOne({ LogID: id });
        if (!log) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Admin log not found' }
            ));
        }
        res.end(JSON.stringify(log));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Error fetching admin log', error: error.message }
        ));
    }
};

// Insert
exports.insertAdminLog = async (res, data) => {
    try {
        const log = new AdminLog(data);
        await log.save();
        res.end(JSON.stringify(
            { message: 'Admin log inserted successfully', log }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to insert admin log', error: error.message }
        ));
    }
};

// Update
exports.updateAdminLog = async (res, id, data) => {
    try {
        const updatedLog = await AdminLog.findOneAndUpdate({ LogID: id }, data, { new: true });
        if (!updatedLog) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Admin log not found' }
            ));
        }
        res.end(JSON.stringify(
            { message: 'Admin log updated successfully', updatedLog }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to update admin log', error: error.message }
        ));
    }
};

// Delete
exports.deleteAdminLog = async (res, id) => {
    try {
        const result = await AdminLog.deleteOne({ LogID: id });
        if (result.deletedCount === 0) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Admin log not found for deletion' }
            ));
        }
        res.end(JSON.stringify(
            { message: 'Admin log deleted successfully' }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to delete admin log', error: error.message }
        ));
    }
};