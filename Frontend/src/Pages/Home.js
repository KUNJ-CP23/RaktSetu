import React from 'react';
import '../Styles/Home.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faSearch, faBoxes, faUserCircle, faChartBar } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className="home-container">
      <section id="dashboard" className="content-section">
        <h1 className="form-title fade-in">Blood Bank Management Dashboard</h1>
        <div className="dashboard-grid">
          
          <div className="card fade-in">
            <div className="card-header">
              <div className="card-icon donate">
                <FontAwesomeIcon icon={faHandHoldingHeart} />
              </div>
              <div>
                <h3 className="card-title">Donate Blood</h3>
                <p className="card-description">
                  Save lives by donating blood. Find nearby donation centers and schedule appointments.
                </p>
              </div>
            </div>
            <Link className="btn btn-primary" to="/donate-blood">Start Donation</Link>
          </div>

          <div className="card fade-in">
            <div className="card-header">
              <div className="card-icon request">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <div>
                <h3 className="card-title">Request Blood</h3>
                <p className="card-description">
                  Need blood? Search for available donors and blood banks in your area.
                </p>
                <br/>
              </div>
            </div>
            <Link className="btn btn-primary" to="request-blood">Make Request</Link>
          </div>

          <div className="card fade-in">
            <div className="card-header">
              <div className="card-icon inventory">
                <FontAwesomeIcon icon={faBoxes} />
              </div>
              <div>
                <h3 className="card-title">Blood Inventory</h3>
                <p className="card-description">
                  Real-time blood stock levels across different blood groups and locations.
                </p>
                <br></br>
              </div>
            </div>
            <Link className="btn btn-primary" to="add-bloodinventory">View Inventory</Link>
          </div>

          <div className="card fade-in">
            <div className="card-header">
              <div className="card-icon profile">
                <FontAwesomeIcon icon={faUserCircle} />
              </div>
              <div>
                <h3 className="card-title">My Profile</h3>
                <p className="card-description">
                  Manage your profile, donation history, and privacy settings.
                </p>
                <br/>
                <br/>
              </div>
            </div>
            <button className="btn btn-primary">View Profile</button>
          </div>

        </div>

        <div className="table-container">
          <div className="table-header">
            <FontAwesomeIcon icon={faChartBar} /> Quick Statistics
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Blood Group</th>
                <th>Available Units</th>
                <th>Pending Requests</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>O+</strong></td>
                <td>156 units</td>
                <td>23 requests</td>
              </tr>
              <tr>
                <td><strong>A+</strong></td>
                <td>89 units</td>
                <td>18 requests</td>
              </tr>
              <tr>
                <td><strong>B+</strong></td>
                <td>12 units</td>
                <td>45 requests</td>
              </tr>
              <tr>
                <td><strong>AB+</strong></td>
                <td>34 units</td>
                <td>8 requests</td>
              </tr>
              <tr>
                <td><strong>O-</strong></td>
                <td>67 units</td>
                <td>67 requests</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Home;