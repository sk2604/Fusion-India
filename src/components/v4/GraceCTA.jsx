import React from 'react';
import { ArrowRight } from 'lucide-react';
import './GraceCTA.css';

export default function GraceCTA({ onOpenModal }) {
  return (
    <section className="grace-cta-section">
      <div className="container grace-cta-container">
        
        <div className="cta-frame">
          <span className="cta-kicker">FUSION INDIA // CAMPUS GURUGRAM</span>
          
          <h2 className="cta-huge-title">
            Your collection.<br />
            <em>Manufactured with discipline.</em>
          </h2>

          <p className="cta-desc">
            From initial CAD blueprint to audited mass container delivery across Scandinavia, Germany, and the USA. 
            Connect directly with our Chief Sourcing Team.
          </p>

          <div className="cta-action-row">
            <button 
              type="button" 
              className="cta-master-btn"
              onClick={onOpenModal}
            >
              <span>REQUEST SOURCING INTAKE</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="cta-meta-bar">
            <span>40,000 SQ.FT GURUGRAM CAMPUS</span>
            <span>•</span>
            <span>500+ AUDITED MILLS</span>
            <span>•</span>
            <span>RIGHT PRODUCT, RIGHT PRICE, RIGHT PERFORMANCE</span>
          </div>
        </div>

      </div>
    </section>
  );
}
