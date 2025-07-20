import React, { useEffect } from 'react';
import '../Styles/ContactUs.css';

const ContactUs = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.info-item, .contact-form, .contact-info').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    if (!data.name || !data.email || !data.role || !data.subject || !data.message) {
      alert('Please fill in all required fields.');
      return;
    }

    const submitBtn = form.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
      alert('Thank you for your message! We will get back to you within 24 hours.');
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 2000);
  };

  return (
    <div className="container">

      <div className="emergency-section">
        <h2>🚨 Emergency Blood Request</h2>
        <p>For urgent blood requirements, call our 24/7 emergency hotline</p>
        <div className="emergency-number">1-800-BLOOD-NOW</div>
        <p>(1-800-256-6369)</p>
      </div>

      <div className="contact-content">
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" />
            </div>

            <div className="form-group">
              <label htmlFor="role">I am a *</label>
              <select id="role" name="role" required>
                <option value="">Select your role</option>
                <option value="donor">Blood Donor</option>
                <option value="recipient">Blood Recipient</option>
                <option value="hospital">Hospital Representative</option>
                <option value="bloodbank">Blood Bank Staff</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Please describe how we can help you..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Get in Touch</h2>

          <div className="info-item">
            <div className="info-icon">
              <svg viewBox="0 0 24 24">
                <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
              </svg>
            </div>
            <div className="info-details">
              <h3>Phone Support</h3>
              <p>General: +1-800-555-0199<br />Emergency: 1-800-BLOOD-NOW</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <svg viewBox="0 0 24 24">
                <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
              </svg>
            </div>
            <div className="info-details">
              <h3>Email Us</h3>
              <p>support@bloodbank.org<br />emergency@bloodbank.org</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
              </svg>
            </div>
            <div className="info-details">
              <h3>Visit Us</h3>
              <p>123 Healthcare Avenue<br />Medical District, City 12345</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
              </svg>
            </div>
            <div className="info-details">
              <h3>Operating Hours</h3>
              <p>Mon-Fri: 8:00 AM - 8:00 PM<br />Sat-Sun: 9:00 AM - 6:00 PM<br /><strong>Emergency: 24/7</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;