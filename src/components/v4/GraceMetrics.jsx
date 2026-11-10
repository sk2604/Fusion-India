import React from 'react';
import './GraceMetrics.css';

export default function GraceMetrics({ onBookAudit }) {
  return (
    <section className="page-surface grace-metrics-section" id="metrics">
      <div className="grace-container grace-px grace-py">
        
        {/* Giant Headline */}
        <h2 className="headline-xl max-w-[18ch] text-black">
          Direct manufacturer. Zero agent markup.
        </h2>

        {/* 3 Metric Columns with Top Border */}
        <div className="grace-metrics-grid">
          
          <div className="grace-metric-col">
            <div className="grace-metric-border">
              <p className="headline-large tabular-nums text-black">
                35 %
              </p>
              <p className="body-large mt-2 text-neutral-500">
                savings vs third-party trading agencies
              </p>
            </div>
          </div>

          <div className="grace-metric-col">
            <div className="grace-metric-border">
              <p className="headline-large tabular-nums text-black">
                100 %
              </p>
              <p className="body-large mt-2 text-neutral-500">
                audited social & environmental compliance
              </p>
            </div>
          </div>

          <div className="grace-metric-col">
            <div className="grace-metric-border">
              <p className="headline-large tabular-nums text-black">
                14 Days
              </p>
              <p className="body-large mt-2 text-neutral-500">
                prototype turnaround from tech pack
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Explainer & CTA */}
        <div className="grace-metrics-bottom-bar">
          <p className="body-large max-w-[46ch] text-neutral-500">
            Traditional buying agencies add 3 layers of middleman margin and weeks of communication friction. We build direct from our Gurugram campus to your distribution hubs.
          </p>
          <button 
            type="button" 
            className="grace-pill-btn-black"
            onClick={onBookAudit}
          >
            Schedule Factory Audit
          </button>
        </div>

      </div>
    </section>
  );
}
