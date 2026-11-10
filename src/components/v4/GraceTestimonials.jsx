import React from 'react';
import './GraceTestimonials.css';

const clientLogos = [
  'ZARA', 'H&M GROUP', 'MANGO', 'COS', 'ACNE STUDIOS', 'TOMMY HILFIGER', 'ARKET'
];

const testimonials = [
  {
    quote: 'For our seasonal European collections and retail stores, we require impeccable fabric drape, strict ethical compliance, and reliable shipment timelines. With Fusion, we have',
    highlight: 'consistently received exceptional garment finishing and brought new seasonal ranges to market ahead of schedule',
    author: 'Felix Wolf',
    role: 'Head of Sourcing & Operations, European Retail Group'
  },
  {
    quote: 'Fusion is our trusted one-stop sourcing partner, delivering woven tailoring, fine silks, organic jerseys, and leather goods, all coordinated through',
    highlight: 'their central 40,000 sq.ft manufacturing and design campus in Gurugram, India',
    author: 'Astrid Lindqvist',
    role: 'Creative Buying Director, Nordic Fashion Alliance'
  },
  {
    quote: 'Working with Fusion eliminated the uncertainty of traditional factory brokers. Their transparent FOB pricing, local presence in Germany, and SEDEX audit verification gives us',
    highlight: 'absolute product security and uncompromised quality from yarn to container',
    author: 'Markus Weber',
    role: 'VP Global Supply Chain, Continental Brand Group'
  }
];

export default function GraceTestimonials() {
  return (
    <section className="grace-testimonials-section">
      <div className="container grace-test-container">
        
        {/* Head */}
        <div className="grace-test-head">
          <span className="test-kicker">EXECUTIVE TESTIMONIALS // INDUSTRY PARTNERSHIPS</span>
          <h2 className="test-title">
            Trusted by <em>Tier-1 European</em> buying houses.
          </h2>
        </div>

        {/* Client Logos Strip */}
        <div className="test-logos-bar">
          <span className="logos-label">PARTNERING WITH GLOBAL APPAREL BRANDS:</span>
          <div className="logos-row">
            {clientLogos.map((logo, i) => (
              <span key={i} className="client-logo-item">{logo}</span>
            ))}
          </div>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="test-cards-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="grace-quote-card">
              <span className="quote-mark">„</span>
              <p className="quote-body">
                {t.quote} <strong className="quote-bold">{t.highlight}</strong>.
              </p>
              <div className="quote-author-meta">
                <strong>{t.author}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
