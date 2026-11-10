import React from 'react';
import { Link } from 'react-router-dom';
import './GraceNavbar.css';

export default function GraceNavbar({ onOpenDrawer }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="grace-nav-fixed">
      <div className="grace-nav-inner">
        {/* Brand Wordmark */}
        <Link to="/v4" className="grace-nav-brand">
          <span className="grace-brand-name">FUSION INDIA</span>
          <span className="grace-brand-sub">EST. 1998</span>
        </Link>

        {/* Center Links */}
        <div className="grace-nav-center">
          <button type="button" onClick={() => scrollTo('deck')} className="grace-nav-link">
            DIVISIONS
          </button>
          <button type="button" onClick={() => scrollTo('pillars')} className="grace-nav-link">
            MANUFACTURING
          </button>
          <button type="button" onClick={() => scrollTo('paths')} className="grace-nav-link">
            FOB & DDP
          </button>
          <button type="button" onClick={() => scrollTo('metrics')} className="grace-nav-link">
            COMPLIANCE
          </button>
          <button type="button" onClick={() => scrollTo('faq')} className="grace-nav-link">
            FAQ
          </button>
        </div>

        {/* Right Actions */}
        <div className="grace-nav-right">
          <button 
            type="button" 
            className="grace-nav-cta"
            onClick={onOpenDrawer}
          >
            REQUEST SAMPLES
          </button>
          <span className="grace-nav-lang">EN</span>
        </div>
      </div>
    </nav>
  );
}
