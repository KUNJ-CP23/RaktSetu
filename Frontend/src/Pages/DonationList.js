import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../Styles/DonationList.css';
import {
  FaBuilding, FaHospital, FaMapMarkerAlt, FaPhone, FaEnvelope,
  FaClock, FaCertificate, FaTint, FaInfoCircle
} from 'react-icons/fa';

const initialDonations = [
    { id: 1, name: "Mumbai Central Blood Bank", donorName: "Rajesh Kumar", bloodType: "O+", location: "mumbai", date: "2024-07-15", amount: "450ml", status: "active" },
    { id: 2, name: "Red Cross Blood Bank Delhi", donorName: "Priya Sharma", bloodType: "A-", location: "delhi", date: "2024-07-14", amount: "400ml", status: "emergency" },
    { id: 3, name: "Bangalore Medical Center", donorName: "Amit Patel", bloodType: "B+", location: "bangalore", date: "2024-07-13", amount: "450ml", status: "active" },
    { id: 4, name: "Chennai Blood Bank", donorName: "Sneha Reddy", bloodType: "AB+", location: "chennai", date: "2024-07-12", amount: "350ml", status: "completed" },
    { id: 5, name: "Kolkata General Hospital", donorName: "Ravi Singh", bloodType: "O-", location: "kolkata", date: "2024-07-11", amount: "450ml", status: "emergency" },
    { id: 6, name: "Mumbai Central Blood Bank", donorName: "Neha Gupta", bloodType: "A+", location: "mumbai", date: "2024-07-10", amount: "400ml", status: "completed" }
];

function DonationList() {
    const [donations, setDonations] = useState(initialDonations);
    const [search, setSearch] = useState('');
    const [city, setCity] = useState('all');
    const [status, setStatus] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState({
        donorName: '',
        bloodType: '',
        centerLocation: '',
        date: new Date().toISOString().split('T')[0],
        amount: 450,
        status: 'active'
    });

    const avatarColor = (name) => {
        const colors = ['#dc3545', '#28a745', '#007bff', '#fd7e14', '#6f42c1'];
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        return colors[Math.abs(hash) % colors.length];
    };

    const initials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase();
    const formatDate = (date) => new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

    const filteredDonations = donations.filter(d =>
        (d.name.toLowerCase().includes(search.toLowerCase()) ||
         d.donorName.toLowerCase().includes(search.toLowerCase()) ||
         d.bloodType.toLowerCase().includes(search.toLowerCase())) &&
        (city === 'all' || d.location === city) &&
        (status === 'all' || d.status === status)
    );

    const stats = {
        total: filteredDonations.length,
        active: filteredDonations.filter(d => d.status === 'active').length,
        completed: filteredDonations.filter(d => d.status === 'completed').length,
        emergency: filteredDonations.filter(d => d.status === 'emergency').length
    };

    return (
        <div className="donation-container">
            <div className="page-header">
                    <h1 className="page-title">
                      <FaBuilding /> Donation List
                    </h1>
                  </div>

            <div className="donations-list">
                {filteredDonations.map(d => (
                    <div className="donation-card" key={d.id}>
                        <div className="donor-avatar" style={{ backgroundColor: avatarColor(d.donorName) }}>
                            {initials(d.donorName)}
                        </div>
                        <div>{d.name}<br/><small>Donor: {d.donorName}</small></div>
                        <div>{d.bloodType}</div>
                        <div>{formatDate(d.date)}</div>
                        <div>{d.amount}</div>
                        <div className={`status-badge ${d.status}`}>{d.status}</div>
                    </div>
                ))}
            </div>

            <Link className="btn btn-danger" to="/donate-blood">+ Add Donation</Link>

        </div>
    );
}

export default DonationList;