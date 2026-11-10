import React from 'react';
import './FooterV6.css';

export default function FooterV6({ onOpenDrawer }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="v6-footer-section" data-nav-theme="dark">
      {/* Background Visual (Warm red/orange editorial matching 00:38 in video) */}
      <div className="v6-footer-bg">
        <img 
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2400&auto=format&fit=crop" 
          alt="Fusion India Atelier" 
          className="v6-footer-img"
        />
        <div className="v6-footer-red-scrim" />
      </div>

      {/* Center Brand Wordmark & Button matching 00:38 in video */}
      <div className="v6-footer-content">
        
        <div className="v6-footer-brand-box">
          <h2 className="v6-footer-logo">
            <span className="v6-footer-logo-main">fusion</span>
            <span className="v6-footer-logo-sub">Atelier studio.</span>
          </h2>
          
          <button 
            type="button" 
            className="v6-footer-cta-btn"
            onClick={onOpenDrawer}
          >
            Book a demo
          </button>
        </div>

        {/* Footer Nav Links matching 00:39 in video */}
        <div className="v6-footer-links-row">
          <button type="button" onClick={() => scrollTo('showcase')} className="v6-footer-link">
            Divisions
          </button>
          <button type="button" onClick={() => scrollTo('blooming')} className="v6-footer-link">
            Manufacturing
          </button>
          <button type="button" onClick={() => scrollTo('paths')} className="v6-footer-link">
            FOB & DDP
          </button>
          <button type="button" onClick={() => scrollTo('reach')} className="v6-footer-link">
            Our Reach
          </button>
          <button type="button" onClick={() => scrollTo('metrics')} className="v6-footer-link">
            Economics
          </button>
          <button type="button" onClick={() => scrollTo('testimonials')} className="v6-footer-link">
            Partners
          </button>
          <button type="button" onClick={() => scrollTo('faq')} className="v6-footer-link">
            FAQ
          </button>
        </div>

        {/* Bottom Credits matching 00:40 in video */}
        <div className="v6-footer-bottom-bar">
          <span className="caption text-white/70">
            a division of Fusion India Sourcing Pvt. Ltd. // 40,000 Sq.Ft Campus, Gurugram, India // European Hubs: Hamburg • Copenhagen
          </span>
        </div>

      </div>
    </footer>
  );
}

