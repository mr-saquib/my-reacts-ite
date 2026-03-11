import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-dark-pill">

        {/* Logo */}
        <div className="nav-logo">
          <div className="nav-logo-mark">UL</div>
          <span className="nav-logo-text">Universe Logic</span>
        </div>

        {/* Center Links */}
        <div className="nav-center-pill">
          <a href="#platform" className="neon-link">Home</a>
          <a href="#products" className="neon-link">Products</a>
          <a href="#services" className="neon-link">Services</a>
          <a href="#contact" className="neon-link">Contact</a>
        </div>

        {/* Right Actions */}
        <div className="nav-actions">
          <Link to="/login" className="text-link">Login / Signup</Link>
          <button className="btn-primary-nav">Book a Demo</button>
          <div className="nav-hamburger">
            <span /><span /><span />
          </div>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
