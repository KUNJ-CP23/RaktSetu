import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from './Images/Logo.jpg';
import './Styles/Layout.css';
import { FaTint } from 'react-icons/fa'; 
import Login from "./Pages/Login";

export default function Layout() {
  return (
    <div className="layout-container">
      
      {/* Header / Navbar */}
      <header id="Nav2" className="bg-gradient-red py-2 shadow-lg">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <FaTint className="blood-drop" size={24} />
            <span className="fs-4 fw-bold text-light">RaktSetu</span>
          </div>

          <ul className="navbar-nav d-flex flex-row gap-3 mb-0">
            <li><Link className="nav-link selected" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/bloodbank-list">BloodBanks</Link></li>
            <li><Link className="nav-link" to="/hospitaldirectory-list">Hospitals</Link></li>
            <li><Link className="nav-link" to="/user-list">Users</Link></li>
            <li><Link className="nav-link" to="/donate-blood">Donate Blood</Link></li> 
            <li><Link className="nav-link" to="/donation-list">DonationList</Link></li>
            <li><Link className="nav-link" to="/contact-us">Contact Us</Link></li>
            <li><Link className="nav-link" to="/notification">Notification</Link></li>
            
          </ul>


          <div className="d-flex gap-2">
            <Link className="btn signup" to="register">Register</Link>
            <Link className="btn login" to="login">Login</Link>
          </div>
        </div>
      </header>

      {/* Main Dynamic Content */}
      <main className="main-content container">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-dark text-light py-4 mt-5">
        <div className="container text-center">
          <h5>Rakt-Setu — One drop. One life. One bridge.</h5>

          <div className="d-flex justify-content-center gap-4 my-2">
            <a href="/about-us">About</a>
            <a href="/contact-us">Contact</a>
            {/* <a href="/articles">Articles</a> */}
            <a href="/donate">Donate</a>
          </div>

          <p className="mb-1">Developed with ❤️ by <strong>Hack & Cheese</strong> during Hackathon 2025</p>
          <p>&copy; {new Date().getFullYear()} RaktSetu. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}