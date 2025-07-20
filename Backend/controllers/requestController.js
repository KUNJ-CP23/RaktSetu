// controllers/requestController.js

const Request = require('../models/Request');

// Get All Requests
exports.getAllRequests = async (req, res) => {
    try {
        const requests = await Request.find();
        res.json(requests);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch requests', error: error.message });
    }
};

// Get Request By ID
exports.getRequestById = async (req, res) => {
    try {
        const id = req.params.id;
        const request = await Request.findOne({ RequestID: id });

        if (!request) {
            return res.status(404).json({ message: 'Request not found' });
        }

        res.json(request);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching request', error: error.message });
    }
};

// Insert Request
exports.insertRequest = async (req, res) => {
    try {
        const request = new Request(req.body);
        await request.save();
        res.status(201).json({ message: 'Request inserted successfully', request });
    } catch (error) {
        res.status(500).json({ message: 'Failed to insert request', error: error.message });
    }
};

// Update Request
exports.updateRequest = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedRequest = await Request.findOneAndUpdate({ RequestID: id }, req.body, { new: true });

        if (!updatedRequest) {
            return res.status(404).json({ message: 'Request not found' });
        }

        res.json({ message: 'Request updated successfully', updatedRequest });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update request', error: error.message });
    }
};

// Delete Request
exports.deleteRequest = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Request.deleteOne({ RequestID: id });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Request not found for deletion' });
        }

        res.json({ message: 'Request deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete request', error: error.message });
    }
};
