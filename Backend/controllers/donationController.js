// controllers/donationController.js

const Donation = require('../models/Donation');

// Get All Donations
// exports.getAllDonations = async (req, res) => {
//     try {
//         const donations = await Donation.find()
//         .populate('DonorID')
//         .populate('BloodBankID')
//         .populate('CheckUpReportID');
//         console.log("Fetched donations:", data); 
//         res.json(donations);
//     } catch (error) {
//         res.status(500).json({
//             message: 'Failed to fetch donations',
//             error: error.message
//         });
//     }
// };

exports.getAllDonations = async (req, res) => {
    try {
        const donations = await Donation.find()
            .populate('DonorID')
            .populate('BloodBankID')
            .populate('CheckUpReportID');
        console.log("Fetched donations:", donations); // FIXED LOG
        res.json(donations);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch donations',
            error: error.message
        });
    }
};


// Get Donation By ID
exports.getDonationById = async (req, res) => {
    const { id } = req.params;
    try {
        const donation = await Donation.findOne({ DonationID: id });
        if (!donation) {
            return res.status(404).json({ message: 'Donation not found' });
        }
        res.json(donation);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching donation',
            error: error.message
        });
    }
};

// Insert Donation
exports.insertDonation = async (req, res) => {
    try {
        const donation = new Donation(req.body);
        await donation.save();
        res.status(201).json({
            message: 'Donation inserted successfully',
            donation
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to insert donation',
            error: error.message
        });
    }
};

// Update Donation
exports.updateDonation = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedDonation = await Donation.findOneAndUpdate(
            { DonationID: id },
            req.body,
            { new: true }
        );
        if (!updatedDonation) {
            return res.status(404).json({ message: 'Donation not found' });
        }
        res.json({
            message: 'Donation updated successfully',
            updatedDonation
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to update donation',
            error: error.message
        });
    }
};

// Delete Donation
exports.deleteDonation = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Donation.deleteOne({ DonationID: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Donation not found for deletion' });
        }
        res.json({ message: 'Donation deleted successfully' });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to delete donation',
            error: error.message
        });
    }
};
