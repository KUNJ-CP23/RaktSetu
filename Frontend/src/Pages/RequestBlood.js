import React, { useState } from "react";
import "../Styles/RequestBlood.css";

const RequestBlood = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Blood request submitted for ${quantity} unit(s)!`);
  };

  return (
    <div className="request-blood-wrapper">
      <h2>🩸 Request Blood</h2>
      <p className="subtext">Connect with donors and blood banks instantly</p>

      <div className="emergency-info">
        <h4>🚨 Emergency Helpline</h4>
        <p><strong>24/7 Emergency:</strong> +91 1234-567-890 | <strong>WhatsApp:</strong> +91 9876-543-210</p>
        <p>For critical emergencies, call immediately while filling this form.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Patient Name <span className="required">*</span></label>
          <input type="text" name="patientName" required />
        </div>

        <div className="form-group">
          <label>Blood Group <span className="required">*</span></label>
          <select name="bloodGroup" required>
            <option value="">-- Select Blood Group --</option>
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
          <label>Hospital Name</label>
          <input type="text" name="hospitalName" />
        </div>

        <div className="form-group">
          <label>Quantity Required (Units) <span className="required">*</span></label>
          <div className="quantity-selector">
            <button type="button" onClick={handleDecrement}>-</button>
            <span>{quantity}</span>
            <button type="button" onClick={handleIncrement}>+</button>
            <input type="hidden" name="quantity" value={quantity} />
          </div>
        </div>

        <div className="form-group">
          <label>Contact Number <span className="required">*</span></label>
          <input type="tel" name="contactNumber" required />
        </div>

        <button type="submit" className="btn-submit">🚀 Submit Blood Request</button>
      </form>
    </div>
  );
};

export default RequestBlood;