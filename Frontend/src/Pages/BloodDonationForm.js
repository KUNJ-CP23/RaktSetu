import React from 'react';
import '../Styles/BloodDonationForm.css';

function BloodDonationForm() {
  return (
    <div className="form-container">
      <h2 className="form-title">Blood Donation Registration</h2>
      <form>
        <div className="form-grid">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>

          <div className="form-group">
            <label>Blood Group</label>
            <select required>
              <option value="">Select Blood Group</option>
              <option>A+</option><option>A-</option>
              <option>B+</option><option>B-</option>
              <option>AB+</option><option>AB-</option>
              <option>O+</option><option>O-</option>
            </select>
          </div>

          <div className="form-group">
            <label>Age</label>
            <input type="number" min="18" max="65" placeholder="Enter your age" required />
          </div>

          <div className="form-group">
            <label>Weight (kg)</label>
            <input type="number" min="50" placeholder="Enter your weight" required />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter phone number" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email address" required />
          </div>

          <div className="form-group">
            <label>Preferred Location</label>
            <select required>
              <option value="">Select Location</option>
              <option>Mumbai</option><option>Delhi</option>
              <option>Bangalore</option><option>Chennai</option>
              <option>Kolkata</option><option>Pune</option>
            </select>
          </div>

          <div className="form-group">
            <label>Last Donation Date</label>
            <input type="date" />
          </div>
        </div>

        <div className="form-group">
          <label>Medical History / Notes</label>
          <textarea placeholder="Any medical conditions or notes..."></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Register for Blood Donation
        </button>
      </form>
    </div>
  );
}

export default BloodDonationForm;