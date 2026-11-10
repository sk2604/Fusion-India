import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const location = useLocation();
  // V4 and V5 have their own dedicated luxury footers
  if (location.pathname === '/v4' || location.pathname === '/grace' || location.pathname === '/v5') {
    return null;
  }

  return (
    <footer className="fat-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="text-title">FUSION.</h2>
            <p className="footer-subtitle">The Right Product. Right Price. Right Performance.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <span className="footer-heading">COMPANY</span>
              <Link to="/">About Us</Link>
              <Link to="/">Products</Link>
              <Link to="/">Services</Link>
              <Link to="/">Global Network</Link>
            </div>
            <div className="footer-column">
              <span className="footer-heading">LEGAL</span>
              <Link to="/">Quality Policy</Link>
              <Link to="/">Compliance</Link>
              <Link to="/">Terms of Service</Link>
            </div>
            <div className="footer-column">
              <span className="footer-heading">CONNECT</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-contact">
            <p>Fusion India, Udyog Vihar, Gurugram, India</p>
            <a href="mailto:info@fcindia.com">INFO@FCINDIA.COM</a>
            <a href="tel:+911244509101">+91-124-4509101</a>
          </div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} Fusion India. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
