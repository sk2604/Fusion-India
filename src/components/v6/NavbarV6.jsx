import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavbarV6.css';

export default function NavbarV6({ onOpenDrawer }) {
  const [navTheme, setNavTheme] = useState('dark'); // 'dark' (white text) or 'light' (black text)

  useEffect(() => {
    const probeTheme = () => {
      // 1. Probe element directly under center of navbar
      const probeX = window.innerWidth / 2;
      const probeY = 50;
      let foundTheme = null;

      try {
        const elements = document.elementsFromPoint(probeX, probeY);
        for (const el of elements) {
          if (el.closest('.v6-nav-fixed')) continue;
          const themeAttr = el.getAttribute?.('data-nav-theme') || el.closest?.('[data-nav-theme]')?.getAttribute('data-nav-theme');
          if (themeAttr) {
            foundTheme = themeAttr;
            break;
          }
        }
      } catch (err) {
        // fallback to bounding client rect
      }

      // 2. Secondary check: check bounding rect of all [data-nav-theme] sections
      if (!foundTheme) {
        const sections = document.querySelectorAll('[data-nav-theme]');
        for (const sec of sections) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 65 && rect.bottom >= 35) {
            foundTheme = sec.getAttribute('data-nav-theme');
            break;
          }
        }
      }

      if (foundTheme) {
        setNavTheme(foundTheme);
      } else {
        // Fallback: top of page (Hero) is dark
        setNavTheme(window.scrollY < window.innerHeight * 0.8 ? 'dark' : 'light');
      }
    };

    window.addEventListener('scroll', probeTheme, { passive: true });
    probeTheme();

    // Regular interval to catch pinned GSAP scrub transitions smoothly
    const interval = setInterval(probeTheme, 120);

    return () => {
      window.removeEventListener('scroll', probeTheme);
      clearInterval(interval);
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`v6-nav-fixed theme-${navTheme}`}>
      <div className="v6-nav-inner">
        {/* Brand Wordmark matching reference "grace" */}
        <Link to="/v6" className="v6-nav-brand">
          <span className="v6-brand-main">fusion</span>
        </Link>

        {/* Center Links matching reference font & spacing */}
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

        {/* Right CTA with Underline & Language matching reference */}
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
