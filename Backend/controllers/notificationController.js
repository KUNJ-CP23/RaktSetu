const Notification = require('../models/Notification');

// Get All Notifications
exports.getAllNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find();
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch notifications',
            error: error.message
        });
    }
};

// Get Notification by ID
exports.getNotificationById = async (req, res) => {
    const id = req.params.id;
    try {
        const notification = await Notification.findOne({ NotificationID: id });
        if (!notification) {
            return res.status(404).json({ message: 'Notification not found' });
        }
        res.status(200).json(notification);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching notification',
            error: error.message
        });
    }
};

// Insert New Notification
exports.insertNotification = async (req, res) => {
    try {
        const notification = new Notification(req.body);
        await notification.save();
        res.status(201).json({
            message: 'Notification inserted successfully',
            notification
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to insert notification',
            error: error.message
        });
    }
};

// Update Notification
exports.updateNotification = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedNotification = await Notification.findOneAndUpdate(
            { NotificationID: id },
            req.body,
            { new: true }
        );
        if (!updatedNotification) {
            return res.status(404).json({ message: 'Notification not found' });
        }
        res.status(200).json({
            message: 'Notification updated successfully',
            updatedNotification
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to update notification',
            error: error.message
        });
    }
};

// Delete Notification
exports.deleteNotification = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Notification.deleteOne({ NotificationID: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Notification not found for deletion' });
        }
        res.status(200).json({ message: 'Notification deleted successfully' });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to delete notification',
            error: error.message
        });
    }
};
