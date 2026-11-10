import React from 'react';
import './GraceFooter.css';

export default function GraceFooter({ onOpenDrawer }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="grace-footer-section">
      {/* Background Visual */}
      <div className="grace-footer-bg">
        <img 
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2400&auto=format&fit=crop" 
          alt="Fusion India Atelier" 
          className="grace-footer-bg-img"
        />
        <div className="grace-footer-scrim" />
      </div>

      {/* Center Brand & Consultation CTA */}
      <div className="grace-footer-content">
        <div className="grace-footer-brand-wrap">
          <h2 className="headline-xl text-white text-center">
            FUSION INDIA.
          </h2>
          <p className="body-default text-neutral-400 text-center mt-3">
            A Global Fashion Sourcing & Apparel Manufacturing Atelier.
          </p>
        </div>

        {/* Minimal Pill Consultation Button */}
        <div className="grace-footer-cta-wrap">
          <button 
            type="button" 
            className="grace-pill-btn-translucent"
            onClick={onOpenDrawer}
          >
            Start Sourcing Consultation <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Minimal Nav Links */}
        <div className="grace-footer-nav">
          <button type="button" onClick={() => scrollTo('deck')} className="grace-footer-link">
            Divisions
          </button>
          <button type="button" onClick={() => scrollTo('pillars')} className="grace-footer-link">
            Manufacturing
          </button>
          <button type="button" onClick={() => scrollTo('paths')} className="grace-footer-link">
            FOB & DDP
          </button>
          <button type="button" onClick={() => scrollTo('reach')} className="grace-footer-link">
            Our Reach
          </button>
          <button type="button" onClick={() => scrollTo('metrics')} className="grace-footer-link">
            Compliance
          </button>
          <button type="button" onClick={() => scrollTo('faq')} className="grace-footer-link">
            FAQ
          </button>
        </div>

        {/* Bottom Imprint & Location */}
        <div className="grace-footer-bottom">
          <p className="caption text-neutral-400 text-center">
            © 2026 Fusion India Sourcing Pvt. Ltd. // 40,000 Sq.Ft Campus, Udyog Vihar Phase-V, Gurugram, India // European Hubs: Hamburg • Copenhagen
          </p>
        </div>

      </div>
    </footer>
  );
}

