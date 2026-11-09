import React, { useState, useEffect, useRef, useCallback } from 'react';
import FashionHero from '../components/FashionHero';
import FashionLookbook from '../components/FashionLookbook';
import FashionCategories from '../components/FashionCategories';
import FashionAtelier from '../components/FashionAtelier';
import GlobalReachV3 from '../components/GlobalReachV3';
import BrandsV3 from '../components/BrandsV3';
import './HomeV3.css';

const sectionList = [
  { id: 'hero', label: 'CAMPAIGN', num: '01' },
  { id: 'lookbook', label: 'LOOKBOOK', num: '02' },
  { id: 'categories', label: 'SPECIALTIES', num: '03' },
  { id: 'atelier', label: 'ATELIER', num: '04' },
  { id: 'reach', label: 'GLOBAL REACH', num: '05' },
  { id: 'brands', label: 'PARTNERS', num: '06' },
];

export default function HomeV3() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  // Direct, unblocked smooth scrolling to section
  const scrollToSection = useCallback((index) => {
    if (index < 0 || index >= sectionList.length) return;
    setActiveSection(index);

    const targetEl = sectionRefs.current[index];
    if (!targetEl) return;

    const targetY = targetEl.getBoundingClientRect().top + window.scrollY;

    if (window.lenis) {
      window.lenis.scrollTo(targetY, {
        duration: 0.85,
        immediate: false
      });
    } else {
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
    }
  }, []);

  // Sync active section with scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollMiddle = window.scrollY + window.innerHeight * 0.35;
      sectionRefs.current.forEach((el, idx) => {
        if (!el) return;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollMiddle >= top && scrollMiddle < bottom) {
          setActiveSection(idx);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (window.innerWidth <= 900) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        setActiveSection((prev) => {
          const next = Math.min(sectionList.length - 1, prev + 1);
          scrollToSection(next);
          return next;
        });
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        setActiveSection((prev) => {
          const next = Math.max(0, prev - 1);
          scrollToSection(next);
          return next;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scrollToSection]);

  return (
    <div className="home-v3-root theme-light">
      
      {/* Floating Vertical Section Navigation Tracker */}
      <nav className="section-tracker tracker-light" aria-label="Section Navigation">
        {sectionList.map((sec, idx) => (
          <button
            key={sec.id}
            type="button"
            className={`tracker-dot ${activeSection === idx ? 'active' : ''}`}
            onClick={() => scrollToSection(idx)}
            aria-label={`Go to ${sec.label}`}
          >
            <span className="tracker-pill" />
            <span className="tracker-tooltip">
              <span className="tracker-num">{sec.num}</span> {sec.label}
            </span>
          </button>
        ))}
      </nav>

      {/* 100vh Fullpage Snap Slides */}
      <div
        className="snap-slide"
        ref={(el) => (sectionRefs.current[0] = el)}
        id="section-hero"
      >
        <FashionHero />
      </div>

      <div
        className="snap-slide"
        ref={(el) => (sectionRefs.current[1] = el)}
        id="section-lookbook"
      >
        <FashionLookbook theme="light" />
      </div>

      <div
        className="snap-slide"
        ref={(el) => (sectionRefs.current[2] = el)}
        id="section-categories"
      >
        <FashionCategories theme="light" />
      </div>

      <div
        className="snap-slide"
        ref={(el) => (sectionRefs.current[3] = el)}
        id="section-atelier"
      >
        <FashionAtelier theme="light" />
      </div>

      <div
        className="snap-slide"
        ref={(el) => (sectionRefs.current[4] = el)}
        id="section-reach"
      >
        <GlobalReachV3 theme="light" />
      </div>

      <div
        className="snap-slide"
        ref={(el) => (sectionRefs.current[5] = el)}
        id="section-brands"
      >
        <BrandsV3 theme="light" />
      </div>

    </div>
  );
}
