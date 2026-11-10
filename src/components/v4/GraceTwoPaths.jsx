import React from 'react';
import './GraceTwoPaths.css';

export default function GraceTwoPaths({ onSelectFOB, onSelectDDP, onRequestDeck }) {
  return (
    <section className="page-surface grace-two-paths-section" id="paths">
      <div className="grace-container grace-px grace-py">
        
        {/* Section Heading */}
        <h2 className="headline-large text-black">
          <span className="block">Direct FOB contract. </span>
          <span className="block">Or full DDP delivery.</span>
        </h2>
        
        <p className="body-large text-neutral-500 mt-5 max-w-[46ch]">
          Same Indian manufacturing excellence, two flexible models calibrated to European fashion houses and global D2C brands.
        </p>

        {/* 2 Column Image Cards */}
        <div className="grace-paths-grid">
          
          {/* Path 1: FOB */}
          <div className="grace-path-col">
            <div className="group grace-path-card" onClick={onSelectFOB}>
              <div className="grace-path-img-box aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop" 
                  alt="Direct FOB Sourcing" 
                  className="grace-path-img"
                />
              </div>
              <p className="label text-neutral-500 mt-6">DIRECT FOB CONTRACT</p>
              <h3 className="headline-medium text-black mt-2">
                Your team directs freight. We deliver to port.
              </h3>
              <p className="body-default text-neutral-500 mt-3 max-w-[46ch]">
                Full production oversight from our 40,000 sq.ft Gurugram campus. Handover at Mumbai / Delhi JNPT ports with verified AQL 1.5 inspection and lab certifications.
              </p>
              <p className="body-default font-medium text-black mt-4 grace-link-underline">
                Explore FOB Terms <span aria-hidden="true">→</span>
              </p>
            </div>
          </div>

          {/* Path 2: DDP */}
          <div className="grace-path-col">
            <div className="group grace-path-card" onClick={onSelectDDP}>
              <div className="grace-path-img-box aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop" 
                  alt="Full DDP Concierge" 
                  className="grace-path-img"
                />
              </div>
              <p className="label text-neutral-500 mt-6">FULL DDP CONCIERGE</p>
              <h3 className="headline-medium text-black mt-2">
                Delivered direct to your European warehouse.
              </h3>
              <p className="body-default text-neutral-500 mt-3 max-w-[46ch]">
                End-to-end management from yarn spinning to EU customs clearance, duty settlement, and palletized dock delivery into Germany, Scandinavia, and the UK.
              </p>
              <p className="body-default font-medium text-black mt-4 grace-link-underline">
                Explore DDP Terms <span aria-hidden="true">→</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar (Grace Format) */}
        <div className="grace-paths-bottom-bar">
          <p className="body-default text-neutral-500">
            Need 50,000+ units per season?{' '}
            <span 
              className="text-black font-medium underline underline-offset-4 cursor-pointer"
              onClick={onRequestDeck}
            >
              Annual Sourcing Frameworks <span aria-hidden="true">→</span>
            </span>
          </p>
          <button 
            type="button" 
            className="grace-pill-btn-black"
            onClick={onRequestDeck}
          >
            Request Sourcing Deck
          </button>
        </div>

      </div>
    </section>
  );
}
