import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhoWeAreV6.css';

gsap.registerPlugin(ScrollTrigger);

const deckCards = [
  {
    id: 1,
    label: 'PRINTS & PATTERNS ARCHIVE',
    num: '10K+',
    bg: '#111116',
    border: 'rgba(255, 255, 255, 0.1)',
    line: 'rgba(255, 255, 255, 0.18)',
    text: '#ffffff',
    labelColor: 'rgba(255, 255, 255, 0.65)'
  },
  {
    id: 2,
    label: 'YEARS OF TEXTILE HERITAGE',
    num: '30+',
    bg: '#171720',
    border: 'rgba(255, 255, 255, 0.14)',
    line: 'rgba(255, 255, 255, 0.22)',
    text: '#ffffff',
    labelColor: 'rgba(255, 255, 255, 0.75)'
  },
  {
    id: 3,
    label: 'GLOBAL COUNTRIES SERVED',
    num: '20+',
    bg: '#20202c',
    border: 'rgba(255, 255, 255, 0.18)',
    line: 'rgba(255, 255, 255, 0.26)',
    text: '#ffffff',
    labelColor: 'rgba(255, 255, 255, 0.85)'
  },
  {
    id: 4,
    label: 'ANNUAL APPAREL CAPACITY',
    num: '12M+',
    bg: '#2b1218',
    border: 'rgba(229, 9, 20, 0.35)',
    line: 'rgba(229, 9, 20, 0.32)',
    text: '#ffffff',
    labelColor: 'rgba(255, 255, 255, 0.9)'
  },
  {
    id: 5,
    label: 'AUDITED TIER-1 FACTORIES',
    num: '500+',
    bg: '#e50914',
    border: 'rgba(255, 255, 255, 0.35)',
    line: 'rgba(255, 255, 255, 0.38)',
    text: '#ffffff',
    labelColor: '#ffffff'
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

    const mm = gsap.matchMedia();

    mm.add('(min-width: 960px)', () => {
      // Pinned GSAP ScrollTrigger timeline matching Davaris exact interaction
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=1600',
          pin: true,
          anticipatePin: 1,
          scrub: 0.6,
        }
      });

      // Card 0 starts at top: 0
      // Cards 1 through 4 slide up from bottom and stack on top with 54px tab exposure
      cards.forEach((card, idx) => {
        if (idx === 0) return;
        tl.fromTo(card,
          { y: 550, opacity: 1 },
          { y: 0, opacity: 1, duration: 1, ease: 'power1.out' },
          (idx - 1) * 0.85
        );
      });

      // Smooth hold at end before unpinning
      tl.to({}, { duration: 0.35 });
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="v6-page-surface-dark v6-who-section" id={id} ref={sectionRef} data-nav-theme="dark">
      <div className="v6-who-container">
        
        <div className="v6-who-grid">
          
          {/* ─── LEFT COLUMN: EXACT SIZE & MINIMALIST EDITORIAL (DAVARIS STYLE) ─── */}
          <div className="v6-who-col-left">
            
            <div className="v6-who-eyebrow">
              <span className="v6-who-red-dot" />
              <span>WHO WE ARE</span>
            </div>

            <h2 className="v6-who-title">
              A leading creative partner of the global fashion industry, we stand beside our clients to help them succeed.
            </h2>

            <button 
              type="button" 
              className="v6-who-cta-btn"
              onClick={onOpenDrawer}
            >
              REQUEST SAMPLES ↗
            </button>

          </div>

          {/* ─── RIGHT COLUMN: EXACT SIZE STACKING CARDS DECK ─── */}
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
                    top: `${idx * 54}px`
                  }}
                >
                  {/* Top Hairline Divider */}
                  <div 
                    className="v6-who-card-hairline" 
                    style={{ backgroundColor: card.line }} 
                  />

                  {/* Monospace Uppercase Label */}
                  <div className="v6-who-card-label" style={{ color: card.labelColor }}>
                    {card.label}
                  </div>

                  {/* Monumental Left-Aligned Number */}
                  <div className="v6-who-card-number">
                    {card.num}
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
