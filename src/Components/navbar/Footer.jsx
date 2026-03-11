import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-col brand-info">
          <div className="footer-logo">
            <div className="footer-logo-mark">UL</div>
            Universe Logic
          </div>
          <p className="brand-tagline">
            Simplifying business operations with smart software solutions. Helping companies streamline and grow through innovation.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><img src="https://ibb.co/3yNyfJXZ" alt="Facebook" /></a>
            <a href="#" aria-label="LinkedIn"><img src="https://ibb.co/bRJwKmbz" alt="LinkedIn" /></a>
            <a href="#" aria-label="Twitter"><img src="https://ibb.co/LXRmzHVB" alt="Twitter" /></a>
            <a href="https://www.instagram.com/dev_saquib?igsh=MTI4MmduanNtNGwzOQ==" aria-label="Instagram"><img src="https://inquisitive-magenta-kuwsjjwl4t.edgeone.app/instagram.png" alt="Instagram" /></a>
          </div>
        </div>

        {/* Products */}
        <div className="footer-col">
          <h3>Products</h3>
          <ul>
            <li><a href="#">Asset Management</a></li>
            <li><a href="#">Inventory System</a></li>
            <li><a href="#">Hospital System</a></li>
            <li><a href="#">Retail POS</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">API Integration</a></li>
            <li><a href="#">Consultancy</a></li>
          </ul>
        </div>

        {/* Links */}
        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col contact-info">
          <h3>Contact</h3>
          <p>📍 Mumbai, Maharashtra</p>
          <p>📞 +91 8541078902</p>
          <p>✉️ support@universelogic.in</p>
        </div>
      </div>

      {/* Giant watermark text */}
      <div className="footer-middle">
        <div className="giant-text">UNIVERSE LOGIC</div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2026 <span className="footer-name">UNIVERSE LOGIC</span>. All rights reserved.
        </p>
        <div className="legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
