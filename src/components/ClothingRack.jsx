import React, { useState, useRef } from 'react';
import './ClothingRack.css';

const clothingItems = [
  {
    id: 1,
    name: 'Leather Jacket',
    label: 'OUTERWEAR',
    desc: 'Crafted in Italy. Signature fit.',
    material: 'Full-grain calfskin · Satin lining · YKK hardware',
    front: '/assets/3d_leather_jacket_1791198176453.png?v=4',
    side: '/assets/side_leather_jacket_1791199171215.png?v=4',
  },
  {
    id: 2,
    name: 'Oversized Hoodie',
    label: 'KNITWEAR',
    desc: 'Heavyweight cotton. Dropped shoulder.',
    material: '480gsm brushed fleece · Ribbed hem · Kangaroo pocket',
    front: '/assets/3d_green_hoodie_1791198203504.png?v=4',
    side: '/assets/side_green_hoodie_1791199182738.png?v=4',
  },
  {
    id: 3,
    name: 'Classic T-Shirt',
    label: 'ESSENTIALS',
    desc: 'Organic blend. Everyday essential.',
    material: '220gsm GOTS-certified organic cotton · Flat-seam finish',
    front: '/assets/3d_white_tshirt_1791198151326.png?v=4',
    side: '/assets/side_white_tshirt_1791199195290.png?v=4',
  },
  {
    id: 4,
    name: 'Silk Gown',
    label: 'EVENINGWEAR',
    desc: 'Hand-draped elegance.',
    material: '22mm mulberry silk · Hand-rolled hems · Invisible zip',
    front: '/assets/3d_womens_dress_1791198190233.png?v=4',
    side: '/assets/side_silk_dress_1791199207848.png?v=4',
  },
  {
    id: 5,
    name: 'Raw Denim',
    label: 'DENIM',
    desc: 'Japanese selvedge. Straight cut.',
    material: '14oz Kojima selvedge · Copper rivets · Chain stitch hem',
    front: '/assets/3d_denim_jeans_1791198161705.png?v=4',
    side: '/assets/side_denim_jeans_1791199219256.png?v=4',
  }
];

export default function ClothingRack() {
  const [hovered, setHovered] = useState(null);
  const [mobileActive, setMobileActive] = useState(null);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const activeItem = hovered !== null ? clothingItems[hovered] : null;

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e, index) => {
    const dx = Math.abs(e.changedTouches[0].clientX - touchStartX.current);
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartY.current);
    if (dx < 10 && dy < 10) setMobileActive(p => p === index ? null : index);
  };

  return (
    <section className="rack-section">

      {/* ── HEADER ── */}
      <header className="rack-header">
        <div className="rack-eyebrow">
          <span className="rack-eyebrow-line" />
          <span className="rack-eyebrow-text">FW 2026 · THE COLLECTION</span>
          <span className="rack-eyebrow-line" />
        </div>
        <h2 className="rack-title">
          The Atelier<br />
          <span className="rack-title-italic">Collection</span>
        </h2>
        <p className="rack-subtitle">Hover each piece to reveal the full look</p>
      </header>

      {/* ── DESKTOP ── */}
      <div className="rack-stage">

        {/* Rail */}
        <div className="rack-rail-wrap">
          <div className="rack-rail" />
        </div>

        {/* Garments row */}
        <div className="rack-row">
          {clothingItems.map((item, index) => {
            const isActive = hovered === index;
            const isDimmed = hovered !== null && !isActive;
            return (
              <div
                key={item.id}
                className={`rack-item ${isActive ? 'is-active' : ''} ${isDimmed ? 'is-dimmed' : ''}`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Hook wire */}
                <div className="rack-hook" />

                {/* Images */}
                <div className="rack-img-wrap">
                  <img
                    className={`rack-img side ${isActive ? 'hidden' : ''}`}
                    src={item.side}
                    alt={item.name}
                    draggable="false"
                  />
                  <img
                    className={`rack-img front ${isActive ? 'visible' : ''}`}
                    src={item.front}
                    alt={item.name}
                    draggable="false"
                  />
                </div>

                {/* Item number — idle */}
                <span className={`rack-item-num ${isActive ? 'gone' : ''}`}>
                  0{item.id}
                </span>
              </div>
            );
          })}
        </div>

        {/* ── GLASS INFO PANEL ── */}
        <div className={`rack-glass-panel ${activeItem ? 'is-open' : ''}`}>
          {clothingItems.map((item, index) => (
            <div
              key={item.id}
              className={`glass-panel-inner ${hovered === index ? 'is-shown' : ''}`}
            >
              {/* Left */}
              <div className="glass-left">
                <span className="glass-label">{item.label}</span>
                <h3 className="glass-name">{item.name}</h3>
                <p className="glass-desc">{item.desc}</p>
              </div>

              {/* Divider */}
              <div className="glass-divider" />

              {/* Middle */}
              <div className="glass-mid">
                <span className="glass-comp-label">COMPOSITION</span>
                <p className="glass-comp">{item.material}</p>
              </div>

              {/* Divider */}
              <div className="glass-divider" />

              {/* Right */}
              <div className="glass-right">
                <span className="glass-num">0{item.id} / 05</span>
                <button className="glass-btn">
                  View Details
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}

          {/* Default idle */}
          <div className={`glass-idle ${activeItem ? 'gone' : ''}`}>
            <span className="idle-dot" />
            <span>hover a piece to explore</span>
          </div>
        </div>

      </div>{/* /rack-stage */}

      {/* ── MOBILE ── */}
      <div className="rack-mobile">
        {clothingItems.map((item, index) => {
          const isOpen = mobileActive === index;
          return (
            <div
              key={item.id}
              className={`mob-card ${isOpen ? 'is-open' : ''}`}
              onTouchStart={handleTouchStart}
              onTouchEnd={(e) => handleTouchEnd(e, index)}
              onClick={() => setMobileActive(p => p === index ? null : index)}
            >
              {/* Image */}
              <div className="mob-img-area">
                <img className={`mob-img mob-side ${isOpen ? 'gone' : ''}`} src={item.side}  alt={item.name} draggable="false" />
                <img className={`mob-img mob-front ${isOpen ? 'show' : ''}`} src={item.front} alt={item.name} draggable="false" />
                <span className="mob-label-tag">{item.label}</span>
              </div>

              {/* Info */}
              <div className="mob-info">
                <div className="mob-row-top">
                  <div>
                    <span className="mob-num">0{item.id}</span>
                    <h3 className="mob-name">{item.name}</h3>
                  </div>
                  <svg
                    className={`mob-chevron ${isOpen ? 'rotated' : ''}`}
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                  >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className={`mob-expand ${isOpen ? 'open' : ''}`}>
                  <p className="mob-desc">{item.desc}</p>
                  <p className="mob-material">{item.material}</p>
                  <button className="mob-btn">
                    View Details
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
