// controllers/documentController.js

const Document = require('../models/Document');

// Get All
exports.getAllDocuments = async (res) => {
    try {
        const documents = await Document.find();
        res.end(JSON.stringify(documents));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to fetch documents', error: error.message }
        ));
    }
};

// Get By ID
exports.getDocumentById = async (res, id) => {
    try {
        const document = await Document.findOne({ DocumentID: id });
        if (!document) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Document not found' }
            ));
        }
        res.end(JSON.stringify(document));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Error fetching document', error: error.message }
        ));
    }
};

// Insert
exports.insertDocument = async (res, data) => {
    try {
        const document = new Document(data);
        await document.save();
        res.end(JSON.stringify(
            { message: 'Document inserted successfully', document }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to insert document', error: error.message }
        ));
    }
};

// Update
exports.updateDocument = async (res, id, data) => {
    try {
        const updatedDocument = await Document.findOneAndUpdate({ DocumentID: id }, data, { new: true });
        if (!updatedDocument) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Document not found' }
            ));
        }
        res.end(JSON.stringify(
            { message: 'Document updated successfully', updatedDocument }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to update document', error: error.message }
        ));
    }
};

// Delete
exports.deleteDocument = async (res, id) => {
    try {
        const result = await Document.deleteOne({ DocumentID: id });
        if (result.deletedCount === 0) {
            res.statusCode = 404;
            return res.end(JSON.stringify(
                { message: 'Document not found for deletion' }
            ));
        }
        res.end(JSON.stringify(
            { message: 'Document deleted successfully' }
        ));
    } 
    catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify(
            { message: 'Failed to delete document', error: error.message }
        ));
    }
};