import React, { useState, useEffect } from 'react';
import './TrackerV5.css';

const sections = [
  { id: 'hero', label: 'CAMPAIGN', num: '01' },
  { id: 'showcase', label: 'DIVISIONS', num: '02' },
  { id: 'blooming', label: 'BLOOMING TECH PACK', num: '03' },
  { id: 'pillars', label: 'MANUFACTURING', num: '04' },
  { id: 'motion', label: 'ATELIER', num: '05' },
  { id: 'paths', label: 'FOB / DDP', num: '06' },
  { id: 'reach', label: 'OUR REACH', num: '07' },
  { id: 'metrics', label: 'ECONOMICS', num: '08' },
  { id: 'testimonials', label: 'PARTNERS', num: '09' },
  { id: 'faq', label: 'FAQ', num: '10' }
];

export default function TrackerV5() {
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
    <aside className="v5-tracker-nav" aria-label="Section navigation">
      <div className="v5-tracker-pill-wrap">
        {sections.map((sec, idx) => (
          <button
            key={sec.id}
            type="button"
            className={`v5-tracker-dot-btn ${idx === activeIdx ? 'active' : ''}`}
            onClick={() => scrollTo(sec.id)}
            title={`${sec.num} // ${sec.label}`}
          >
            <span className="v5-tracker-dot" />
            <span className="v5-tracker-tooltip">
              {sec.num} // {sec.label}
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}
