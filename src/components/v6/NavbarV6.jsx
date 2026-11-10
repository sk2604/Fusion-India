import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavbarV6.css';

export default function NavbarV6({ onOpenDrawer }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`v6-nav-fixed ${isScrolled ? 'is-scrolled' : 'is-top'}`}>
      <div className="v6-nav-inner">
        {/* Brand Wordmark */}
        <Link to="/v6" className="v6-nav-brand">
          <span className="v6-brand-main">fusion</span>
          <span className="v6-brand-sub">Atelier<span className="v6-nav-dot">.</span></span>
        </Link>

        {/* Center Links */}
        <div className="v6-nav-center">
          <button type="button" onClick={() => scrollTo('deck')} className="v6-nav-link">
            DIVISIONS
          </button>
          <button type="button" onClick={() => scrollTo('blooming')} className="v6-nav-link">
            MANUFACTURING
          </button>
          <button type="button" onClick={() => scrollTo('paths')} className="v6-nav-link">
            FOB / DDP
          </button>
          <button type="button" onClick={() => scrollTo('reach')} className="v6-nav-link">
            OUR REACH
          </button>
          <button type="button" onClick={() => scrollTo('metrics')} className="v6-nav-link">
            COMPLIANCE
          </button>
          <button type="button" onClick={() => scrollTo('faq')} className="v6-nav-link">
            FAQ
          </button>
        </div>

        {/* Right CTA */}
        <div className="v6-nav-right">
          <button 
            type="button" 
            className="v6-nav-cta"
            onClick={onOpenDrawer}
          >
            REQUEST SAMPLES
          </button>
          <span className="v6-nav-lang">EN</span>
        </div>
      </div>
    </nav>
  );
}
