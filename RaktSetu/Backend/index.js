require('dotenv').config();
const http = require('http');
const mongoose = require('mongoose');
const url = require('url');


// Controllers
const roleController = require('./controllers/roleController');
const userController = require('./controllers/userController');
const bloodGroupController = require('./controllers/bloodGroupController');

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
