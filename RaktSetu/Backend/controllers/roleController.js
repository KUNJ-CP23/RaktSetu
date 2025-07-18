// contollers/roleController.js

const Role = require('../models/Role');


// Get All
exports.getAllRoles = async (res) => {
    try {
        const roles = await Role.find();
        res.end(JSON.stringify(roles));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to fetch roles', error: error.message }
        ));
    }
};


// Get By ID
exports.getRoleById = async (res, id) => {
    try {
        const role = await Role.findOne({ RoleID: id });
        if (!role) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Role not found' }
            ));
        }
        res.end(JSON.stringify(role));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Error fetching role', error: error.message }
        ));
    }
};


// Insert
exports.insertRole = async (res, data) => {
    try {
        const role = new Role(data);
        await role.save();
        res.end(JSON.stringify(
            { message: 'Role inserted successfully', role }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to insert role', error: error.message }
        ));
    }
};


// Update
exports.updateRole = async (res, id, data) => {
    try {
        const updatedRole = await Role.findOneAndUpdate({ RoleID: id }, data, { new: true });
        if (!updatedRole) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Role not found' }
            ));
        }
        res.end(JSON.stringify({ message: 'Role updated successfully', updatedRole }));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to update role', error: error.message }
        ));
    }
};


// Delete
exports.deleteRole = async (res, id) => {
    try {
        const result = await Role.deleteOne({ RoleID: id });
        if (result.deletedCount === 0) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Role not found for deletion' }
            ));
        }
        res.end(JSON.stringify({ message: 'Role deleted successfully' }));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to delete role', error: error.message }
        ));
    }
};