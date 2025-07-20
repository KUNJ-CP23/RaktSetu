import React, { useState } from 'react';
import '../Styles/AddDonor.css';

function AddDonor() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bloodGroup: '',
    location: '',
    dob: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this with API call (axios.post) if needed
    console.log('Donor Submitted:', formData);

    alert(`Donor ${formData.name} submitted successfully!`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      bloodGroup: '',
      location: '',
      dob: '',
    });
  };

  return (
    <div className="page-wrapper">
      <div className="form-card">
        <div className="form-heading">🩸 Add New Donor</div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="bloodGroup">Blood Group</label>
            <select
              name="bloodGroup"
              className="form-control"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
            >
              <option value="">-- Select --</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="location">City / Location</label>
            <input
              type="text"
              name="location"
              className="form-control"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="form-control"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group text-center">
            <button type="submit" className="btn-submit">➕ Submit Donor</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDonor;
