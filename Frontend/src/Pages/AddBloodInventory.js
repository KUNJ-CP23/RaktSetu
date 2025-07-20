import React, { useState, useEffect } from 'react';
import '../Styles/AddBloodInventory.css';

const AddBloodInventory = () => {
  const [formData, setFormData] = useState({
    bloodBankId: '',
    bloodGroupId: '',
    quantity: '',
    donorId: '',
    collectionDate: '',
    expiryDate: '',
    qrCodeTag: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    generateQRCode();
  }, []);

  const generateQRCode = () => {
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8).toUpperCase();
    const qrCode = `BB${timestamp}${randomString}`;
    setFormData(prev => ({ ...prev, qrCodeTag: qrCode }));
    setErrors(prev => ({ ...prev, qrCodeTag: '' }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!formData.bloodBankId) formErrors.bloodBankId = 'Blood Bank is required';
    if (!formData.bloodGroupId) formErrors.bloodGroupId = 'Blood Group is required';
    if (!formData.quantity || formData.quantity <= 0) formErrors.quantity = 'Quantity must be greater than 0';
    if (!formData.donorId) formErrors.donorId = 'Donor is required';
    if (!formData.collectionDate) formErrors.collectionDate = 'Collection Date is required';
    if (!formData.expiryDate) formErrors.expiryDate = 'Expiry Date is required';

    const collectionDate = new Date(formData.collectionDate);
    const expiryDate = new Date(formData.expiryDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (collectionDate > today) formErrors.collectionDate = 'Collection date cannot be in the future';
    if (expiryDate <= collectionDate) formErrors.expiryDate = 'Expiry date must be after collection date';

    setErrors(formErrors);
    valid = Object.keys(formErrors).length === 0;
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setErrorAlert(false);

    if (!validateForm()) {
      setErrorAlert(true);
      return;
    }

    setLoading(true);

    try {
      await new Promise(res => setTimeout(res, 1500));
      console.log('Submitted Data:', formData);
      setSuccess(true);
      setFormData({
        bloodBankId: '',
        bloodGroupId: '',
        quantity: '',
        donorId: '',
        collectionDate: '',
        expiryDate: '',
        qrCodeTag: ''
      });
      generateQRCode();
    } catch (err) {
      console.error(err);
      setErrorAlert(true);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      bloodBankId: '',
      bloodGroupId: '',
      quantity: '',
      donorId: '',
      collectionDate: '',
      expiryDate: '',
      qrCodeTag: ''
    });
    setErrors({});
    setSuccess(false);
    setErrorAlert(false);
    generateQRCode();
  };

  return (
    <div className="inventory-container">
      <div className="header">
        <h1>🩸 Add Blood Inventory</h1>
        <p>Register new blood units in the inventory system</p>
      </div>

      {success && <div className="alert success">✅ Blood inventory added successfully!</div>}
      {errorAlert && <div className="alert error">❌ Please fix the errors below and try again.</div>}

      <form onSubmit={handleSubmit} className="inventory-form">
        {/* Blood Bank */}
        <div className={`form-group ${errors.bloodBankId ? 'error' : ''}`}>
          <label>Blood Bank *</label>
          <select name="bloodBankId" value={formData.bloodBankId} onChange={handleChange}>
            <option value="">Select Blood Bank</option>
            <option value="1">City Central Blood Bank</option>
            <option value="2">Regional Medical Blood Center</option>
            <option value="3">Community Health Blood Bank</option>
          </select>
          {errors.bloodBankId && <span className="error-message">{errors.bloodBankId}</span>}
        </div>

        {/* Blood Group */}
        <div className={`form-group ${errors.bloodGroupId ? 'error' : ''}`}>
          <label>Blood Group *</label>
          <select name="bloodGroupId" value={formData.bloodGroupId} onChange={handleChange}>
            <option value="">Select Blood Group</option>
            <option value="1">A+</option>
            <option value="2">A-</option>
            <option value="3">B+</option>
            <option value="4">B-</option>
            <option value="5">AB+</option>
            <option value="6">AB-</option>
            <option value="7">O+</option>
            <option value="8">O-</option>
          </select>
          {errors.bloodGroupId && <span className="error-message">{errors.bloodGroupId}</span>}
        </div>

        {/* Quantity */}
        <div className={`form-group ${errors.quantity ? 'error' : ''}`}>
          <label>Quantity (Units) *</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            placeholder="Enter number of units"
          />
          {errors.quantity && <span className="error-message">{errors.quantity}</span>}
        </div>

        {/* Donor */}
        <div className={`form-group ${errors.donorId ? 'error' : ''}`}>
          <label>Donor *</label>
          <select name="donorId" value={formData.donorId} onChange={handleChange}>
            <option value="">Select Donor</option>
            <option value="1">John Doe (O+)</option>
            <option value="2">Jane Smith (A-)</option>
            <option value="3">Mike Johnson (B+)</option>
          </select>
          {errors.donorId && <span className="error-message">{errors.donorId}</span>}
        </div>

        {/* Collection Date */}
        <div className={`form-group ${errors.collectionDate ? 'error' : ''}`}>
          <label>Collection Date *</label>
          <input
            type="date"
            name="collectionDate"
            value={formData.collectionDate}
            onChange={handleChange}
            max={new Date().toISOString().split('T')[0]}
          />
          {errors.collectionDate && <span className="error-message">{errors.collectionDate}</span>}
        </div>

        {/* Expiry Date */}
        <div className={`form-group ${errors.expiryDate ? 'error' : ''}`}>
          <label>Expiry Date *</label>
          <input
            type="date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
          />
          {errors.expiryDate && <span className="error-message">{errors.expiryDate}</span>}
        </div>

        {/* QR Code */}
        <div className="form-group">
          <label>QR Code Tag *</label>
          <div className="qr-section">
            <input
              type="text"
              name="qrCodeTag"
              value={formData.qrCodeTag}
              readOnly
            />
            <button type="button" onClick={generateQRCode} className="btn secondary">Generate QR</button>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn primary" disabled={loading}>
            {loading ? 'Processing...' : 'Add to Inventory'}
          </button>
          <button type="button" className="btn" onClick={resetForm}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default AddBloodInventory;
