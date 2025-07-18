// controllers/donorCheckuoReportController.js

const DonorCheckupReport = require('../models/DonorCheckupReport');

// Get All
exports.getAllDonorCheckupReports = async (res) => {
    try {
        const reports = await DonorCheckupReport.find();
        res.end(JSON.stringify(reports));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to fetch donor checkup reports', error: error.message }
        ));
    }
};

// Get By ID
exports.getDonorCheckupReportById = async (res, id) => {
    try {
        const report = await DonorCheckupReport.findOne({ ReportID: id });
        if (!report) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Donor checkup report not found' }
            ));
        }
        res.end(JSON.stringify(report));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Error fetching donor checkup report', error: error.message }
        ));
    }
};

// Insert
exports.insertDonorCheckupReport = async (res, data) => {
    try {
        const report = new DonorCheckupReport(data);
        await report.save();
        res.end(JSON.stringify(
            { message: 'Donor checkup report inserted successfully', report }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to insert donor checkup report', error: error.message }
        ));
    }
};

// Update
exports.updateDonorCheckupReport = async (res, id, data) => {
    try {
        const updatedReport = await DonorCheckupReport.findOneAndUpdate({ ReportID: id }, data, { new: true });
        if (!updatedReport) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Donor checkup report not found' }
            ));
        }
        res.end(JSON.stringify({ message: 'Donor checkup report updated successfully', updatedReport }));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to update donor checkup report', error: error.message }
        ));
    }
};

// Delete
exports.deleteDonorCheckupReport = async (res, id) => {
    try {
        const result = await DonorCheckupReport.deleteOne({ ReportID: id });
        if (result.deletedCount === 0) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Donor checkup report not found for deletion' }
            ));
        }
        res.end(JSON.stringify({ message: 'Donor checkup report deleted successfully' }));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to delete donor checkup report', error: error.message }
        ));
    }
};