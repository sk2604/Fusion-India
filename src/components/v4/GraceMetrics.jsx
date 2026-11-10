import React from 'react';
import './GraceMetrics.css';

export default function GraceMetrics({ onBookDemo }) {
  return (
    <section className="grace-metrics-section">
      <div className="container grace-metrics-container">
        
        {/* Top Header */}
        <div className="metrics-header">
          <span className="metrics-kicker">THE FUSION INDIA ADVANTAGE</span>
          <h2 className="metrics-title">
            The Right Product. The Right Price.<br />
            <em>The Right Performance.</em>
          </h2>
        </div>

        {/* 3 Giant Metric Pillars (Exact Grace Layout, Real Sourcing Metrics) */}
        <div className="metrics-triple-grid">
          
          <div className="metric-unit-card">
            <span className="metric-huge-number">15+</span>
            <span className="metric-unit-label">Years of disciplined global fashion sourcing & manufacturing</span>
          </div>

          <div className="metric-unit-card">
            <span className="metric-huge-number">500+</span>
            <span className="metric-unit-label">Audited Tier-1 mills with zero child labour & living wage guarantee</span>
          </div>

          <div className="metric-unit-card">
            <span className="metric-huge-number">72h</span>
            <span className="metric-unit-label">Physical master prototype cut and finished at our Gurugram campus</span>
          </div>

        </div>

        {/* Comparison Callout */}
        <div className="metrics-callout-row">
          <p className="callout-p">
            "We do not broker factories. We engineer the bridge between European design vision and audited ethical scale. 
            From initial CAD blueprint to finished container delivery worldwide."
          </p>

          <button 
            type="button" 
            className="callout-cta-btn"
            onClick={onBookDemo}
          >
            <span>REQUEST SOURCING CONSULTATION</span>
          </button>
        </div>

      </div>
    </section>
  );
}
