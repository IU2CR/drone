import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <ul className="footer-contact">
          <li><strong>📍 Address:</strong> Greenside House, 50 Station Rd, London N22 7DE, UK</li>
          <li><strong>📞 Phone:</strong> <a href="tel:+447747812767">+447747812767</a></li>
          <li><strong>📧 Email:</strong> <a href="mailto:rpas4ua@gmail.com">rpas4ua@gmail.com</a></li>
        </ul>
        <ul className="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <p>© {new Date().getFullYear()} DroneForUA. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;