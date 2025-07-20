import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../Styles/Login.css';
import { FaTint, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaSignInAlt, FaGoogle, FaMicrosoft, FaExclamationCircle, FaCheckCircle } from 'react-icons/fa';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setLoading(true);

    setTimeout(() => {
      if (email === 'admin@bloodbank.com' && password === 'admin123') {
        setSuccess(true);
        setTimeout(() => {
          alert('Login successful! This would redirect to the dashboard.');
        }, 1500);
      } else {
        setError(true);
        setLoading(false);
      }
    }, 2000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const socialLogin = (provider) => {
    alert(`Social login with ${provider} would be implemented here.`);
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <div className="login-icon">
          <FaTint />
        </div>
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Blood Bank Management System</p>
        <p className="login-description">Sign in to access your account and manage blood bank operations</p>
      </div>

      <div className="login-form">
        {error && (
          <div className="error-message">
            <FaExclamationCircle /> Invalid credentials. Please try again.
          </div>
        )}
        {success && (
          <div className="success-message">
            <FaCheckCircle /> Login successful! Redirecting...
          </div>
        )}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">Email Address <span className="required">*</span></label>
            <div className="input-wrapper">
              <input
                type="email"
                className="form-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FaEnvelope className="input-icon" />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password <span className="required">*</span></label>
            <div className="input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FaLock className="input-icon" />
              <button
                type="button"
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className={`btn btn-primary ${loading ? 'loading' : ''}`} disabled={loading}>
            <FaSignInAlt className={loading ? 'fa-spin' : ''} />
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="divider">
          <span>or continue with</span>
        </div>

        <div className="social-login">
          <button className="btn-social" onClick={() => socialLogin('Google')}>
            <FaGoogle /> Google
          </button>
          <button className="btn-social" onClick={() => socialLogin('Microsoft')}>
            <FaMicrosoft /> Microsoft
          </button>
        </div>
      </div>

      <div className="login-footer">
        <p>Don't have an account? <Link className="signup-link" to="register">Sign up here</Link></p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>© 2025 Blood Bank Management System. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LoginPage;
