import React, { useState } from 'react';
import './PillarsV6.css';

export default function PillarsV6({ id = 'pillars', onExploreSpecs }) {
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  return (
    <section className="v6-dot-grid v6-pillars-section" id={id} data-nav-theme="dark">
      <div className="v6-container v6-px v6-pillars-inner">
        
        {/* 3 Pillars Grid Matching Frame 00:20-00:22 */}
        <div className="v6-pillars-grid">
          
          {/* ─── COLUMN 1: EVERY DETAIL IS PERFECT ─── */}
          <div className="v6-pillar-col">
            <h3 className="v6-pillar-heading">
              Every detail is perfect.
            </h3>
            
            {/* Macro Detail Zoom Card with Crosshair */}
            <div 
              className="v6-pillar-card-lens"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseMove={handleMouseMove}
            >
              <img 
                src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1200&auto=format&fit=crop" 
                alt="High Precision Textile Weave" 
                className="v6-macro-img"
                data-pin-nopin="true"
                data-pin-no-hover="true"
                style={{
                  transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                  transform: isHovered ? 'scale(2.2)' : 'scale(1)'
                }}
              />
              <span className="v6-lens-tag">
                {isHovered ? '2.2X MACRO VIEW' : 'ZOOM IN AND CHECK IT'}
              </span>
            </div>

            <p className="v6-pillar-desc">
              Seams, buttons, prints, logos: exactly the item you're selling. Zoom in and check it.
            </p>
          </div>

          {/* ─── COLUMN 2: MASTER SAMPLE. EVERY BATCH ─── */}
          <div className="v6-pillar-col">
            <h3 className="v6-pillar-heading">
              Master sample. Every batch.
            </h3>

            {/* 2x2 Grid matching Frame 00:20 */}
            <div className="v6-pillar-card v6-grid-2x2">
              <div className="v6-cell">
                <img 
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop" 
                  alt="CAD Grading" 
                  data-pin-nopin="true"
                  data-pin-no-hover="true"
                />
                <span className="v6-cell-tag">CAD MARKER</span>
              </div>
              <div className="v6-cell">
                <img 
                  src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800&auto=format&fit=crop" 
                  alt="Assembly" 
                  data-pin-nopin="true"
                  data-pin-no-hover="true"
                />
                <span className="v6-cell-tag">ASSEMBLY</span>
              </div>
              <div className="v6-cell">
                <img 
                  src="https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?q=80&w=800&auto=format&fit=crop" 
                  alt="Wash Lab" 
                  data-pin-nopin="true"
                  data-pin-no-hover="true"
                />
                <span className="v6-cell-tag">WASH LAB</span>
              </div>
              <div className="v6-cell">
                <img 
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop" 
                  alt="Golden Seal" 
                  data-pin-nopin="true"
                  data-pin-no-hover="true"
                />
                <span className="v6-cell-tag">GOLDEN SEAL</span>
              </div>
            </div>

            <p className="v6-pillar-desc">
              Created exclusively for your brand. Zero batch deviation from pre-production to 50,000 units.
            </p>
          </div>

          {/* ─── COLUMN 3: IT FITS INTO YOUR SYSTEMS ─── */}
          <div className="v6-pillar-col">
            <h3 className="v6-pillar-heading">
              It fits into your systems.
            </h3>

            {/* Concentric Orbit with Badges matching Frame 00:21 */}
            <div className="v6-pillar-card v6-orbit-card">
              <div className="v6-orbit-stage">
                
                <span className="v6-ring v6-ring-outer" />
                <span className="v6-ring v6-ring-mid" />
                <span className="v6-ring v6-ring-inner" />

                <div className="v6-orbit-center">
                  <span className="v6-center-glyph">fi</span>
                </div>

                <div className="v6-orbit-spin v6-orbit-track">
                  <div className="v6-node v6-n1">
                    <span className="v6-orbit-counter v6-node-pill">PLM</span>
                  </div>
                  <div className="v6-node v6-n2">
                    <span className="v6-orbit-counter v6-node-pill">CAD</span>
                  </div>
                  <div className="v6-node v6-n3">
                    <span className="v6-orbit-counter v6-node-pill">SAP</span>
                  </div>
                  <div className="v6-node v6-n4">
                    <span className="v6-orbit-counter v6-node-pill">SEDEX</span>
                  </div>
                  <div className="v6-node v6-n5">
                    <span className="v6-orbit-counter v6-node-pill">GOTS</span>
                  </div>
                  <div className="v6-node v6-n6">
                    <span className="v6-orbit-counter v6-node-pill">BSCI</span>
                  </div>
                </div>

              </div>
            </div>

            <p className="v6-pillar-desc">
              Tech packs in, sealed containers out: direct EDI & ERP synchronization with European warehouses.
            </p>
          </div>

        </div>

        {/* Bottom Link matching 00:22 in video */}
        <div className="v6-pillars-bottom-link">
          <button 
            type="button" 
            className="v6-link-white-arrow"
            onClick={onExploreSpecs}
          >
            Explore manufacturing standards <span aria-hidden="true">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
