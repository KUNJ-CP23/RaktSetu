import React, { useState, useEffect } from 'react';
import '../Styles/HospitalDirectory.css';

const hospitalsData = [ 
    {
        id: 1, name: "Mumbai Central Hospital", type: "Multi-specialty Hospital", location: "Mumbai, Maharashtra",
        city: "mumbai", status: "active", phone: "+91 22 2345 6789", email: "info@mumbaicentral.com", beds: 450,
        bloodUnits: 280, emergencyServices: "24/7", website: "www.mumbaicentral.com"
    },
    // add remaining hospitals...
];

function HospitalDirectory() {
    const [hospitals, setHospitals] = useState(hospitalsData);
    const [filters, setFilters] = useState({ search: '', city: 'all', status: 'all' });
    const [stats, setStats] = useState({ total: 0, active: 0, emergency: 0, certified: 0 });

    useEffect(() => {
        updateStats(hospitals);
    }, [hospitals]);

    const filterHospitals = () => {
        const { search, city, status } = filters;
        const filtered = hospitalsData.filter(hospital => {
            const matchSearch = hospital.name.toLowerCase().includes(search) || hospital.location.toLowerCase().includes(search) || hospital.type.toLowerCase().includes(search);
            const matchCity = city === 'all' || hospital.city === city;
            const matchStatus = status === 'all' || hospital.status === status;
            return matchSearch && matchCity && matchStatus;
        });
        setHospitals(filtered);
    };

    const updateStats = (hospitalsList) => {
        const total = hospitalsList.length;
        const active = hospitalsList.filter(h => h.status === 'active').length;
        const emergency = hospitalsList.filter(h => h.emergencyServices === '24/7').length;
        const certified = Math.floor(total * 0.85);
        setStats({ total, active, emergency, certified });
    };

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    return (
        <div className="container">

            <div className="rainbow-bar"></div>

            <div className="search-section">
                <h2 className="search-title">Search Hospitals</h2>
                <div className="search-form">
                    <div className="form-group">
                        <label>Search</label>
                        <input type="text" name="search" className="form-input" placeholder="Search hospitals..." value={filters.search} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>City/State</label>
                        <select name="city" className="form-select" value={filters.city} onChange={handleChange}>
                            <option value="all">All Locations</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="delhi">Delhi</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="chennai">Chennai</option>
                            <option value="hyderabad">Hyderabad</option>
                            <option value="pune">Pune</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                        <select name="status" className="form-select" value={filters.status} onChange={handleChange}>
                            <option value="all">All Status</option>
                            <option value="active">Active</option>
                            <option value="emergency">Emergency</option>
                            <option value="full">Full Capacity</option>
                        </select>
                    </div>
                    <button className="filter-btn" onClick={filterHospitals}>🔍 Filter</button>
                </div>
            </div>

            <div className="stats-grid">
                <StatCard label="Total Hospitals" value={stats.total} color="red" icon="🏥" />
                <StatCard label="Active Centers" value={stats.active} color="green" icon="✓" />
                <StatCard label="Certified" value={stats.certified} color="blue" icon="⭐" />
                <StatCard label="Emergency Ready" value={stats.emergency} color="orange" icon="🚨" />
            </div>

            <div className="hospitals-grid">
                {hospitals.map(h => (
                    <div key={h.id} className="hospital-card">
                        <div className="hospital-header">
                            <div className="hospital-icon">🏥</div>
                            <div className="hospital-info">
                                <h3>{h.name}</h3>
                                <p>{h.type}</p>
                                <p>📍 {h.location}</p>
                            </div>
                            <div className={`hospital-status status-${h.status}`}>{h.status}</div>
                        </div>
                        <div className="hospital-details">
                            <DetailItem icon="📞" label="Phone" value={h.phone} />
                            <DetailItem icon="📧" label="Email" value={h.email} />
                            <DetailItem icon="🛏" label="Beds" value={h.beds} />
                            <DetailItem icon="🩸" label="Blood Units" value={h.bloodUnits} />
                            <DetailItem icon="🚨" label="Emergency" value={h.emergencyServices} />
                            <DetailItem icon="🌐" label="Website" value={h.website} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const StatCard = ({ label, value, color, icon }) => (
    <div className={`stat-card ${color}`}>
        <div className="stat-icon">{icon}</div>
        <div className="stat-number">{value}</div>
        <div className="stat-label">{label}</div>
    </div>
);

const DetailItem = ({ icon, label, value }) => (
    <div className="detail-item">
        <div className="detail-icon">{icon}</div>
        <div className="detail-text">
            <div className="detail-label">{label}</div>
            <div className="detail-value">{value}</div>
        </div>
    </div>
);
export default HospitalDirectory;