const Campaign = require('../models/Campaign');

// Get All Campaigns
exports.getAllCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaign.find();
        res.json(campaigns);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch campaigns',
            error: error.message
        });
    }
};

// Get Campaign By ID
exports.getCampaignById = async (req, res) => {
    const { id } = req.params;
    try {
        const campaign = await Campaign.findOne({ CampaignID: id });
        if (!campaign) {
            return res.status(404).json({ message: 'Campaign not found' });
        }
        res.json(campaign);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching campaign',
            error: error.message
        });
    }
};

// Insert New Campaign
exports.insertCampaign = async (req, res) => {
    try {
        const campaign = new Campaign(req.body);
        await campaign.save();
        res.status(201).json({
            message: 'Campaign inserted successfully',
            campaign
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to insert campaign',
            error: error.message
        });
    }
};

// Update Campaign
exports.updateCampaign = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedCampaign = await Campaign.findOneAndUpdate(
            { CampaignID: id },
            req.body,
            { new: true }
        );
        if (!updatedCampaign) {
            return res.status(404).json({ message: 'Campaign not found' });
        }
        res.json({
            message: 'Campaign updated successfully',
            updatedCampaign
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to update campaign',
            error: error.message
        });
    }
};

// Delete Campaign
exports.deleteCampaign = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Campaign.deleteOne({ CampaignID: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Campaign not found for deletion' });
        }
        res.json({ message: 'Campaign deleted successfully' });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to delete campaign',
            error: error.message
        });
    }
};
