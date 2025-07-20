const DonorCheckUpReport = require('../models/DonorCheckUpReport');

// Get All Reports
exports.getAllReports = async (req, res) => {
    try {
        const reports = await DonorCheckUpReport.find().populate('DonorID UploadedBy');
        res.json(reports);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch donor check-up reports', error: error.message });
    }
};

// Get Report by ReportID
exports.getReportById = async (req, res) => {
    const id = req.params.id;
    try {
        const report = await DonorCheckUpReport.findOne({ ReportID: id }).populate('DonorID UploadedBy');
        if (!report)
            return res.status(404).json({ message: 'Report not found' });
        res.json(report);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching report', error: error.message });
    }
};

// Insert Report
exports.insertReport = async (req, res) => {
    try {
        const report = new DonorCheckUpReport(req.body);
        await report.save();
        res.json({ message: 'Report inserted successfully', report });
    } catch (error) {
        res.status(500).json({ message: 'Failed to insert report', error: error.message });
    }
};

// Update Report
exports.updateReport = async (req, res) => {
    const id = req.params.id;
    try {
        const updated = await DonorCheckUpReport.findOneAndUpdate({ ReportID: id }, req.body, { new: true });
        if (!updated)
            return res.status(404).json({ message: 'Report not found' });
        res.json({ message: 'Report updated successfully', updated });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update report', error: error.message });
    }
};

// Delete Report
exports.deleteReport = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await DonorCheckUpReport.deleteOne({ ReportID: id });
        if (result.deletedCount === 0)
            return res.status(404).json({ message: 'Report not found for deletion' });
        res.json({ message: 'Report deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete report', error: error.message });
    }
};