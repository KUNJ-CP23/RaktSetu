// controllers/notificationController.js

const Notification = require('../models/Notification');

// Get All
exports.getAllNotifications = async (res) => {
    try {
        const notifications = await Notification.find();
        res.end(JSON.stringify(notifications));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to fetch notifications', error: error.message }
        ));
    }
};

// Get By ID
exports.getNotificationById = async (res, id) => {
    try {
        const notification = await Notification.findOne({ NotificationID: id });
        if (!notification) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Notification not found' }
            ));
        }
        res.end(JSON.stringify(notification));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Error fetching notification', error: error.message }
        ));
    }
};

// Insert
exports.insertNotification = async (res, data) => {
    try {
        const notification = new Notification(data);
        await notification.save();
        res.end(JSON.stringify(
            { message: 'Notification inserted successfully', notification }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to insert notification', error: error.message }
        ));
    }
};

// Update
exports.updateNotification = async (res, id, data) => {
    try {
        const updatedNotification = await Notification.findOneAndUpdate({ NotificationID: id }, data, { new: true });
        if (!updatedNotification) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Notification not found' }
            ));
        }
        res.end(JSON.stringify(
            { message: 'Notification updated successfully', updatedNotification }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to update notification', error: error.message }
        ));
    }
};

// Delete
exports.deleteNotification = async (res, id) => {
    try {
        const result = await Notification.deleteOne({ NotificationID: id });
        if (result.deletedCount === 0) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Notification not found for deletion' }
            ));
        }
        res.end(JSON.stringify(
            { message: 'Notification deleted successfully' }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to delete notification', error: error.message }
        ));
    }
};