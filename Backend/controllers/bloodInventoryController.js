const BloodInventory = require('../models/BloodInventory');

// Get All
exports.getAllBloodInventory = async (req, res) => {
    try {
        const inventory = await BloodInventory.find();
        res.json(inventory);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch blood inventory', error: error.message });
    }
};

// Get by ID
exports.getBloodInventoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const item = await BloodInventory.findOne({ InventoryID: id });
        if (!item) {
            return res.status(404).json({ message: 'Blood inventory item not found' });
        }
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blood inventory item', error: error.message });
    }
};

// Insert
exports.insertBloodInventory = async (req, res) => {
    try {
        const item = new BloodInventory(req.body);
        await item.save();
        res.json({ message: 'Blood inventory item inserted successfully', item });
    } catch (error) {
        res.status(500).json({ message: 'Failed to insert blood inventory item', error: error.message });
    }
};

// Update
exports.updateBloodInventory = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedItem = await BloodInventory.findOneAndUpdate(
            { InventoryID: id },
            req.body,
            { new: true }
        );
        if (!updatedItem) {
            return res.status(404).json({ message: 'Blood inventory item not found' });
        }
        res.json({ message: 'Blood inventory item updated successfully', updatedItem });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update blood inventory item', error: error.message });
    }
};

// Delete
exports.deleteBloodInventory = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await BloodInventory.deleteOne({ InventoryID: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Blood inventory item not found for deletion' });
        }
        res.json({ message: 'Blood inventory item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete blood inventory item', error: error.message });
    }
};
