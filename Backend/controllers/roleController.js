const Role = require('../models/Role');

// GET All Roles
exports.getAllRoles = async (req, res) => {
    try {
        const roles = await Role.find();
        res.json(roles);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch roles', error: error.message });
    }
};

// GET Role by ID
exports.getRoleById = async (req, res) => {
    const { id } = req.params;
    try {
        const role = await Role.findOne({ RoleID: id });
        if (!role) {
            return res.status(404).json({ message: 'Role not found' });
        }
        res.json(role);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching role', error: error.message });
    }
};

// POST Insert Role
exports.insertRole = async (req, res) => {
    try {
        const role = new Role(req.body);
        await role.save();
        res.json({ message: 'Role inserted successfully', role });
    } catch (error) {
        res.status(500).json({ message: 'Failed to insert role', error: error.message });
    }
};

// PUT Update Role
exports.updateRole = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedRole = await Role.findOneAndUpdate(
            { RoleID: id },
            req.body,
            { new: true }
        );
        if (!updatedRole) {
            return res.status(404).json({ message: 'Role not found' });
        }
        res.json({ message: 'Role updated successfully', updatedRole });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update role', error: error.message });
    }
};

// DELETE Role
exports.deleteRole = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Role.deleteOne({ RoleID: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Role not found for deletion' });
        }
        res.json({ message: 'Role deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete role', error: error.message });
    }
};
