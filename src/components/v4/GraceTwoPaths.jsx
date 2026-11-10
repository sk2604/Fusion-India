import React from 'react';
import { ArrowRight, Scissors, Factory, Check } from 'lucide-react';
import './GraceTwoPaths.css';

export default function GraceTwoPaths({ onSelectService, onSelectDigital }) {
  return (
    <section className="two-paths-section">
      <div className="container two-paths-container">
        
        {/* Header */}
        <div className="two-paths-head">
          <span className="two-paths-kicker">FLEXIBLE SOURCING ENGAGEMENT // SCALE ON DEMAND</span>
          <h2 className="two-paths-title">
            Capsule prototyping. <em>Or full enterprise volume.</em>
          </h2>
          <p className="two-paths-sub">
            Whether you need a rapid 72-hour physical master sample for runway review or 50,000 units delivered 
            to European distribution centers, Fusion executes with zero-compromise precision.
          </p>
        </div>

        {/* 2 Big Split Cards */}
        <div className="two-paths-grid">
          
          {/* Card A: Rapid Prototyping & Capsule Runs */}
          <div className="path-card path-card-digital">
            <div className="path-badge">
              <Scissors size={14} />
              <span>CAPSULE & SAMPLING</span>
            </div>

            <div className="path-main">
              <h3>Rapid Atelier Prototyping.</h3>
              <p>
                Send us your design sketches, tech packs, or physical swatches. Our 40,000 sq.ft Gurugram 
                sample room cuts, fits, and finishes your master proto within 72 hours.
              </p>

              <ul className="path-features">
                <li><Check size={14} /> 72-Hour Physical Master Prototype</li>
                <li><Check size={14} /> Agile Capsule MOQs (150 – 500 pcs)</li>
                <li><Check size={14} /> Precision Pattern Grading & Fabric Shrinkage Testing</li>
              </ul>
            </div>

            <button 
              type="button" 
              className="path-action-btn"
              onClick={onSelectDigital}
            >
              <span>REQUEST ATELIER SWATCHES</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Card B: Enterprise Volume & Audited Scale */}
          <div className="path-card path-card-service">
            <div className="path-badge highlight-badge">
              <Factory size={14} />
              <span>MASS PRODUCTION SCALE</span>
            </div>

            <div className="path-main">
              <h3>Enterprise Manufacturing at Scale.</h3>
              <p>
                Full industrial capacity across 500+ SEDEX, BSCI, and GOTS-certified Tier-1 mills. 
                Complete inline quality management with direct air and sea container freight to Europe and USA.
              </p>

              <ul className="path-features">
                <li><Check size={14} /> Volume Capacity (2,500 – 50,000+ units)</li>
                <li><Check size={14} /> 100% Inline AQL 1.5 Quality Guarantee</li>
                <li><Check size={14} /> DDP Customs Clearance into Germany, Scandinavia, & USA</li>
              </ul>
            </div>

            <button 
              type="button" 
              className="path-action-btn path-btn-highlight"
              onClick={onSelectService}
            >
              <span>SUBMIT PRODUCTION BRIEF</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
