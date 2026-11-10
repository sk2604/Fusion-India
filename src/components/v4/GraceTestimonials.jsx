import React, { useState } from 'react';
import './GraceTestimonials.css';

const testimonials = [
  {
    id: 1,
    quoteMuted1: 'For our European retail chain, we need continuous premium garment quality without batch deviations. With Fusion India, we have ',
    highlight1: 'accelerated sample approval by 60%',
    quoteMuted2: ' and achieved ',
    highlight2: '100% on-time container delivery',
    quoteMuted3: ' across 20+ countries.',
    author: 'Frederik Lind',
    role: 'Head of Sourcing & Global Supply, Nordic Apparel Group, Copenhagen'
  },
  {
    id: 2,
    quoteMuted1: 'Fusion India has become our core technical partner for tailored wool overcoats and denim, ',
    highlight1: 'from runway development to commercial container production',
    quoteMuted2: ', all backed by ',
    highlight2: 'audited Indian manufacturing',
    quoteMuted3: '.',
    author: 'Markus Weber',
    role: 'Director of Apparel Production, Sartorial Hamburg'
  },
  {
    id: 3,
    quoteMuted1: 'Their 40,000 sq.ft facility and in-house CAD lab fits naturally into our workflows. They ',
    highlight1: 'meet our strictest European social and chemical audits',
    quoteMuted2: ' while delivering ',
    highlight2: 'exceptional garment finishing',
    quoteMuted3: ' every season.',
    author: 'Helena Berg',
    role: 'VP Sourcing & Sustainability, Stockholm Fashion House'
  },
  {
    id: 4,
    quoteMuted1: 'With Fusion India, we didn’t just find another supplier; ',
    highlight1: 'we streamlined our entire Asian supply chain',
    quoteMuted2: '. We now have ',
    highlight2: 'direct factory communication with zero middleman friction',
    quoteMuted3: '.',
    author: 'Julian Vance',
    role: 'Managing Director, British Tailoring Guild, London'
  },
  {
    id: 5,
    quoteMuted1: 'From first tech pack to final container inspection, Fusion India operates with ',
    highlight1: 'faster turnaround than any trading agency',
    quoteMuted2: ' without ever compromising on ',
    highlight2: 'fabric hand-feel or construction standards',
    quoteMuted3: '.',
    author: 'Astrid Nielsen',
    role: 'Head of Production, Oslo Modern Studio'
  }
];

const partners = [
  'CARL GROSS',
  'CLUB OF GENTS',
  'MUSTANG JEANS',
  'MARC AUREL',
  'FALKE TAILORING',
  'NORDIC APPAREL'
];

export default function GraceTestimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = testimonials[activeIdx];

  return (
    <section className="page-surface grace-testimonials-section" id="testimonials">
      <div className="grace-container grace-px grace-py">
        
        {/* Brand Trust Header */}
        <div className="grace-testimonials-brand-row">
          <p className="label text-neutral-400">
            TRUSTED SOURCING PARTNER FOR
          </p>
          <div className="grace-brand-tags">
            {partners.map((p, i) => (
              <span key={i} className="grace-partner-logo">
                {p}
              </span>
            ))}
            <span className="caption text-neutral-400">and many more</span>
          </div>
        </div>

        {/* Large Testimonial Quote */}
        <div className="grace-quote-stage">
          <blockquote className="grace-blockquote">
            <p className="headline-medium max-w-[46ch]">
              „<span className="text-neutral-400">{current.quoteMuted1}</span>
              <span className="text-black font-medium">{current.highlight1}</span>
              <span className="text-neutral-400">{current.quoteMuted2}</span>
              <span className="text-black font-medium">{current.highlight2}</span>
              <span className="text-neutral-400">{current.quoteMuted3}</span>“
            </p>
          </blockquote>

          {/* Author Caption */}
          <p className="caption text-neutral-500 mt-6">
            <span className="text-black font-medium">{current.author}</span>, {current.role}
          </p>

          {/* 5 Slim Horizontal Progress Tabs */}
          <div className="grace-quote-tabs" role="tablist">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === activeIdx}
                className={`grace-quote-tab ${i === activeIdx ? 'active' : ''}`}
                onClick={() => setActiveIdx(i)}
              >
                <span className="grace-tab-line" />
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
