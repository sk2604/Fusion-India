import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarV5.css';

export default function NavbarV5({ onOpenDrawer }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="v5-nav-fixed">
      <div className="v5-nav-inner">
        {/* Brand Wordmark (matching video) */}
        <Link to="/v5" className="v5-nav-brand">
          <span className="v5-brand-main">fusion</span>
          <span className="v5-brand-sub">Atelier.</span>
        </Link>

        {/* Center Links */}
        <div className="v5-nav-center">
          <button type="button" onClick={() => scrollTo('showcase')} className="v5-nav-link">
            DIVISIONS
          </button>
          <button type="button" onClick={() => scrollTo('blooming')} className="v5-nav-link">
            MANUFACTURING
          </button>
          <button type="button" onClick={() => scrollTo('paths')} className="v5-nav-link">
            FOB / DDP
          </button>
          <button type="button" onClick={() => scrollTo('reach')} className="v5-nav-link">
            OUR REACH
          </button>
          <button type="button" onClick={() => scrollTo('metrics')} className="v5-nav-link">
            COMPLIANCE
          </button>
          <button type="button" onClick={() => scrollTo('faq')} className="v5-nav-link">
            FAQ
          </button>
        </div>

        {/* Right CTA */}
        <div className="v5-nav-right">
          <button 
            type="button" 
            className="v5-nav-cta"
            onClick={onOpenDrawer}
          >
            REQUEST SAMPLES
          </button>
          <span className="v5-nav-lang">EN</span>
        </div>
      </div>
    </nav>
  );
}
