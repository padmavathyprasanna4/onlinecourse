import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';  // Import logo image

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Online Learning Logo" className="navbar-logo-img" />
        <span className="navbar-logo-text me-5">Online Learning</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Offered Courses</Link></li>
        <li><Link to="/video-lessons" className={location.pathname === "/video-lessons" ? "active" : ""}>Video Lessons</Link></li>
       
        <li><Link to="/quizzes" className={location.pathname === "/quizzes" ? "active" : ""}>Quizzes</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
