// controllers/donationController.js

const Donation = require('../models/Donation');

// Get All
exports.getAllDonations = async (res) => {
    try {
        const donations = await Donation.find();
        res.end(JSON.stringify(donations));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to fetch donations', error: error.message }
        ));
    }
};

// Get By ID
exports.getDonationById = async (res, id) => {
    try {
        const donation = await Donation.findOne({ DonationID: id });
        if (!donation) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Donation not found' }
            ));
        }
        res.end(JSON.stringify(donation));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Error fetching donation', error: error.message }
        ));
    }
};

// Insert
exports.insertDonation = async (res, data) => {
    try {
        const donation = new Donation(data);
        await donation.save();
        res.end(JSON.stringify(
            { message: 'Donation inserted successfully', donation }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to insert donation', error: error.message }
        ));
    }
};

// Update
exports.updateDonation = async (res, id, data) => {
    try {
        const updatedDonation = await Donation.findOneAndUpdate({ DonationID: id }, data, { new: true });
        if (!updatedDonation) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Donation not found' }
            ));
        }
        res.end(JSON.stringify(
            { message: 'Donation updated successfully', updatedDonation }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to update donation', error: error.message }
        ));
    }
};

// Delete
exports.deleteDonation = async (res, id) => {
    try {
        const result = await Donation.deleteOne({ DonationID: id });
        if (result.deletedCount === 0) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Donation not found for deletion' }
            ));
        }
        res.end(JSON.stringify(
            { message: 'Donation deleted successfully' }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to delete donation', error: error.message }
        ));
    }
};