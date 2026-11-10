import React, { useState } from 'react';
import './PillarsV5.css';

export default function PillarsV5({ id = 'pillars', onExploreSpecs }) {
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  return (
    <section className="v5-dot-grid v5-pillars-section" id={id}>
      <div className="v5-container v5-px">
        
        {/* 3 Pillars Grid Matching Frame 00:20-00:22 */}
        <div className="v5-pillars-grid">
          
          {/* ─── COLUMN 1: EVERY DETAIL IS PERFECT ─── */}
          <div className="v5-pillar-col">
            <h3 className="headline-medium text-white mb-5">
              Every detail is perfect.
            </h3>
            
            {/* Macro Detail Zoom Card with Crosshair */}
            <div 
              className="v5-pillar-card-lens aspect-square"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseMove={handleMouseMove}
            >
              <img 
                src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1200&auto=format&fit=crop" 
                alt="High Precision Textile Weave" 
                className="v5-macro-img"
                style={{
                  transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                  transform: isHovered ? 'scale(2.2)' : 'scale(1)'
                }}
              />
              <span className="v5-lens-tag">
                {isHovered ? '2.2X MACRO VIEW' : 'ZOOM IN AND CHECK IT'}
              </span>
            </div>

            <p className="body-default text-neutral-400 mt-5">
              Seams, buttons, prints, logos: exactly the item you're selling. Zoom in and check it.
            </p>
          </div>

          {/* ─── COLUMN 2: MASTER SAMPLE. EVERY BATCH ─── */}
          <div className="v5-pillar-col">
            <h3 className="headline-medium text-white mb-5">
              Master sample. Every batch.
            </h3>

            {/* 2x2 Grid matching Frame 00:20 */}
            <div className="v5-pillar-card aspect-square v5-grid-2x2">
              <div className="v5-cell">
                <img 
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop" 
                  alt="CAD Grading" 
                />
                <span className="v5-cell-tag">CAD MARKER</span>
              </div>
              <div className="v5-cell">
                <img 
                  src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800&auto=format&fit=crop" 
                  alt="Assembly" 
                />
                <span className="v5-cell-tag">ASSEMBLY</span>
              </div>
              <div className="v5-cell">
                <img 
                  src="https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?q=80&w=800&auto=format&fit=crop" 
                  alt="Wash Lab" 
                />
                <span className="v5-cell-tag">WASH LAB</span>
              </div>
              <div className="v5-cell">
                <img 
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop" 
                  alt="Golden Seal" 
                />
                <span className="v5-cell-tag">GOLDEN SEAL</span>
              </div>
            </div>

            <p className="body-default text-neutral-400 mt-5">
              Created exclusively for your brand. Zero batch deviation from pre-production to 50,000 units.
            </p>
          </div>

          {/* ─── COLUMN 3: IT FITS INTO YOUR SYSTEMS ─── */}
          <div className="v5-pillar-col">
            <h3 className="headline-medium text-white mb-5">
              It fits into your systems.
            </h3>

            {/* Concentric Orbit with Badges matching Frame 00:21 */}
            <div className="v5-pillar-card aspect-square v5-orbit-card">
              <div className="v5-orbit-stage">
                
                <span className="v5-ring v5-ring-outer" />
                <span className="v5-ring v5-ring-mid" />
                <span className="v5-ring v5-ring-inner" />

                <div className="v5-orbit-center">
                  <span className="v5-center-glyph">fi</span>
                </div>

                <div className="v5-orbit-spin v5-orbit-track">
                  <div className="v5-node v5-n1">
                    <span className="v5-orbit-counter v5-node-pill">PLM</span>
                  </div>
                  <div className="v5-node v5-n2">
                    <span className="v5-orbit-counter v5-node-pill">CAD</span>
                  </div>
                  <div className="v5-node v5-n3">
                    <span className="v5-orbit-counter v5-node-pill">SAP</span>
                  </div>
                  <div className="v5-node v5-n4">
                    <span className="v5-orbit-counter v5-node-pill">SEDEX</span>
                  </div>
                  <div className="v5-node v5-n5">
                    <span className="v5-orbit-counter v5-node-pill">GOTS</span>
                  </div>
                  <div className="v5-node v5-n6">
                    <span className="v5-orbit-counter v5-node-pill">BSCI</span>
                  </div>
                </div>

              </div>
            </div>

            <p className="body-default text-neutral-400 mt-5">
              Tech packs in, finished containers back: direct synchronization into shop, PLM, DAM or ERP system.
            </p>
          </div>

        </div>

        {/* Bottom Link matching 00:22 in video */}
        <div className="v5-pillars-bottom-link">
          <button 
            type="button" 
            className="v5-link-white-arrow"
            onClick={onExploreSpecs}
          >
            Explore manufacturing standards <span aria-hidden="true">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}

