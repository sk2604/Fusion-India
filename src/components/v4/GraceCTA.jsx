import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './GraceCTA.css';

export default function GraceCTA({ onOpenModal }) {
  return (
    <section className="grace-cta-section">
      <div className="container grace-cta-container">
        
        <div className="cta-frame">
          <span className="cta-kicker">FUSION INDIA // CAMPUS GURUGRAM</span>
          
          <h2 className="cta-huge-title">
            Your collection.<br />
            <em>Without limits.</em>
          </h2>

          <p className="cta-desc">
            From initial CAD blueprint to audited mass delivery across Scandinavia, Germany, and the USA. 
            Begin your production run with Fusion.
          </p>

          <div className="cta-action-row">
            <button 
              type="button" 
              className="cta-master-btn"
              onClick={onOpenModal}
            >
              <span>BOOK AN ATELIER SESSION</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="cta-meta-bar">
            <span>40,000 SQ.FT CAMPUS</span>
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
