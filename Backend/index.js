require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const cors = require('cors');
app.use(cors()); // Allow requests from frontend


// Middleware
app.use(bodyParser.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Controllers
const userController = require('./controllers/userController');
const roleController = require('./controllers/roleController');
const requestController = require('./controllers/requestController');
const notificationController = require('./controllers/notificationController');
const messageController = require('./controllers/messageController');
const hospitalController = require('./controllers/hospitalController');
const donorCheckUpReportController = require('./controllers/donorCheckUpReportController');
const donationController = require('./controllers/donationController');
const documentController = require('./controllers/documentController');
const campaignController = require('./controllers/campaignController');
const bloodInventoryController = require('./controllers/bloodInventoryController');
const bloodGroupController = require('./controllers/bloodGroupController');
const bloodBankController = require('./controllers/bloodBankController');
const adminLogController = require('./controllers/adminLogController');

const auth = require('./middleware/authMiddleware');


// Role Routes
app.get('/roles', roleController.getAllRoles);
app.get('/roles/:id', roleController.getRoleById);
app.post('/roles', roleController.insertRole);
app.put('/roles/:id', roleController.updateRole);
app.delete('/roles/:id', roleController.deleteRole);

// User Routes
app.get('/users', userController.getAllUsers);
app.get('/users/:id', userController.getUserById);
app.post('/users', userController.insertUser);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);
app.post('/users/login', userController.loginUser);

// Request Routes
app.get('/requests', requestController.getAllRequests);
app.get('/requests/:id', requestController.getRequestById);
app.post('/requests', requestController.insertRequest);
app.put('/requests/:id', requestController.updateRequest);
app.delete('/requests/:id', requestController.deleteRequest);

// Notification Routes
app.get('/notifications', notificationController.getAllNotifications);
app.get('/notifications/:id', notificationController.getNotificationById);
app.post('/notifications', notificationController.insertNotification);
app.put('/notifications/:id', notificationController.updateNotification);
app.delete('/notifications/:id', notificationController.deleteNotification);

// Message Routes
app.get('/messages', messageController.getAllMessages);
app.get('/messages/:id', messageController.getMessageById);
app.post('/messages', messageController.insertMessage);
app.put('/messages/:id', messageController.updateMessage);
app.delete('/messages/:id', messageController.deleteMessage);

// Hospital Routes
app.get('/hospitals', hospitalController.getAllHospitals);
app.get('/hospitals/:id', hospitalController.getHospitalById);
app.post('/hospitals', hospitalController.insertHospital);
app.put('/hospitals/:id', hospitalController.updateHospital);
app.delete('/hospitals/:id', hospitalController.deleteHospital);

// Donor Check-Up Report Routes
app.get('/reports', donorCheckUpReportController.getAllReports);
app.get('/reports/:id', donorCheckUpReportController.getReportById);
app.post('/reports', donorCheckUpReportController.insertReport);
app.put('/reports/:id', donorCheckUpReportController.updateReport);
app.delete('/reports/:id', donorCheckUpReportController.deleteReport);


// Donation Routes
app.get('/donations', donationController.getAllDonations);
app.get('/donations/:id', donationController.getDonationById);
app.post('/donations', donationController.insertDonation);
app.put('/donations/:id', donationController.updateDonation);
app.delete('/donations/:id', donationController.deleteDonation);

// Document Routes
app.get('/documents', documentController.getAllDocuments);
app.get('/documents/:id', documentController.getDocumentById);
app.post('/documents', documentController.insertDocument);
app.put('/documents/:id', documentController.updateDocument);
app.delete('/documents/:id', documentController.deleteDocument);

// Campaign Routes
app.get('/campaigns', campaignController.getAllCampaigns);
app.get('/campaigns/:id', campaignController.getCampaignById);
app.post('/campaigns', campaignController.insertCampaign);
app.put('/campaigns/:id', campaignController.updateCampaign);
app.delete('/campaigns/:id', campaignController.deleteCampaign);

// Blood Inventory Routes
app.get('/bloodInventories', bloodInventoryController.getAllBloodInventory);
app.get('/bloodInventories/:id', bloodInventoryController.getBloodInventoryById);
app.post('/bloodInventories', bloodInventoryController.insertBloodInventory);
app.put('/bloodInventories/:id', bloodInventoryController.updateBloodInventory);
app.delete('/bloodInventories/:id', bloodInventoryController.deleteBloodInventory);

// Blood Group Routes
app.get('/bloodGroups', bloodGroupController.getAllBloodGroups);
app.get('/bloodGroups/:id', bloodGroupController.getBloodGroupById);
app.post('/bloodGroups', bloodGroupController.insertBloodGroup);
app.put('/bloodGroups/:id', bloodGroupController.updateBloodGroup);
app.delete('/bloodGroups/:id', bloodGroupController.deleteBloodGroup);

// Blood Bank Routes
app.get('/bloodBanks', bloodBankController.getAllBloodBanks);
app.get('/bloodBanks/:id', bloodBankController.getBloodBankById);
app.post('/bloodBanks', bloodBankController.insertBloodBank);
app.put('/bloodBanks/:id', bloodBankController.updateBloodBank);
app.delete('/bloodBanks/:id', bloodBankController.deleteBloodBank);

// Admin Log Routes
app.get('/adminLogs', adminLogController.getAllAdminLogs);
app.get('/adminLogs/:id', adminLogController.getAdminLogById);
app.post('/adminLogs', adminLogController.insertAdminLog);
app.put('/adminLogs/:id', adminLogController.updateAdminLog);
app.delete('/adminLogs/:id', adminLogController.deleteAdminLog);


app.get('/protected', auth, (req, res) => {
    res.json({
        message: 'You are authorized',
        user: req.user // this was added from the token payload
    });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
