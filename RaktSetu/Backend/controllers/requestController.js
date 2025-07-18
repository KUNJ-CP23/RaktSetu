// controllers/requestController.js

const Request = require('../models/Request');

// Get All
exports.getAllRequests = async (res) => {
    try {
        const requests = await Request.find();
        res.end(JSON.stringify(requests));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to fetch requests', error: error.message }
        ));
    }
};

// Get By ID
exports.getRequestById = async (res, id) => {
    try {
        const request = await Request.findOne({ RequestID: id });
        if (!request) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Request not found' }
            ));
        }
        res.end(JSON.stringify(request));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Error fetching request', error: error.message }
        ));
    }
};

// Insert
exports.insertRequest = async (res, data) => {
    try {
        const request = new Request(data);
        await request.save();
        res.end(JSON.stringify(
            { message: 'Request inserted successfully', request }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to insert request', error: error.message }
        ));
    }
};

// Update
exports.updateRequest = async (res, id, data) => {
    try {
        const updatedRequest = await Request.findOneAndUpdate({ RequestID: id }, data, { new: true });
        if (!updatedRequest) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Request not found' }
            ));
        }
        res.end(JSON.stringify(
            { message: 'Request updated successfully', updatedRequest }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to update request', error: error.message }
        ));
    }
};

// Delete
exports.deleteRequest = async (res, id) => {
    try {
        const result = await Request.deleteOne({ RequestID: id });
        if (result.deletedCount === 0) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Request not found for deletion' }
            ));
        }
        res.end(JSON.stringify(
            { message: 'Request deleted successfully' }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to delete request', error: error.message }
        ));
    }
};