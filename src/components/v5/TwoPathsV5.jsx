import React from 'react';
import './TwoPathsV5.css';

export default function TwoPathsV5({ id = 'paths', onSelectFOB, onSelectDDP, onRequestDeck }) {
  return (
    <section className="v5-page-surface-white v5-paths-section" id={id}>
      <div className="v5-container v5-px v5-paths-container">
        
        {/* Top Headline matching 00:27 in video */}
        <div className="v5-paths-header">
          <h2 className="v5-paths-title">
            <span className="v5-title-line">Direct FOB.</span>
            <span className="v5-title-line">Or have it done for you.</span>
          </h2>
          <p className="body-large text-neutral-500 mt-4 max-w-[46ch]">
            Same Indian manufacturing excellence, two flexible models: Your team directs freight, or we deliver duty-paid to your European distribution center.
          </p>
        </div>

        {/* 2 Big Square Cards matching 00:28-00:29 in video */}
        <div className="v5-paths-grid">
          
          {/* Card 1: FOB */}
          <div className="v5-path-col">
            <div className="group v5-path-card" onClick={onSelectFOB} role="button" tabIndex={0}>
              <div className="v5-path-img-wrap aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop" 
                  alt="Direct FOB Sourcing" 
                  className="v5-path-img"
                />
              </div>
              <p className="label text-neutral-400 mt-6">FOB DIRECT</p>
              <h3 className="v5-path-card-title text-black mt-2">
                Your team directs freight.
              </h3>
              <p className="body-default text-neutral-500 mt-3 max-w-[44ch]">
                Full production oversight from our 40,000 sq.ft Gurugram campus. Handover at Mumbai / Delhi JNPT ports with verified AQL 1.5 inspection and lab certifications.
              </p>
              <p className="body-default font-medium text-black mt-4 v5-link-underline">
                Explore FOB terms <span aria-hidden="true">→</span>
              </p>
            </div>
          </div>

          {/* Card 2: DDP */}
          <div className="v5-path-col">
            <div className="group v5-path-card" onClick={onSelectDDP} role="button" tabIndex={0}>
              <div className="v5-path-img-wrap aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop" 
                  alt="Full DDP Concierge" 
                  className="v5-path-img"
                />
              </div>
              <p className="label text-neutral-400 mt-6">FULL DDP CONCIERGE</p>
              <h3 className="v5-path-card-title text-black mt-2">
                We produce & deliver for you.
              </h3>
              <p className="body-default text-neutral-500 mt-3 max-w-[44ch]">
                You send us tech packs and briefing. We handle yarn spinning, EU customs clearance, duty settlement, and palletized dock delivery direct to your European warehouse.
              </p>
              <p className="body-default font-medium text-black mt-4 v5-link-underline">
                Go to service <span aria-hidden="true">→</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar matching 00:30 in video */}
        <div className="v5-paths-bottom-bar">
          <p className="body-default text-neutral-500">
            Hundreds of styles per season?{' '}
            <span 
              className="text-black font-medium underline underline-offset-4 cursor-pointer"
              onClick={onRequestDeck}
              role="button"
              tabIndex={0}
            >
              E-commerce & retail production <span aria-hidden="true">→</span>
            </span>
          </p>
          <button 
            type="button" 
            className="v5-pill-btn-black"
            onClick={onRequestDeck}
          >
            Book a demo
          </button>
        </div>

      </div>
    </section>
  );
}
