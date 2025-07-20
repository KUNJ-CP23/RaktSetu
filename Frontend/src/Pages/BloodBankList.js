import React from 'react';
import '../Styles/BloodBankList.css';
import {
  FaBuilding, FaHospital, FaMapMarkerAlt, FaPhone, FaEnvelope,
  FaClock, FaCertificate, FaTint, FaInfoCircle
} from 'react-icons/fa';

const BloodBankList = () => {
  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">
          <FaBuilding /> Blood Bank Directory
        </h1>
      </div>

      <div className="search-filter-section">
        <div className="search-controls">
          <div className="search-group">
            <label className="search-label">Search Blood Banks</label>
            <div style={{ position: 'relative' }}>
              <input type="text" className="search-input" placeholder="Search by name, location, or services..." />
              <i className="fas fa-search search-icon"></i>
            </div>
          </div>

          <div className="search-group">
            <label className="search-label">City/State</label>
            <select className="filter-select">
              <option value="">All Locations</option>
              <option value="mumbai">Mumbai, Maharashtra</option>
              <option value="delhi">Delhi</option>
              <option value="bangalore">Bangalore, Karnataka</option>
              <option value="chennai">Chennai, Tamil Nadu</option>
              <option value="kolkata">Kolkata, West Bengal</option>
              <option value="hyderabad">Hyderabad, Telangana</option>
              <option value="pune">Pune, Maharashtra</option>
              <option value="ahmedabad">Ahmedabad, Gujarat</option>
            </select>
          </div>

          <div className="search-group">
            <label className="search-label">Status</label>
            <select className="filter-select">
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="emergency">Emergency Services</option>
              <option value="24x7">24/7 Available</option>
            </select>
          </div>

          <button className="btn btn-primary">
            <i className="fas fa-filter"></i> Filter
          </button>
        </div>
      </div>

      <div className="stats-section">
        <div className="stat-card total">
          <div className="stat-number">247</div>
          <div className="stat-label">Total Blood Banks</div>
        </div>
        <div className="stat-card active">
          <div className="stat-number">198</div>
          <div className="stat-label">Active Centers</div>
        </div>
        <div className="stat-card verified">
          <div className="stat-number">189</div>
          <div className="stat-label">Certified</div>
        </div>
        <div className="stat-card emergency">
          <div className="stat-number">156</div>
          <div className="stat-label">Emergency Ready</div>
        </div>
      </div>

      <div className="bloodbank-grid">
        {["Mumbai", "Ahmedabad"].map((city, idx) => (
          <BloodBankCard
            key={idx}
            status="Active"
            icon={<FaHospital />}
            name={`${city} Central Blood Bank`}
            location={`${city}, India`}
            phone="+91 22 2345 6789"
            email="info@mumbaiblood.gov"
            availability="24/7 Available"
            certification="NABH Certified"
            bloodGroups="All Blood Groups"
            services={["Blood Collection", "Component Separation", "Storage", "Distribution", "Emergency Service"]}
          />
        ))}
      </div>
    </div>
  );
};

const BloodBankCard = ({ status, icon, name, location, phone, email, availability, certification, bloodGroups, services }) => {
  return (
    <div className="bloodbank-card">
      <div className={`status-badge ${status.toLowerCase() === 'emergency' ? 'status-emergency' : 'status-active'}`}>
        {status}
      </div>
      <div className="bloodbank-header">
        <div className="bloodbank-name">
          {icon} {name}
        </div>
      </div>
      <div className="bloodbank-body">
        <div className="bloodbank-info">
          <div className="info-item"><FaMapMarkerAlt className="info-icon" /> <span>{location}</span></div>
          <div className="info-item"><FaPhone className="info-icon" /> <span>{phone}</span></div>
          <div className="info-item"><FaEnvelope className="info-icon" /> <span>{email}</span></div>
          <div className="info-item"><FaClock className="info-icon" /> <span>{availability}</span></div>
          <div className="info-item"><FaCertificate className="info-icon" /> <span>{certification}</span></div>
          <div className="info-item"><FaTint className="info-icon" /> <span>{bloodGroups}</span></div>
        </div>
        <div className="bloodbank-services">
          <div className="services-title">Services Available:</div>
          <div className="services-list">
            {services.map((service, index) => (
              <span key={index} className="service-tag">{service}</span>
            ))}
          </div>
        </div>
        <div className="bloodbank-actions">
          <button className="btn btn-primary btn-small"><FaInfoCircle /> View Details</button>
          <button className="btn btn-secondary btn-small"><FaPhone /> Contact</button>
        </div>
      </div>
    </div>
  );
};

export default BloodBankList;