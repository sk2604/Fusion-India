import React, { useState } from 'react';
import './GracePillars.css';

export default function GracePillars({ id = 'pillars', onExploreSpecs }) {
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  return (
    <section className="grace-pillars-section dot-grid-surface" id={id}>
      <div className="grace-container grace-px grace-py-large">
        
        {/* Subheadline Center (Grace Stance) */}
        <div className="grace-pillars-header">
          <p className="subheadline text-white text-center">
            From tech pack to verified shipping container. At audited scale.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grace-pillars-grid">
          
          {/* ─── PILLAR 1: EVERY DETAIL HOLDS ─── */}
          <div className="grace-pillar-col">
            <h3 className="headline-medium text-white mb-5">
              Every detail holds.
            </h3>
            
            {/* Interactive Macro Detail Zoom Card */}
            <div 
              className="grace-pillar-card-lens aspect-square"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseMove={handleMouseMove}
            >
              <img 
                src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1200&auto=format&fit=crop" 
                alt="Fusion India High Precision Textile Craft" 
                className="grace-macro-img"
                style={{
                  transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                  transform: isHovered ? 'scale(2.2)' : 'scale(1)'
                }}
              />
              <span className="grace-lens-tag">
                {isHovered ? '2.2X MACRO VIEW' : 'HOVER TO INSPECT'}
              </span>
            </div>

            <p className="body-default text-neutral-400 mt-5">
              Seams, linings, horn buttons, custom hardware: engineered to your exact tech-pack tolerance. Hover and inspect the stitch density.
            </p>
          </div>

          {/* ─── PILLAR 2: MASTER SAMPLE. 100% CONSISTENCY ─── */}
          <div className="grace-pillar-col">
            <h3 className="headline-medium text-white mb-5">
              Master sample. 100% consistency.
            </h3>

            {/* 2x2 Grid of Single Garment Production Checks */}
            <div className="grace-pillar-card aspect-square grid-2x2">
              <div className="grid-cell">
                <img 
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop" 
                  alt="CAD Marker Grading" 
                />
                <span className="cell-tag">CAD MARKER</span>
              </div>
              <div className="grid-cell">
                <img 
                  src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800&auto=format&fit=crop" 
                  alt="Stitch Assembly" 
                />
                <span className="cell-tag">ASSEMBLY</span>
              </div>
              <div className="grid-cell">
                <img 
                  src="https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?q=80&w=800&auto=format&fit=crop" 
                  alt="Wash Lab Audit" 
                />
                <span className="cell-tag">WASH LAB</span>
              </div>
              <div className="grid-cell">
                <img 
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop" 
                  alt="Finished Garment" 
                />
                <span className="cell-tag">GOLDEN SEAL</span>
              </div>
            </div>

            <p className="body-default text-neutral-400 mt-5">
              Zero batch deviation. From pre-production sample to 50,000-unit rollouts, every container maintains approved factory calibration.
            </p>
          </div>

          {/* ─── PILLAR 3: FITS INTO YOUR SYSTEMS (ORBIT ANIMATION) ─── */}
          <div className="grace-pillar-col">
            <h3 className="headline-medium text-white mb-5">
              Fits into your systems.
            </h3>

            {/* Concentric Orbit Visual */}
            <div className="grace-pillar-card aspect-square orbit-container">
              <div className="orbit-stage">
                
                {/* Concentric rings */}
                <span className="orbit-ring ring-outer" />
                <span className="orbit-ring ring-mid" />
                <span className="orbit-ring ring-inner" />

                {/* Center Fusion India Monogram */}
                <div className="orbit-center-mark">
                  <span className="monogram">FI</span>
                </div>

                {/* Orbiting system badges */}
                <div className="covered-orbit-spin orbit-track">
                  
                  {/* Centric PLM */}
                  <div className="orbit-node node-1">
                    <span className="covered-orbit-counter orbit-pill">
                      PLM
                    </span>
                  </div>

                  {/* Lectra CAD */}
                  <div className="orbit-node node-2">
                    <span className="covered-orbit-counter orbit-pill">
                      CAD
                    </span>
                  </div>

                  {/* SAP ERP */}
                  <div className="orbit-node node-3">
                    <span className="covered-orbit-counter orbit-pill">
                      SAP
                    </span>
                  </div>

                  {/* Sedex SMETA */}
                  <div className="orbit-node node-4">
                    <span className="covered-orbit-counter orbit-pill">
                      SEDEX
                    </span>
                  </div>

                  {/* GOTS Organic */}
                  <div className="orbit-node node-5">
                    <span className="covered-orbit-counter orbit-pill">
                      GOTS
                    </span>
                  </div>

                  {/* BSCI Audit */}
                  <div className="orbit-node node-6">
                    <span className="covered-orbit-counter orbit-pill">
                      BSCI
                    </span>
                  </div>

                </div>

              </div>
            </div>

            <p className="body-default text-neutral-400 mt-5">
              Tech packs in, verified shipments back: seamless synchronization with your PLM, ERP, tracking dashboards, and customs portals.
            </p>
          </div>

        </div>

        {/* Center Bottom Pill CTA */}
        <div className="grace-pillars-footer">
          <button 
            type="button" 
            className="grace-pill-btn-translucent"
            onClick={onExploreSpecs}
          >
            Explore Manufacturing Specs <span aria-hidden="true">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
