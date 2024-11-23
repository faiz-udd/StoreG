// src/components/Footer.js

import React from 'react';
import '../styles/LandingPage.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <h1>gStorage</h1>
      </div>
      <div className="footer-links">
        <a href="/terms">Terms of Service</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
      </div>
      <div className="footer-socials">
        <a href="https://facebook.com" className="social-icon">F</a>
        <a href="https://twitter.com" className="social-icon">T</a>
        <a href="https://linkedin.com" className="social-icon">L</a>
      </div>
    </footer>
  );
};

export default Footer;
