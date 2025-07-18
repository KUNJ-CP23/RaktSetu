// controllers/messageController.js

const Message = require('../models/Message');

// Get All
exports.getAllMessages = async (res) => {
    try {
        const messages = await Message.find();
        res.end(JSON.stringify(messages));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to fetch messages', error: error.message }
        ));
    }
};

// Get By ID
exports.getMessageById = async (res, id) => {
    try {
        const message = await Message.findOne({ MessageID: id });
        if (!message) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Message not found' }
            ));
        }
        res.end(JSON.stringify(message));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Error fetching message', error: error.message }
        ));
    }
};

// Insert
exports.insertMessage = async (res, data) => {
    try {
        const message = new Message(data);
        await message.save();
        res.end(JSON.stringify(
            { message: 'Message inserted successfully', message }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to insert message', error: error.message }
        ));
    }
};

// Update
exports.updateMessage = async (res, id, data) => {
    try {
        const updatedMessage = await Message.findOneAndUpdate({ MessageID: id }, data, { new: true });
        if (!updatedMessage) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Message not found' }
            ));
        }
        res.end(JSON.stringify(
            { message: 'Message updated successfully', updatedMessage }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to update message', error: error.message }
        ));
    }
};

// Delete
exports.deleteMessage = async (res, id) => {
    try {
        const result = await Message.deleteOne({ MessageID: id });
        if (result.deletedCount === 0) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Message not found for deletion' }
            ));
        }
        res.end(JSON.stringify(
            { message: 'Message deleted successfully' }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to delete message', error: error.message }
        ));
    }
};