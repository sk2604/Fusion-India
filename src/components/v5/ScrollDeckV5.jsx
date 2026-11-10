import React, { useRef, useState, useEffect } from 'react';
import './ScrollDeckV5.css';

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
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 3,
    left: 'Product runs,',
    right: 'who sell.',
    tag: 'DIVISION 03 // SCALED PRODUCTION',
    sub: '100% factory calibration across 50,000+ unit European delivery.',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function ScrollDeckV5({ id = 'deck', onSelectCard }) {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const current = -rect.top;
      const p = Math.min(Math.max(current / totalScrollable, 0), 1);
      setScrollProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Phase 1: Headline visible at start (0.00 -> 0.22)
  const headlineOpacity = scrollProgress < 0.22 ? 1 - scrollProgress * 3.5 : 0;
  const headlineY = scrollProgress * 60;

  // Phase 2: 3 Cards progression (0.18 -> 1.00)
  // 0.18 - 0.48: Card 0
  // 0.48 - 0.74: Card 1
  // 0.74 - 1.00: Card 2
  let activeCardIdx = 0;
  if (scrollProgress >= 0.74) {
    activeCardIdx = 2;
  } else if (scrollProgress >= 0.48) {
    activeCardIdx = 1;
  } else {
    activeCardIdx = 0;
  }

  const currentCard = deckCards[activeCardIdx];
  const cardsVisible = scrollProgress >= 0.12;
  const cardsOpacity = Math.min(1, (scrollProgress - 0.12) * 5);

  return (
    <section className="v5-deck-scroll-wrapper" id={id} ref={containerRef}>
      <div className="v5-deck-sticky">
        <div className="v5-container v5-px v5-deck-inner">
          
          {/* Centered Initial Statement (matching frame 00:04 in video) */}
          <div 
            className="v5-deck-headline-box"
            style={{ 
              opacity: headlineOpacity,
              transform: `translateY(-${headlineY}px)`,
              pointerEvents: headlineOpacity > 0.1 ? 'auto' : 'none'
            }}
          >
            <h2 className="headline-xl text-black text-center">
              You design what the world wears. We build it.
            </h2>
          </div>

          {/* 3-Part Flanking Layout Driven by Scroll (matching frames 00:07-00:11) */}
          <div 
            className="v5-deck-flanking-stage"
            style={{ 
              opacity: cardsVisible ? cardsOpacity : 0,
              transform: `scale(${0.96 + cardsOpacity * 0.04})`
            }}
          >
            <div className="v5-deck-flanking-grid">
              
              {/* Left Flank Word */}
              <div className="v5-deck-flank v5-flank-left">
                <span className="v5-deck-flank-word">
                  {currentCard.left}
                </span>
              </div>

              {/* Center Square Photo with Crossfade */}
              <div className="v5-deck-card-wrap">
                <div 
                  className="v5-deck-photo-card"
                  onClick={() => onSelectCard && onSelectCard(currentCard)}
                >
                  {deckCards.map((card, i) => (
                    <img 
                      key={card.id}
                      src={card.img} 
                      alt={card.left}
                      className={`v5-deck-photo-img ${i === activeCardIdx ? 'active' : ''}`}
                    />
                  ))}
                  <span className="v5-deck-badge">{currentCard.tag}</span>
                </div>

                {/* Step Dots */}
                <div className="v5-deck-dots-bar">
                  {deckCards.map((_, i) => (
                    <span 
                      key={i} 
                      className={`v5-deck-dot-line ${i === activeCardIdx ? 'active' : ''}`} 
                    />
                  ))}
                </div>
              </div>

              {/* Right Flank Word */}
              <div className="v5-deck-flank v5-flank-right">
                <span className="v5-deck-flank-word">
                  {currentCard.right}
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
