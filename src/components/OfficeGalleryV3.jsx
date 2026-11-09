import React, { useState } from 'react';
import './OfficeGalleryV3.css';

const spaces = [
  {
    src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600&auto=format&fit=crop',
    title: 'CORPORATE HEADQUARTERS',
    subtitle: 'Gurugram, Sector 20 — 40,000 sq.ft Operational Campus'
  },
  {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
    title: 'CREATIVE & BUYING SUITE',
    subtitle: 'Client trend presentation suites & seasonal mood displays'
  },
  {
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
    title: 'SAMPLE ATELIER & DESIGN STUDIO',
    subtitle: 'Rapid pattern drafting, digital cutting & 48-hr sample turns'
  },
  {
    src: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop',
    title: 'PHYSICAL TESTING LAB',
    subtitle: 'Accredited fabric testing for shrinkage, tensile & color fastness'
  }
];

export default function OfficeGalleryV3() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="office-v3">
      <div className="container">
        
        {/* Header */}
        <div className="office-v3-header">
          <div className="office-v3-title-wrap">
            <span className="office-v3-eyebrow">INFRASTRUCTURE & ATELIER</span>
            <h2 className="office-v3-title">
              OUR HEAD OFFICE<span className="title-dot">.</span>
            </h2>
          </div>
          <p className="office-v3-desc">
            A state-of-the-art corporate facility in Gurugram, India — housing over 200 merchandisers, fashion designers, quality auditors, and fabric testing specialists.
          </p>
        </div>

        {/* Feature Display + Thumbnails */}
        <div className="office-v3-showcase">
          
          {/* Main Visual Display */}
          <div className="showcase-main">
            <img src={spaces[activeIdx].src} alt={spaces[activeIdx].title} />
            <div className="showcase-badge">
              <span className="showcase-tag">0{activeIdx + 1} / 04</span>
              <strong className="showcase-title">{spaces[activeIdx].title}</strong>
              <span className="showcase-sub">{spaces[activeIdx].subtitle}</span>
            </div>
          </div>

          {/* 4 Interactive Cards */}
          <div className="showcase-thumbs">
            {spaces.map((sp, idx) => (
              <div
                key={idx}
                className={`thumb-card ${activeIdx === idx ? 'active' : ''}`}
                onClick={() => setActiveIdx(idx)}
              >
                <div className="thumb-img-wrap">
                  <img src={sp.src} alt={sp.title} />
                </div>
                <div className="thumb-info">
                  <span className="thumb-num">0{idx + 1}</span>
                  <strong className="thumb-name">{sp.title}</strong>
                  <span className="thumb-desc">{sp.subtitle}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
