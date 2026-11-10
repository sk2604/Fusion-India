import React from 'react';
import { ArrowRight, Cpu, Factory, Check } from 'lucide-react';
import './GraceTwoPaths.css';

export default function GraceTwoPaths({ onSelectService, onSelectDigital }) {
  return (
    <section className="two-paths-section">
      <div className="container two-paths-container">
        
        {/* Header */}
        <div className="two-paths-head">
          <span className="two-paths-kicker">TWO WAYS TO ENGAGE // FLEXIBLE SCALE</span>
          <h2 className="two-paths-title">
            Do it yourself. <em>Or let us produce.</em>
          </h2>
          <p className="two-paths-sub">
            The same industrial-grade engineering, two ways: Your design team utilizes our digital atelier software, 
            or our Gurugram manufacturing campus handles your entire collection from yarn to container.
          </p>
        </div>

        {/* 2 Big Split Cards */}
        <div className="two-paths-grid">
          
          {/* Card A: Digital Atelier */}
          <div className="path-card path-card-digital">
            <div className="path-badge">
              <Cpu size={14} />
              <span>DIGITAL SPECIFICATION</span>
            </div>

            <div className="path-main">
              <h3>Your team designs & validates.</h3>
              <p>
                Upload CAD flatlays, tech packs, or CLO 3D files. Validate tensile drape, seam tolerance, 
                and marker yield in minutes. Export production-ready specs directly to Tier-1 mills.
              </p>

              <ul className="path-features">
                <li><Check size={14} /> 3D Digital Avatar Drape Simulation</li>
                <li><Check size={14} /> Automated Zero-Waste Marker Grading</li>
                <li><Check size={14} /> Real-Time FOB Cost Estimations</li>
              </ul>
            </div>

            <button 
              type="button" 
              className="path-action-btn"
              onClick={onSelectDigital}
            >
              <span>EXPLORE DIGITAL ATELIER</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Card B: End-to-End Manufacturing */}
          <div className="path-card path-card-service">
            <div className="path-badge highlight-badge">
              <Factory size={14} />
              <span>FULL-SERVICE SOURCING</span>
            </div>

            <div className="path-main">
              <h3>We produce & deliver for you.</h3>
              <p>
                Send us your design brief. We engineer prototypes in our 40,000 sq.ft Gurugram facility, 
                manufacture across 500+ audited mills, and manage sea/air logistics right to your warehouse.
              </p>

              <ul className="path-features">
                <li><Check size={14} /> 72-Hour Physical Master Prototype</li>
                <li><Check size={14} /> 100% Inline AQL 1.5 Quality Inspection</li>
                <li><Check size={14} /> Door-to-Door Delivery in Europe & USA</li>
              </ul>
            </div>

            <button 
              type="button" 
              className="path-action-btn path-btn-highlight"
              onClick={onSelectService}
            >
              <span>REQUEST ATELIER INTAKE</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
