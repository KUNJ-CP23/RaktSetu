// controllers/campaignController.js

const Campaign = require('../models/Campaign');

// Get All
exports.getAllCampaigns = async (res) => {
    try {
        const campaigns = await Campaign.find();
        res.end(JSON.stringify(campaigns));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to fetch campaigns', error: error.message }
        ));
    }
};

// Get By ID
exports.getCampaignById = async (res, id) => {
    try {
        const campaign = await Campaign.findOne({ CampaignID: id });
        if (!campaign) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Campaign not found' }
            ));
        }
        res.end(JSON.stringify(campaign));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Error fetching campaign', error: error.message }
        ));
    }
};

// Insert
exports.insertCampaign = async (res, data) => {
    try {
        const campaign = new Campaign(data);
        await campaign.save();
        res.end(JSON.stringify(
            { message: 'Campaign inserted successfully', campaign }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to insert campaign', error: error.message }
        ));
    }
};

// Update
exports.updateCampaign = async (res, id, data) => {
    try {
        const updatedCampaign = await Campaign.findOneAndUpdate({ CampaignID: id }, data, { new: true });
        if (!updatedCampaign) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Campaign not found' }
            ));
        }
        res.end(JSON.stringify(
            { message: 'Campaign updated successfully', updatedCampaign }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to update campaign', error: error.message }
        ));
    }
};

// Delete
exports.deleteCampaign = async (res, id) => {
    try {
        const result = await Campaign.deleteOne({ CampaignID: id });
        if (result.deletedCount === 0) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Campaign not found for deletion' }
            ));
        }
        res.end(JSON.stringify(
            { message: 'Campaign deleted successfully' }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to delete campaign', error: error.message }
        ));
    }
};