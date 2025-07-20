const Message = require('../models/Message');

// Get All Messages
exports.getAllMessages = async (req, res) => {
    try {
        const messages = await Message.find();
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch messages',
            error: error.message
        });
    }
};

// Get Message by ID
exports.getMessageById = async (req, res) => {
    const id = req.params.id;
    try {
        const message = await Message.findOne({ MessageID: id });
        if (!message) {
            return res.status(404).json({ message: 'Message not found' });
        }
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching message',
            error: error.message
        });
    }
};

// Insert New Message
exports.insertMessage = async (req, res) => {
    try {
        const message = new Message(req.body);
        await message.save();
        res.status(201).json({
            message: 'Message inserted successfully',
            message
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to insert message',
            error: error.message
        });
    }
};

// Update Message
exports.updateMessage = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedMessage = await Message.findOneAndUpdate(
            { MessageID: id },
            req.body,
            { new: true }
        );
        if (!updatedMessage) {
            return res.status(404).json({ message: 'Message not found' });
        }
        res.status(200).json({
            message: 'Message updated successfully',
            updatedMessage
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to update message',
            error: error.message
        });
    }
};

// Delete Message
exports.deleteMessage = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Message.deleteOne({ MessageID: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Message not found for deletion' });
        }
        res.status(200).json({ message: 'Message deleted successfully' });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to delete message',
            error: error.message
        });
    }
};
