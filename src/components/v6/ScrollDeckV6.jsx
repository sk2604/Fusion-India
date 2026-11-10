import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollDeckV6.css';

gsap.registerPlugin(ScrollTrigger);

const deckCards = [
  {
    id: 1,
    left: 'Campaigns',
    right: 'with attitude.',
    tag: 'DIVISION 01 // ATELIER COATS',
    sub: 'Double-face virgin wool, tailored canvas construction, horn hardware.',
    img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 2,
    left: 'Lookbooks',
    right: 'all of one piece.',
    tag: 'DIVISION 02 // SOURCING SUITE',
    sub: 'From denim and heavy loopback to bespoke leather goods and silk.',
    isGrid: true,
    gridImages: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop'
    ]
  },
  {
    id: 3,
    left: 'Product runs,',
    right: 'who sell.',
    tag: 'DIVISION 03 // SCALED PRODUCTION',
    sub: '100% factory calibration across 50,000+ unit European delivery.',
    img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function ScrollDeckV6({ id = 'deck', onSelectCard }) {
  const sectionRef = useRef(null);
  const [activeCardIdx, setActiveCardIdx] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top top',
        end: '+=2000',
        pin: true,
        anticipatePin: 1,
        scrub: 0.5,
        onUpdate: (self) => {
          const p = self.progress;
          if (p >= 0.66) {
            setActiveCardIdx(2);
          } else if (p >= 0.33) {
            setActiveCardIdx(1);
          } else {
            setActiveCardIdx(0);
          }
        }
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const currentCard = deckCards[activeCardIdx];

  return (
    <section className="v6-deck-section" id={id} ref={sectionRef}>
      <div className="v6-container v6-px v6-deck-inner">
        
        {/* Centered Top Eyebrow Headline (matching frame 00:04 in video) */}
        <div className="v6-deck-header-box">
          <h2 className="v6-deck-headline">
            You design what the world wears. We build it.
          </h2>
        </div>

        {/* 3-Part Flanking Layout Pinned by GSAP (matching frames 00:07-00:11) */}
        <div className="v6-deck-flanking-stage">
          <div className="v6-deck-flanking-grid">
            
            {/* Left Flank Word */}
            <div className="v6-deck-flank v6-flank-left">
              <span className="v6-deck-flank-word">
                {currentCard.left}
              </span>
            </div>

            {/* Center Square Photo with Crossfade */}
            <div className="v6-deck-card-wrap">
              <div 
                className="v6-deck-photo-card"
                onClick={() => onSelectCard && onSelectCard(currentCard)}
                role="button"
                tabIndex={0}
              >
                {deckCards.map((card, i) => (
                  <div 
                    key={card.id} 
                    className={`v6-deck-photo-layer ${i === activeCardIdx ? 'active' : ''}`}
                  >
                    {card.isGrid ? (
                      <div className="v6-deck-inner-grid">
                        {card.gridImages.map((src, gIdx) => (
                          <img 
                            key={gIdx} 
                            src={src} 
                            alt={`Look ${gIdx + 1}`} 
                            className="v6-grid-quarter" 
                          />
                        ))}
                      </div>
                    ) : (
                      <img 
                        src={card.img} 
                        alt={card.left}
                        className="v6-deck-photo-img"
                      />
                    )}
                  </div>
                ))}
                <span className="v6-deck-badge">{currentCard.tag}</span>
              </div>

              {/* Step Indicator Bars (matching 3 dots in video) */}
              <div className="v6-deck-dots-bar">
                {deckCards.map((_, i) => (
                  <span 
                    key={i} 
                    className={`v6-deck-dot-line ${i === activeCardIdx ? 'active' : ''}`} 
                  />
                ))}
              </div>
            </div>

            {/* Right Flank Word */}
            <div className="v6-deck-flank v6-flank-right">
              <span className="v6-deck-flank-word">
                {currentCard.right}
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
