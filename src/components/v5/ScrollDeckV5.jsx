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
    // Lookbook grid of 4 images matching frame 00:09 in reference video
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

  // 3 Cards progression driven cleanly by scroll
  // 0.00 - 0.35: Card 0 (Campaigns with attitude)
  // 0.35 - 0.68: Card 1 (Lookbooks all of one piece)
  // 0.68 - 1.00: Card 2 (Product runs, who sell)
  let activeCardIdx = 0;
  if (scrollProgress >= 0.68) {
    activeCardIdx = 2;
  } else if (scrollProgress >= 0.35) {
    activeCardIdx = 1;
  } else {
    activeCardIdx = 0;
  }

  const currentCard = deckCards[activeCardIdx];

  return (
    <section className="v5-deck-scroll-wrapper" id={id} ref={containerRef}>
      <div className="v5-deck-sticky">
        <div className="v5-container v5-px v5-deck-inner">
          
          {/* Centered Top Eyebrow Headline (matching frame 00:04 in video) */}
          <div className="v5-deck-header-box">
            <h2 className="v5-deck-headline">
              You design what the world wears. We build it.
            </h2>
          </div>

          {/* 3-Part Flanking Layout Always Visible with Active Card (matching frames 00:07-00:11) */}
          <div className="v5-deck-flanking-stage">
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
                  role="button"
                  tabIndex={0}
                >
                  {deckCards.map((card, i) => (
                    <div 
                      key={card.id} 
                      className={`v5-deck-photo-layer ${i === activeCardIdx ? 'active' : ''}`}
                    >
                      {card.isGrid ? (
                        <div className="v5-deck-inner-grid">
                          {card.gridImages.map((src, gIdx) => (
                            <img 
                              key={gIdx} 
                              src={src} 
                              alt={`Look ${gIdx + 1}`} 
                              className="v5-grid-quarter" 
                            />
                          ))}
                        </div>
                      ) : (
                        <img 
                          src={card.img} 
                          alt={card.left}
                          className="v5-deck-photo-img"
                        />
                      )}
                    </div>
                  ))}
                  <span className="v5-deck-badge">{currentCard.tag}</span>
                </div>

                {/* Step Indicator Bars (matching 3 dots in video) */}
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
