import React from 'react';
import './MetricsV5.css';

export default function MetricsV5({ id = 'metrics', onBookDemo }) {
  return (
    <section className="v5-page-surface-white v5-metrics-section" id={id}>
      <div className="v5-container v5-px v5-metrics-container">
        
        {/* Headline matching 00:31 in video */}
        <h2 className="headline-xl max-w-[18ch] text-black">
          <span className="block">The same luxury quality.</span>
          <span className="block">One third of the cost.</span>
        </h2>

        {/* 3 Metric Columns with Thin Top Divider Lines */}
        <div className="v5-metrics-grid">
          
          <div className="v5-metric-col">
            <div className="v5-metric-divider">
              <p className="headline-large tabular-nums text-black">
                35 %
              </p>
              <p className="body-large mt-2 text-neutral-500">
                under third-party trading agencies
              </p>
            </div>
          </div>

          <div className="v5-metric-col">
            <div className="v5-metric-divider">
              <p className="headline-large tabular-nums text-black">
                100 %
              </p>
              <p className="body-large mt-2 text-neutral-500">
                brand-compliant & audited
              </p>
            </div>
          </div>

          <div className="v5-metric-col">
            <div className="v5-metric-divider">
              <p className="headline-large tabular-nums text-black">
                14 Days
              </p>
              <p className="body-large mt-2 text-neutral-500">
                prototype turnaround
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Explainer & CTA matching 00:32 in video */}
        <div className="v5-metrics-bottom-bar">
          <p className="body-large max-w-[46ch] text-neutral-500">
            Traditional buying agencies add 3 layers of middleman markup and 4 weeks of planning delay. Here, the entire production run is calibrated direct at our Gurugram campus.
          </p>
          <button 
            type="button" 
            className="v5-pill-btn-black"
            onClick={onBookDemo}
          >
            Book a demo
          </button>
        </div>

      </div>
    </section>
  );
}
