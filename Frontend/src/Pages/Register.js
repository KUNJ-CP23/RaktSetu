import React from "react";
import "../Styles/Register.css";

const Register = () => {
  return (
    <div className="register-wrapper">
      <div className="register-title">
        <div className="main-heading">🩸 Blood Bank Registration</div>
        <div className="sub-heading">Join our life-saving community</div>
      </div>

      <div className="user-selection">
        <div className="user-box">
          <div className="icon">🩸</div>
          <div className="label">Donor</div>
        </div>
        <div className="user-box">
          <div className="icon">🏥</div>
          <div className="label">Hospital</div>
        </div>
        <div className="user-box">
          <div className="icon">👨‍💼</div>
          <div className="label">Admin</div>
        </div>
      </div>

      <div className="form-section">
        <h2>Donor Registration Form</h2>
        <div className="input-block">
          <label>First Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="input-block">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="blood-group">
          {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => (
            <div className="blood-option" key={type}>
              {type}
            </div>
          ))}
        </div>

        <div className="consent">
          <input type="checkbox" id="consent" />
          <label htmlFor="consent">I consent to donate blood.</label>
        </div>

        <button className="submit-button">Register as Donor</button>
      </div>
    </div>
  );
};

export default Register;