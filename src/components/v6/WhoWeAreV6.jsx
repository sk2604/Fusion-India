import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhoWeAreV6.css';

gsap.registerPlugin(ScrollTrigger);

const deckCards = [
  {
    id: 1,
    tag: 'HERITAGE & SOURCING',
    label: 'YEARS OF APPAREL HERITAGE',
    num: '30+',
    sub: 'ESTABLISHED 1998 // GURUGRAM HQ',
    desc: 'Three decades of precision manufacturing for Europe and North America’s premier luxury and contemporary fashion houses.',
    bg: '#ffffff',
    text: '#111116',
    border: 'rgba(0, 0, 0, 0.1)'
  },
  {
    id: 2,
    tag: 'AUDITED MILL NETWORK',
    label: 'TIER-1 AUDITED ATELIERS',
    num: '500+',
    sub: 'SEDEX, BSCI & GOTS CERTIFIED',
    desc: 'Fully traceable, socially audited partner mills delivering ethical volume output across 6 dedicated divisions.',
    bg: '#f6ede6',
    text: '#111116',
    border: 'rgba(0, 0, 0, 0.08)'
  },
  {
    id: 3,
    tag: 'SAMPLING VELOCITY',
    label: 'RAPID PROTOTYPE TURNAROUND',
    num: '14 DAYS',
    sub: 'TECH PACK TO APPROVED GOLDEN SEAL',
    desc: '40,000 sq.ft sampling campus with high-precision Gerber CAD marker grading and dedicated master pattern rooms.',
    bg: '#f2cebc',
    text: '#111116',
    border: 'rgba(0, 0, 0, 0.08)'
  },
  {
    id: 4,
    tag: 'ANNUAL VOLUME CAPACITY',
    label: 'ANNUAL APPAREL CAPACITY',
    num: '12M+',
    sub: 'UNITS CRAFTED FOR GLOBAL RETAIL',
    desc: 'High-capacity volume production calibrated across tailored outerwear, fine suits, circular organic denim, and knitwear.',
    bg: '#ea815b',
    text: '#ffffff',
    border: 'rgba(255, 255, 255, 0.2)'
  },
  {
    id: 5,
    tag: 'ZERO QUALITY COMPROMISE',
    label: 'EUROPEAN QA TOLERANCE',
    num: 'AQL 1.5',
    sub: 'ZERO-BATCH VARIANCE INSPECTION',
    desc: 'Full in-house physical & chemical testing labs: yarn tensile, color fastness, seam torque, and batch certification.',
    bg: '#d64d25',
    text: '#ffffff',
    border: 'rgba(255, 255, 255, 0.25)'
  }
];

export default function WhoWeAreV6({ id = 'who-we-are', onOpenDrawer }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addToCards = (el) => {
    if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el);
  };

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || cards.length === 0) return;

    const ctx = gsap.context(() => {
      // Pinned ScrollTrigger scrubbing timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=2000',
          pin: true,
          anticipatePin: 1,
          scrub: 0.6,
        }
      });

      // Card 0 is already at top: 0
      // Cards 1 through 4 slide up from bottom and stack on top of previous cards
      cards.forEach((card, idx) => {
        if (idx === 0) return;
        tl.fromTo(card,
          { yPercent: 125, opacity: 0.9 },
          { yPercent: 0, opacity: 1, duration: 1, ease: 'none' },
          (idx - 1) * 0.95
        );
      });

      // Brief hold at end for full stack appreciation
      tl.to({}, { duration: 0.4 });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="v6-page-surface-white v6-who-section" id={id} ref={sectionRef} data-nav-theme="light">
      <div className="v6-who-container">
        
        <div className="v6-who-grid">
          
          {/* ─── LEFT COLUMN: STICKY EDITORIAL MANIFESTO ─── */}
          <div className="v6-who-col-left">
            
            <div className="v6-who-eyebrow">
              <span className="v6-who-red-dot" />
              <span>WHO WE ARE</span>
            </div>

            <h2 className="v6-who-title">
              A leading creative partner of the global fashion industry, we stand beside our clients to help them succeed.
            </h2>

            <p className="v6-who-desc">
              Three decades of Indian atelier craftsmanship engineered for European and North American retail conglomerates. Direct mill sourcing, zero middleman agency markups, and dedicated Gurugram sampling velocity.
            </p>

            <button 
              type="button" 
              className="v6-who-cta-btn"
              onClick={onOpenDrawer}
            >
              REQUEST SAMPLES ↗
            </button>

          </div>

          {/* ─── RIGHT COLUMN: STACKING DECK OF CARDS (DAVARIS STYLE) ─── */}
          <div className="v6-who-col-right">
            <div className="v6-who-deck-stage">
              {deckCards.map((card, idx) => (
                <div
                  key={card.id}
                  ref={addToCards}
                  className="v6-who-card"
                  style={{
                    backgroundColor: card.bg,
                    color: card.text,
                    border: `1px solid ${card.border}`,
                    zIndex: idx + 1,
                    top: `${idx * 44}px`
                  }}
                >
                  {/* Top Header Tab (Visible in stacked state) */}
                  <div className="v6-who-card-tab">
                    <span className="v6-who-card-label">{card.label}</span>
                    <span className="v6-who-card-tag">{card.tag}</span>
                  </div>

                  <div 
                    className="v6-who-card-hairline" 
                    style={{ 
                      backgroundColor: card.text === '#ffffff' ? 'rgba(255, 255, 255, 0.22)' : 'rgba(0, 0, 0, 0.1)' 
                    }} 
                  />

                  {/* Card Body */}
                  <div className="v6-who-card-content">
                    <div className="v6-who-card-number">{card.num}</div>
                    <div className="v6-who-card-sub">{card.sub}</div>
                    <p className="v6-who-card-desc">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
