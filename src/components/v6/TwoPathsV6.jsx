import React from 'react';
import './TwoPathsV6.css';

export default function TwoPathsV6({ id = 'paths', onSelectFOB, onSelectDDP, onRequestDeck }) {
  return (
    <section className="v6-page-surface-white v6-paths-section" id={id} data-nav-theme="light">
      <div className="v6-container v6-px v6-paths-container">
        
        {/* Top Headline matching 00:27 in video */}
        <div className="v6-paths-header">
          <h2 className="v6-paths-title">
            <span className="v6-title-line">Direct FOB.</span>
            <span className="v6-title-line">Or have it done for you.</span>
          </h2>
          <p className="v6-paths-desc">
            Same Indian manufacturing excellence, two flexible models: Your team directs freight, or we deliver duty-paid to your European distribution center.
          </p>
        </div>

        {/* 2 Big Cards matching 00:28-00:29 in video */}
        <div className="v6-paths-grid">
          
          {/* Card 1: FOB */}
          <div className="v6-path-col">
            <div className="group v6-path-card" onClick={onSelectFOB} role="button" tabIndex={0}>
              <div className="v6-path-img-wrap">
                <img 
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Direct FOB Sourcing" 
                  className="v6-path-img"
                  data-pin-nopin="true"
                  data-pin-no-hover="true"
                />
              </div>
              <p className="v6-path-tag">FOB DIRECT</p>
              <h3 className="v6-path-card-title">
                Your team directs freight.
              </h3>
              <p className="v6-path-body">
                Full production oversight from our 40,000 sq.ft Gurugram campus. Handover at Mumbai / Delhi JNPT ports with verified AQL 1.5 inspection.
              </p>
              <p className="v6-link-underline">
                Explore FOB terms <span aria-hidden="true">→</span>
              </p>
            </div>
          </div>

          {/* Card 2: DDP */}
          <div className="v6-path-col">
            <div className="group v6-path-card" onClick={onSelectDDP} role="button" tabIndex={0}>
              <div className="v6-path-img-wrap">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop" 
                  alt="Full DDP Concierge" 
                  className="v6-path-img"
                  data-pin-nopin="true"
                  data-pin-no-hover="true"
                />
              </div>
              <p className="v6-path-tag">FULL DDP CONCIERGE</p>
              <h3 className="v6-path-card-title">
                We produce & deliver for you.
              </h3>
              <p className="v6-path-body">
                You send us tech packs and briefing. We handle yarn spinning, EU customs clearance, duty settlement, and palletized dock delivery direct to your European warehouse.
              </p>
              <p className="v6-link-underline">
                Go to service <span aria-hidden="true">→</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar matching 00:30 in video */}
        <div className="v6-paths-bottom-bar">
          <p>
            Hundreds of styles per season?{' '}
            <span 
              className="text-black font-medium underline underline-offset-4 cursor-pointer"
              onClick={onRequestDeck}
              role="button"
              tabIndex={0}
            >
              Request our Complete Sourcing Playbook →
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
