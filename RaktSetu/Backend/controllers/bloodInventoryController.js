// controller/bloodInventoryController.js

const BloodInventory = require('../models/BloodInventory');

// Get All
exports.getAllBloodInventory = async (res) => {
    try {
        const inventory = await BloodInventory.find();
        res.end(JSON.stringify(inventory));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to fetch blood inventory', error: error.message }
        ));
    }
};

// Get By ID
exports.getBloodInventoryById = async (res, id) => {
    try {
        const item = await BloodInventory.findOne({ InventoryID: id });
        if (!item) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Blood inventory item not found' }
            ));
        }
        res.end(JSON.stringify(item));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Error fetching blood inventory item', error: error.message }
        ));
    }
};

// Insert
exports.insertBloodInventory = async (res, data) => {
    try {
        const item = new BloodInventory(data);
        await item.save();
        res.end(JSON.stringify(
            { message: 'Blood inventory item inserted successfully', item }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to insert blood inventory item', error: error.message }
        ));
    }
};

// Update
exports.updateBloodInventory = async (res, id, data) => {
    try {
        const updatedItem = await BloodInventory.findOneAndUpdate({ InventoryID: id }, data, { new: true });
        if (!updatedItem) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Blood inventory item not found' }
            ));
        }
        res.end(JSON.stringify(
            { message: 'Blood inventory item updated successfully', updatedItem }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to update blood inventory item', error: error.message }
        ));
    }
};

// Delete
exports.deleteBloodInventory = async (res, id) => {
    try {
        const result = await BloodInventory.deleteOne({ InventoryID: id });
        if (result.deletedCount === 0) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Blood inventory item not found for deletion' }
            ));
        }
        res.end(JSON.stringify(
            { message: 'Blood inventory item deleted successfully' }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to delete blood inventory item', error: error.message }
        ));
    }
};