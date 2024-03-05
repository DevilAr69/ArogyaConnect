// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './Arogclogo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/homepage" className="logo-link">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <div className="navbar-text">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/register">Home</Link>
        </li>

        <li className="navbar-item">
          <div className="dropdown">
            <button className="dropbtn">Services</button>
            <div className="dropdown-content">
              <a href="#">E_Commerce</a>
              <a href="#">Our Campaign</a>
              <a href="#">HealthConnect</a>
            </div>
          </div>
        </li>

        <li className="navbar-item">
          <Link to="/patientappointments">Book Appointments</Link>
        </li>
        <li className="navbar-item">
          <Link to="/doctormanagement">Doctor Management</Link>
        </li>
        
        <li className="navbar-item">
          <Link to="/about">About Us</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
