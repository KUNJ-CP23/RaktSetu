// contollers/userController.js

const User = require('../models/User');


// Get All
exports.getAllUsers = async (res) => {
    try {
        const users = await User.find();
        res.end(JSON.stringify(users));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to fetch users', error: error.message }
        ));
    }
};


// Get By ID
exports.getUserById = async (res, id) => {
    try {
        const user = await User.findOne({ UserID: id });
        if (!user) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'User not found' }
            ));
        }
        res.end(JSON.stringify(user));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Error fetching user', error: error.message }
        ));
    }
};


// Insert
exports.insertUser = async (res, data) => {
    try {
        const user = new User(data);
        await user.save();
        res.end(JSON.stringify(
            { message: 'User inserted successfully', user }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to insert user', error: error.message }
        ));
    }
};


// Update
exports.updateUser = async (res, id, data) => {
    try {
        const updatedUser = await User.findOneAndUpdate({ UserID: id }, data, { new: true });
        if (!updatedUser) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'User not found' }
            ));
        }
        res.end(JSON.stringify({ message: 'User updated successfully', updatedUser }));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to update user', error: error.message }
        ));
    }
};


// Delete
exports.deleteUser = async (res, id) => {
    try {
        const result = await User.deleteOne({ UserID: id });
        if (result.deletedCount === 0) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'User not found for deletion' }
            ));
        }
        res.end(JSON.stringify({ message: 'User deleted successfully' }));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to delete user', error: error.message }
        ));
    }
};
