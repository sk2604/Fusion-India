import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavbarV6.css';

export default function NavbarV6({ onOpenDrawer }) {
  const [navTheme, setNavTheme] = useState('dark'); // 'dark' = white text on dark bg, 'light' = black text on light bg

  useEffect(() => {
    const detectNavTheme = () => {
      const checkY = 45;
      const checkX = Math.min(window.innerWidth / 2, 600);

      // 1. Try elementsFromPoint first for exact rendered pixel detection
      if (typeof document.elementsFromPoint === 'function') {
        const elements = document.elementsFromPoint(checkX, checkY);
        for (const el of elements) {
          if (el.classList.contains('v6-nav-fixed') || el.closest('.v6-nav-fixed')) {
            continue;
          }
          const themed = el.closest('[data-nav-theme]');
          if (themed) {
            const theme = themed.getAttribute('data-nav-theme');
            if (theme === 'light' || theme === 'dark') {
              setNavTheme(theme);
              return;
            }
          }
        }
      }

      // 2. Fallback: Check boundingClientRect of all sections with [data-nav-theme]
      const themedSections = document.querySelectorAll('[data-nav-theme]');
      for (const sec of themedSections) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= checkY && rect.bottom >= checkY) {
          const theme = sec.getAttribute('data-nav-theme');
          if (theme === 'light' || theme === 'dark') {
            setNavTheme(theme);
            return;
          }
        }
      }
    };

    // Run on initial load and next animation frame
    detectNavTheme();
    const rafId = requestAnimationFrame(detectNavTheme);

    // Listen to native scroll & resize
    window.addEventListener('scroll', detectNavTheme, { passive: true });
    window.addEventListener('resize', detectNavTheme, { passive: true });

    // Hook into Lenis smooth scroll if available
    let lenisUnsub = null;
    if (window.lenis) {
      window.lenis.on('scroll', detectNavTheme);
      lenisUnsub = () => {
        try { window.lenis.off('scroll', detectNavTheme); } catch (e) {}
      };
    } else {
      const interval = setInterval(() => {
        if (window.lenis) {
          window.lenis.on('scroll', detectNavTheme);
          clearInterval(interval);
        }
      }, 250);
      setTimeout(() => clearInterval(interval), 4000);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', detectNavTheme);
      window.removeEventListener('resize', detectNavTheme);
      if (lenisUnsub) lenisUnsub();
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`v6-nav-fixed theme-${navTheme}`} aria-label="Main Navigation">
      <div className="v6-nav-inner">
        {/* Brand Wordmark */}
        <Link to="/v6" className="v6-nav-brand">
          <span className="v6-brand-main">fusion</span>
        </Link>

        {/* Center Links */}
        <div className="v6-nav-center">
          <button type="button" onClick={() => scrollTo('deck')} className="v6-nav-link">
            DIVISIONS
          </button>
          <button type="button" onClick={() => scrollTo('blooming')} className="v6-nav-link">
            MANUFACTURING
          </button>
          <button type="button" onClick={() => scrollTo('pillars')} className="v6-nav-link">
            STANDARDS
          </button>
          <button type="button" onClick={() => scrollTo('paths')} className="v6-nav-link">
            FOB / DDP
          </button>
          <button type="button" onClick={() => scrollTo('reach')} className="v6-nav-link">
            OUR REACH
          </button>
          <button type="button" onClick={() => scrollTo('who-we-are')} className="v6-nav-link">
            ABOUT
          </button>
          <button type="button" onClick={() => scrollTo('headquarters')} className="v6-nav-link">
            CAMPUS
          </button>
          <button type="button" onClick={() => scrollTo('brands')} className="v6-nav-link">
            BRANDS
          </button>
          <button type="button" onClick={() => scrollTo('faq')} className="v6-nav-link">
            FAQ
          </button>
        </div>

        {/* Right CTA with Underline & Language */}
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
