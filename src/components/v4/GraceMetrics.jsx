import React from 'react';
import './GraceMetrics.css';

export default function GraceMetrics({ onBookDemo }) {
  return (
    <section className="grace-metrics-section">
      <div className="container grace-metrics-container">
        
        {/* Top Header */}
        <div className="metrics-header">
          <span className="metrics-kicker">EFFICIENCY ARCHITECTURE</span>
          <h2 className="metrics-title">
            The same global collection.<br />
            <em>One-fifth of the turnaround time.</em>
          </h2>
        </div>

        {/* 3 Giant Metric Pillars (Exact Grace Layout) */}
        <div className="metrics-triple-grid">
          
          <div className="metric-unit-card">
            <span className="metric-huge-number">80%</span>
            <span className="metric-unit-label">Reduction in sampling freight & physical iteration cycles</span>
          </div>

          <div className="metric-unit-card">
            <span className="metric-huge-number">100%</span>
            <span className="metric-unit-label">Audited ethical trading (SEDEX, BSCI, GOTS certified mills)</span>
          </div>

          <div className="metric-unit-card">
            <span className="metric-huge-number">72h</span>
            <span className="metric-unit-label">Master physical prototype ready from our Gurugram campus</span>
          </div>

        </div>

        {/* Comparison Callout */}
        <div className="metrics-callout-row">
          <p className="callout-p">
            Traditional sourcing brokers require 6 to 8 weeks of courier back-and-forth and steep margin markups. 
            Fusion engineers your master physical sample in days and scales seamlessly to volume production.
          </p>

          <button 
            type="button" 
            className="callout-cta-btn"
            onClick={onBookDemo}
          >
            <span>BOOK ATELIER SESSION</span>
          </button>
        </div>

      </div>
    </section>
  );
}
