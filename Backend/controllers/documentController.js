const Document = require('../models/Document');

// Get All Documents
exports.getAllDocuments = async (req, res) => {
    try {
        const documents = await Document.find();
        res.json(documents);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch documents',
            error: error.message
        });
    }
};

// Get Document By ID
exports.getDocumentById = async (req, res) => {
    const { id } = req.params;
    try {
        const document = await Document.findOne({ DocumentID: id });
        if (!document) {
            return res.status(404).json({ message: 'Document not found' });
        }
        res.json(document);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching document',
            error: error.message
        });
    }
};

// Insert New Document
exports.insertDocument = async (req, res) => {
    try {
        const document = new Document(req.body);
        await document.save();
        res.status(201).json({
            message: 'Document inserted successfully',
            document
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to insert document',
            error: error.message
        });
    }
};

// Update Existing Document
exports.updateDocument = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedDocument = await Document.findOneAndUpdate(
            { DocumentID: id },
            req.body,
            { new: true }
        );
        if (!updatedDocument) {
            return res.status(404).json({ message: 'Document not found' });
        }
        res.json({
            message: 'Document updated successfully',
            updatedDocument
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to update document',
            error: error.message
        });
    }
};

// Delete Document
exports.deleteDocument = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Document.deleteOne({ DocumentID: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Document not found for deletion' });
        }
        res.json({ message: 'Document deleted successfully' });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to delete document',
            error: error.message
        });
    }
};
