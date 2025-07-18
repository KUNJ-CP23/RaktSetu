require('dotenv').config();
const http = require('http');
const mongoose = require('mongoose');
const url = require('url');


// Controllers
const roleController = require('./controllers/roleController');
const userController = require('./controllers/userController');
const bloodGroupController = require('./controllers/bloodGroupController');
const donorCheckupReportController = require('./controllers/donorCheckUpReportController');
const bloodInventoryController = require('./controllers/bloodInventoryController');
const donationController = require('./controllers/donationController');
const requestController = require('./controllers/requestController');
const hospitalController = require('./controllers/hospitalController');
const bloodBankController = require('./controllers/bloodBankController');
const messageController = require('./controllers/messageController');
const documentController = require('./controllers/documentController');
const notificationController = require('./controllers/notificationController');
const adminLogController = require('./controllers/adminLogController');
const campaignController = require('./controllers/campaignController');


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Create HTTP Server
const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname, query } = parsedUrl;
    let body = '';

    res.setHeader('Content-Type', 'application/json');

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', async () => {
        // ============================
        // Role Routes
        // ============================
        if (pathname === '/roles' && req.method === 'GET') {
            return roleController.getAllRoles(res);
        }

        if (pathname.startsWith('/roles/') && req.method === 'GET') {
            const id = pathname.split('/')[2];
            return roleController.getRoleById(res, id);
        }

        if (pathname === '/roles' && req.method === 'POST') {
            const data = JSON.parse(body);
            return roleController.insertRole(res, data);
        }

        if (pathname.startsWith('/roles/') && req.method === 'PUT') {
            const id = pathname.split('/')[2];
            const data = JSON.parse(body);
            return roleController.updateRole(res, id, data);
        }

        if (pathname.startsWith('/roles/') && req.method === 'DELETE') {
            const id = pathname.split('/')[2];
            return roleController.deleteRole(res, id);
        }

        // ============================
        // User Routes
        // ============================
        if (pathname === '/users' && req.method === 'GET') {
            return userController.getAllUsers(res);
        }

        if (pathname.startsWith('/users/') && req.method === 'GET') {
            const id = pathname.split('/')[2];
            return userController.getUserById(res, id);
        }

        if (pathname === '/users' && req.method === 'POST') {
            const data = JSON.parse(body);
            return userController.insertUser(res, data);
        }

        if (pathname.startsWith('/users/') && req.method === 'PUT') {
            const id = pathname.split('/')[2];
            const data = JSON.parse(body);
            return userController.updateUser(res, id, data);
        }

        if (pathname.startsWith('/users/') && req.method === 'DELETE') {
            const id = pathname.split('/')[2];
            return userController.deleteUser(res, id);
        }

        // ============================
        // Blood Groups Routes
        // ============================
        if (pathname === '/bloodGroups' && req.method === 'GET') {
            return bloodGroupController.getAllBloodGroups(res);
        }

        if (pathname.startsWith('/bloodGroups/') && req.method === 'GET') {
            const id = pathname.split('/')[2];
            return bloodGroupController.getBloodGroupById(res, id);
        }

        if (pathname === '/bloodGroups' && req.method === 'POST') {
            const data = JSON.parse(body);
            return bloodGroupController.insertBloodGroup(res, data);
        }

        if (pathname.startsWith('/bloodGroups/') && req.method === 'PUT') {
            const id = pathname.split('/')[2];
            const data = JSON.parse(body);
            return bloodGroupController.updateBloodGroup(res, id, data);
        }

        if (pathname.startsWith('/bloodGroups/') && req.method === 'DELETE') {
            const id = pathname.split('/')[2];
            return bloodGroupController.deleteBloodGroup(res, id);
        }

        // ============================
        // Donor Checkup Report Routes
        // ============================
        if (pathname === '/donorCheckupReports' && req.method === 'GET'){
            return donorCheckupReportController.getAllDonorCheckupReports(res);
        }

        if (pathname.startsWith('/donorCheckupReports/') && req.method === 'GET'){
            const id = pathname.split('/')[2];
            return donorCheckupReportController.getDonorCheckupReportById(res, id);
        }

        if (pathname === '/donorCheckupReports' && req.method === 'POST') {
            const data = JSON.parse(body);
            return donorCheckupReportController.insertDonorCheckupReport(res, data);
        }

        if (pathname.startsWith('/donorCheckupReports/') && req.method === 'PUT') {
            const id = pathname.split('/')[2];
            const data = JSON.parse(body);
            return donorCheckupReportController.updateDonorCheckupReport(res, id, data);
        }

        if (pathname.startsWith('/donorCheckupReports/') && req.method === 'DELETE') {
            const id = pathname.split('/')[2];
            return donorCheckupReportController.deleteDonorCheckupReport(res, id);
        }

        // ============================
        // Blood Inventory
        // ============================
        if (pathname === '/bloodInventory' && req.method === 'GET') 
        {
            return bloodInventoryController.getAllBloodInventory(res);
        }

        if (pathname.startsWith('/bloodInventory/') && req.method === 'GET') 
        {
            return bloodInventoryController.getBloodInventoryById(res, pathname.split('/')[2]);
        }

        if (pathname === '/bloodInventory' && req.method === 'POST') 
        {
            return bloodInventoryController.insertBloodInventory(res, data);
        }

        if (pathname.startsWith('/bloodInventory/') && req.method === 'PUT') 
        {
            return bloodInventoryController.updateBloodInventory(res, pathname.split('/')[2], data);
        }

        if (pathname.startsWith('/bloodInventory/') && req.method === 'DELETE') 
        {
            return bloodInventoryController.deleteBloodInventory(res, pathname.split('/')[2]);
        }


        // ============================
        // Donations
        // ============================
        if (pathname === '/donations' && req.method === 'GET') 
        {
            return donationController.getAllDonations(res);
        }

        if (pathname.startsWith('/donations/') && req.method === 'GET') 
        {
            return donationController.getDonationById(res, pathname.split('/')[2]);
        }

        if (pathname === '/donations' && req.method === 'POST') 
        {
            return donationController.insertDonation(res, data);
        }

        if (pathname.startsWith('/donations/') && req.method === 'PUT') 
        {
            return donationController.updateDonation(res, pathname.split('/')[2], data);
        }

        if (pathname.startsWith('/donations/') && req.method === 'DELETE') 
        {
            return donationController.deleteDonation(res, pathname.split('/')[2]);
        }


        // ============================
        // Requests
        // ============================
        if (pathname === '/requests' && req.method === 'GET') 
        {
            return requestController.getAllRequests(res);
        }

        if (pathname.startsWith('/requests/') && req.method === 'GET') 
        {
            return requestController.getRequestById(res, pathname.split('/')[2]);
        }

        if (pathname === '/requests' && req.method === 'POST') 
        {
            return requestController.insertRequest(res, data);
        }

        if (pathname.startsWith('/requests/') && req.method === 'PUT') 
        {
            return requestController.updateRequest(res, pathname.split('/')[2], data);
        }

        if (pathname.startsWith('/requests/') && req.method === 'DELETE') 
        {
            return requestController.deleteRequest(res, pathname.split('/')[2]);
        }


        // ============================
        // Hospitals
        // ============================
        if (pathname === '/hospitals' && req.method === 'GET') 
        {
            return hospitalController.getAllHospitals(res);
        }

        if (pathname.startsWith('/hospitals/') && req.method === 'GET') 
        {
            return hospitalController.getHospitalById(res, pathname.split('/')[2]);
        }

        if (pathname === '/hospitals' && req.method === 'POST') 
        {
            return hospitalController.insertHospital(res, data);
        }

        if (pathname.startsWith('/hospitals/') && req.method === 'PUT') 
        {
            return hospitalController.updateHospital(res, pathname.split('/')[2], data);
        }

        if (pathname.startsWith('/hospitals/') && req.method === 'DELETE') 
        {
            return hospitalController.deleteHospital(res, pathname.split('/')[2]);
        }


        // ============================
        // Blood Banks
        // ============================
        if (pathname === '/bloodBanks' && req.method === 'GET') 
        {
            return bloodBankController.getAllBloodBanks(res);
        }

        if (pathname.startsWith('/bloodBanks/') && req.method === 'GET') 
        {
            return bloodBankController.getBloodBankById(res, pathname.split('/')[2]);
        }

        if (pathname === '/bloodBanks' && req.method === 'POST') 
        {
            return bloodBankController.insertBloodBank(res, data);
        }

        if (pathname.startsWith('/bloodBanks/') && req.method === 'PUT') 
        {
            return bloodBankController.updateBloodBank(res, pathname.split('/')[2], data);
        }

        if (pathname.startsWith('/bloodBanks/') && req.method === 'DELETE') 
        {
            return bloodBankController.deleteBloodBank(res, pathname.split('/')[2]);
        }


        // ============================
        // Messages
        // ============================
        if (pathname === '/messages' && req.method === 'GET')
        {
            return messageController.getAllMessages(res);
        }

        if (pathname.startsWith('/messages/') && req.method === 'GET') 
        {
            return messageController.getMessageById(res, pathname.split('/')[2]);
        }

        if (pathname === '/messages' && req.method === 'POST') 
        {
            return messageController.insertMessage(res, data);
        }

        if (pathname.startsWith('/messages/') && req.method === 'PUT') 
        {
            return messageController.updateMessage(res, pathname.split('/')[2], data);
        }

        if (pathname.startsWith('/messages/') && req.method === 'DELETE') 
        {
            return messageController.deleteMessage(res, pathname.split('/')[2]);
        }


        // ============================
        // Documents
        // ============================
        if (pathname === '/documents' && req.method === 'GET') 
        {
            return documentController.getAllDocuments(res);
        }

        if (pathname.startsWith('/documents/') && req.method === 'GET') 
        {
            return documentController.getDocumentById(res, pathname.split('/')[2]);
        }

        if (pathname === '/documents' && req.method === 'POST') 
        {
            return documentController.insertDocument(res, data);
        }

        if (pathname.startsWith('/documents/') && req.method === 'PUT') 
        {
            return documentController.updateDocument(res, pathname.split('/')[2], data);
        }

        if (pathname.startsWith('/documents/') && req.method === 'DELETE') 
        {
            return documentController.deleteDocument(res, pathname.split('/')[2]);
        }


        // ============================
        // Notifications
        // ============================
        if (pathname === '/notifications' && req.method === 'GET') 
        {
            return notificationController.getAllNotifications(res);
        }

        if (pathname.startsWith('/notifications/') && req.method === 'GET') 
        {
            return notificationController.getNotificationById(res, pathname.split('/')[2]);
        }

        if (pathname === '/notifications' && req.method === 'POST') 
        {
            return notificationController.insertNotification(res, data);
        }

        if (pathname.startsWith('/notifications/') && req.method === 'PUT') 
        {
            return notificationController.updateNotification(res, pathname.split('/')[2], data);
        }

        if (pathname.startsWith('/notifications/') && req.method === 'DELETE') 
        {
            return notificationController.deleteNotification(res, pathname.split('/')[2]);
        }
        

        // ============================
        // Admin Logs
        // ============================
        if (pathname === '/adminLogs' && req.method === 'GET') 
        {
            return adminLogController.getAllAdminLogs(res);
        }

        if (pathname.startsWith('/adminLogs/') && req.method === 'GET') 
        {
            return adminLogController.getAdminLogById(res, pathname.split('/')[2]);
        }

        if (pathname === '/adminLogs' && req.method === 'POST') 
        {
            return adminLogController.insertAdminLog(res, data);
        }

        if (pathname.startsWith('/adminLogs/') && req.method === 'PUT') 
        {
            return adminLogController.updateAdminLog(res, pathname.split('/')[2], data);
        }

        if (pathname.startsWith('/adminLogs/') && req.method === 'DELETE') 
        {
            return adminLogController.deleteAdminLog(res, pathname.split('/')[2]);
        }
        

        // ============================
        // Campaigns
        // ============================
        if (pathname === '/campaigns' && req.method === 'GET') 
        {
            return campaignController.getAllCampaigns(res);
        }

        if (pathname.startsWith('/campaigns/') && req.method === 'GET') 
        {
            return campaignController.getCampaignById(res, pathname.split('/')[2]);
        }

        if (pathname === '/campaigns' && req.method === 'POST') 
        {
            return campaignController.insertCampaign(res, data);
        }

        if (pathname.startsWith('/campaigns/') && req.method === 'PUT') 
        {
            return campaignController.updateCampaign(res, pathname.split('/')[2], data);
        }

        if (pathname.startsWith('/campaigns/') && req.method === 'DELETE') 
        {
            return campaignController.deleteCampaign(res, pathname.split('/')[2]);
        }


        // ============================
        // Fallback
        // ============================
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Route not found' }));
    });
});

// Start Server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
