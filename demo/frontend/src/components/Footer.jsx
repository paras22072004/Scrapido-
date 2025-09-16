import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // We will create this CSS file next

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        
        {/* Column 1: Brand Info */}
        <div className="footer-column brand-info">
          <h3 className="logo">Scrapido</h3>
          <p>
            Giving new life to scrap, empowering artisans, and building a sustainable future.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/marketplace">Marketplace</Link></li>
            <li><Link to="/ScrapRate">ScrapRate</Link></li>
            <li><Link to="#">About Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Partners & Contact */}
        <div className="footer-column">
          <h4>Get Involved</h4>
          <ul>
            <li><Link to="#">CSR Partners</Link></li>
            <li><Link to="#">Contact Us</Link></li>
            <li><Link to="#">Careers</Link></li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Instagram">IN</a>
            <a href="#" aria-label="Twitter">TW</a>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <div className="cont">
          <p>&copy; {new Date().getFullYear()} Scrap2Value. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;