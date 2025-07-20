// File: /src/pages/DonationHistory.js
import React from 'react';
import '../Styles/DonationHistory.css';

const DonationHistory = () => {
  return (
    <div className="container">
      <header className="header">
        <a href="#" className="back-button">← Back to Dashboard</a>
        <div className="page-title">
          <h1>📋 Donation History</h1>
        </div>
        <div className="profile-section">
          <div className="profile-avatar">AS</div>
          <div className="blood-type-badge">O+</div>
        </div>
      </header>

      <div className="summary-grid">
        <SummaryCard color="red" icon="🩸" number="12" label="Total Donations" />
        <SummaryCard color="green" icon="❤" number="5.4L" label="Total Blood Donated" />
        <SummaryCard color="blue" icon="📍" number="8" label="Different Centers" />
        <SummaryCard color="purple" icon="📅" number="5" label="Years Donating" />
      </div>

      <div className="filters-section">
        <h3 className="filters-title">🔍 Filter Donations</h3>
        <div className="filters-grid">
          <FilterGroup label="Date Range" id="dateRange">
            <option value="all">All Time</option>
            <option value="thisYear">This Year</option>
            <option value="lastYear">Last Year</option>
            <option value="last6months">Last 6 Months</option>
            <option value="custom">Custom Range</option>
          </FilterGroup>
          <FilterGroup label="Location" id="locationFilter">
            <option value="all">All Locations</option>
            <option value="mumbai">Mumbai</option>
            <option value="delhi">Delhi</option>
            <option value="bangalore">Bangalore</option>
          </FilterGroup>
          <FilterGroup label="Donation Type" id="typeFilter">
            <option value="all">All Types</option>
            <option value="whole">Whole Blood</option>
            <option value="plasma">Plasma</option>
            <option value="platelets">Platelets</option>
          </FilterGroup>
          <div className="filter-group">
            <button className="filter-button">Apply Filters</button>
          </div>
          <div className="filter-group">
            <button className="export-button">📥 Export History</button>
          </div>
        </div>
      </div>

      <div className="history-section">
        <div className="section-title">📋 Donation Records</div>
        <div className="donations-list">
          <DonationCard
            date="January 15, 2025"
            time="10:30 AM - 11:15 AM"
            location="Apollo Hospital, Mumbai"
            amount="450ml Whole Blood"
            type="O+ Universal Donor"
            center="APH-MUM-001"
            notes="Pre-donation vitals: BP 120/80, Pulse 72, Hb 14.2 g/dL. Donation completed successfully."
            status="completed"
          />
          <DonationCard
            date="October 20, 2024"
            time="2:15 PM - 3:00 PM"
            location="Red Cross Center, Delhi"
            amount="450ml Whole Blood"
            type="O+ Universal Donor"
            center="RC-DEL-002"
            notes="Emergency donation drive. Smooth process. Donor advised rest."
            status="completed"
          />
          <DonationCard
            date="July 18, 2024"
            time="11:00 AM - 11:45 AM"
            location="City Blood Bank, Bangalore"
            amount="450ml Whole Blood"
            type="O+ Universal Donor"
            center="CBB-BLR-003"
            notes="Scheduled donation. Excellent cooperation."
            status="completed"
          />
          <DonationCard
            date="March 15, 2025"
            time="10:30 AM (Scheduled)"
            location="Apollo Hospital, Mumbai"
            amount="450ml Whole Blood"
            type="O+ Universal Donor"
            center="APH-MUM-001"
            notes="Upcoming donation. Slot reserved."
            status="pending"
          />
        </div>
      </div>
    </div>
  );
};

const SummaryCard = ({ color, icon, number, label }) => (
  <div className={`summary-card ${color}`}>
    <div className="summary-icon">{icon}</div>
    <div className="summary-number">{number}</div>
    <div className="summary-label">{label}</div>
  </div>
);

const FilterGroup = ({ label, id, children }) => (
  <div className="filter-group">
    <label className="filter-label" htmlFor={id}>{label}</label>
    <select className="filter-select" id={id}>
      {children}
    </select>
  </div>
);

const DonationCard = ({ date, time, location, amount, type, center, notes, status }) => (
  <div className={`donation-card ${status} fade-in`}>
    <div className="donation-header">
      <div className="donation-date-info">
        <div className="donation-date">{date}</div>
        <div className="donation-time">{time}</div>
      </div>
      <div className={`status-badge status-${status}`}>
        {status === 'pending' ? 'Scheduled' : 'Completed'}
      </div>
    </div>
    <div className="donation-details">
      <DetailItem iconClass="location-icon" label="Location" value={location} />
      <DetailItem iconClass="amount-icon" label="Amount Donated" value={amount} />
      <DetailItem iconClass="type-icon" label="Blood Type" value={type} />
      <DetailItem iconClass="center-icon" label="Center ID" value={center} />
    </div>
    <div className="donation-notes">
      <div className="notes-title">Medical Notes</div>
      <div className="notes-content">{notes}</div>
    </div>
    <div className="certification-badge">🏆 Certificate of Donation Available</div>
  </div>
);

const DetailItem = ({ iconClass, label, value }) => (
  <div className="detail-item">
    <div className={`detail-icon ${iconClass}`}></div>
    <div className="detail-content">
      <h4>{label}</h4>
      <p>{value}</p>
    </div>
  </div>
);

export default DonationHistory;