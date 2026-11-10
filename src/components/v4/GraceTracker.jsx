import React, { useState, useEffect } from 'react';
import './GraceTracker.css';

const sections = [
  { id: 'hero', label: 'HERO', num: '01' },
  { id: 'deck', label: 'DIVISIONS', num: '02' },
  { id: 'pillars', label: 'MANUFACTURING', num: '03' },
  { id: 'motion', label: 'ATELIER', num: '04' },
  { id: 'paths', label: 'FOB / DDP', num: '05' },
  { id: 'reach', label: 'OUR REACH', num: '06' },
  { id: 'metrics', label: 'ECONOMICS', num: '07' },
  { id: 'testimonials', label: 'PARTNERS', num: '08' },
  { id: 'faq', label: 'FAQ', num: '09' }
];

export default function GraceTracker() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.4;
      sections.forEach((sec, idx) => {
        const el = document.getElementById(sec.id);
        if (!el) return;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          setActiveIdx(idx);
        }
      });
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
    <aside className="grace-tracker-nav" aria-label="Section navigation">
      <div className="grace-tracker-pill-wrap">
        {sections.map((sec, idx) => (
          <button
            key={sec.id}
            type="button"
            className={`grace-tracker-dot-btn ${idx === activeIdx ? 'active' : ''}`}
            onClick={() => scrollTo(sec.id)}
            title={`${sec.num} // ${sec.label}`}
          >
            <span className="grace-tracker-dot" />
            <span className="grace-tracker-tooltip">
              {sec.num} // {sec.label}
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}
