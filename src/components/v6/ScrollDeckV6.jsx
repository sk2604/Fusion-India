import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollDeckV6.css';

gsap.registerPlugin(ScrollTrigger);

const deckSlides = [
  {
    id: 1,
    left: 'Atelier Craft,',
    right: 'at audited scale.',
    tag: 'DIVISION 01 // TAILORED OUTERWEAR',
    sub: 'Double-face virgin wool, tailored canvas construction, horn hardware.',
    img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 2,
    left: 'From tech pack',
    right: 'to verified production.',
    tag: 'DIVISION 02 // SOURCING SUITE',
    sub: 'Tailored woolens, circular denim, bespoke leather goods, and silk.',
    isGrid: true,
    gridImages: [
      {
        src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop',
        alt: 'Tailored Wool Suit'
      },
      {
        src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop',
        alt: 'Ivory Structured Blazer'
      },
      {
        src: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop',
        alt: 'Handcrafted Leather Loafers'
      },
      {
        src: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop',
        alt: 'Artisan Leather Tote'
      }
    ]
  },
  {
    id: 3,
    left: 'Zero compromise,',
    right: 'on runway quality.',
    tag: 'DIVISION 03 // SCALED RUNWAYS',
    sub: '100% factory calibration across 50,000+ unit European delivery.',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 4,
    left: 'Right Product —',
    right: 'Right Price. Right Performance.',
    tag: 'THE FUSION CREDO // EST. 1998',
    sub: 'Bridging global runway directions with ethical Indian manufacturing.',
    isDoorCutout: true
  }
];

export default function ScrollDeckV6({ id = 'deck', onSelectCard }) {
  const containerRef = useRef(null);
  const quoteRef = useRef(null);
  const stageRef = useRef(null);
  const cardRefs = useRef([]);
  const textLeftRefs = useRef([]);
  const textRightRefs = useRef([]);

  cardRefs.current = [];
  textLeftRefs.current = [];
  textRightRefs.current = [];

  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
  };
  const addToTextLeftRefs = (el) => {
    if (el && !textLeftRefs.current.includes(el)) textLeftRefs.current.push(el);
  };
  const addToTextRightRefs = (el) => {
    if (el && !textRightRefs.current.includes(el)) textRightRefs.current.push(el);
  };

  useEffect(() => {
    const container = containerRef.current;
    const quote = quoteRef.current;
    const stage = stageRef.current;
    if (!container || !quote || !stage) return;

    const ctx = gsap.context(() => {
      // Initialize cards and texts
      cardRefs.current.forEach((card, i) => {
        if (i === 0) {
          gsap.set(card, { yPercent: 0, opacity: 1, scale: 1 });
        } else {
          gsap.set(card, { yPercent: 120, opacity: 0, scale: 0.96 });
        }
      });

      textLeftRefs.current.forEach((t, i) => {
        if (i === 0) {
          gsap.set(t, { y: 0, opacity: 1, filter: 'blur(0px)' });
        } else {
          gsap.set(t, { y: 30, opacity: 0, filter: 'blur(12px)' });
        }
      });

      textRightRefs.current.forEach((t, i) => {
        if (i === 0) {
          gsap.set(t, { y: 0, opacity: 1, filter: 'blur(0px)' });
        } else {
          gsap.set(t, { y: 30, opacity: 0, filter: 'blur(12px)' });
        }
      });

      // Pinned GSAP ScrollTrigger timeline matching user screen recording
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=3600',
          pin: true,
          anticipatePin: 1,
          scrub: 0.7,
        }
      });

      // ─── STEP 0: Initial Quote transitions out as Stage enters ───
      tl.to(quote, {
        y: -50,
        opacity: 0,
        filter: 'blur(14px)',
        duration: 0.8,
        ease: 'power2.inOut'
      }, 0);

      tl.fromTo(stage, 
        { y: 60, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power2.out' },
        0.2
      );

      // ─── STEP 1: Slide 0 -> Slide 1 (Transition to 2x2 Grid) ───
      tl.addLabel('slide1', 1.2);
      // Exit Slide 0
      tl.to(cardRefs.current[0], { yPercent: -120, opacity: 0, scale: 0.94, duration: 1, ease: 'power2.inOut' }, 'slide1');
      tl.to(textLeftRefs.current[0], { y: -25, opacity: 0, filter: 'blur(12px)', duration: 0.6, ease: 'power2.in' }, 'slide1');
      tl.to(textRightRefs.current[0], { y: -25, opacity: 0, filter: 'blur(12px)', duration: 0.6, ease: 'power2.in' }, 'slide1');
      // Enter Slide 1
      tl.to(cardRefs.current[1], { yPercent: 0, opacity: 1, scale: 1, duration: 1, ease: 'power2.inOut' }, 'slide1+=0.1');
      tl.to(textLeftRefs.current[1], { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.7, ease: 'power2.out' }, 'slide1+=0.2');
      tl.to(textRightRefs.current[1], { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.7, ease: 'power2.out' }, 'slide1+=0.2');

      // ─── STEP 2: Slide 1 -> Slide 2 (Transition to Runway Model) ───
      tl.addLabel('slide2', 2.6);
      // Exit Slide 1
      tl.to(cardRefs.current[1], { yPercent: -120, opacity: 0, scale: 0.94, duration: 1, ease: 'power2.inOut' }, 'slide2');
      tl.to(textLeftRefs.current[1], { y: -25, opacity: 0, filter: 'blur(12px)', duration: 0.6, ease: 'power2.in' }, 'slide2');
      tl.to(textRightRefs.current[1], { y: -25, opacity: 0, filter: 'blur(12px)', duration: 0.6, ease: 'power2.in' }, 'slide2');
      // Enter Slide 2
      tl.to(cardRefs.current[2], { yPercent: 0, opacity: 1, scale: 1, duration: 1, ease: 'power2.inOut' }, 'slide2+=0.1');
      tl.to(textLeftRefs.current[2], { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.7, ease: 'power2.out' }, 'slide2+=0.2');
      tl.to(textRightRefs.current[2], { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.7, ease: 'power2.out' }, 'slide2+=0.2');

      // ─── STEP 3: Slide 2 -> Slide 3 (Transition to Door Cutout Motif) ───
      tl.addLabel('slide3', 4.0);
      // Exit Slide 2
      tl.to(cardRefs.current[2], { yPercent: -120, opacity: 0, scale: 0.94, duration: 1, ease: 'power2.inOut' }, 'slide3');
      tl.to(textLeftRefs.current[2], { y: -25, opacity: 0, filter: 'blur(12px)', duration: 0.6, ease: 'power2.in' }, 'slide3');
      tl.to(textRightRefs.current[2], { y: -25, opacity: 0, filter: 'blur(12px)', duration: 0.6, ease: 'power2.in' }, 'slide3');
      // Enter Slide 3
      tl.to(cardRefs.current[3], { yPercent: 0, opacity: 1, scale: 1, duration: 1, ease: 'power2.inOut' }, 'slide3+=0.1');
      tl.to(textLeftRefs.current[3], { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.7, ease: 'power2.out' }, 'slide3+=0.2');
      tl.to(textRightRefs.current[3], { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.7, ease: 'power2.out' }, 'slide3+=0.2');

      // Hold slide 3 at end before unpinning
      tl.to({}, { duration: 0.5 });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section className="v6-deck-section" id={id} ref={containerRef}>
      <div className="v6-deck-wrapper">
        
        {/* 1. Introductory Atelier Philosophy Quote (matches frame 00:00 - 00:02 in user video) */}
        <div className="v6-deck-quote-screen" ref={quoteRef}>
          <p className="v6-deck-quote-tag">FUSION INDIA // PHILOSOPHY</p>
          <blockquote className="v6-deck-quote-text">
            Garments designed to be worn, loved, and carried across seasons.
          </blockquote>
        </div>

        {/* 2. Pinned 3-Column Deck Stage (matches frames 00:03 - 00:10 in user video) */}
        <div className="v6-deck-stage" ref={stageRef}>
          <div className="v6-deck-columns-grid">
            
            {/* Left Flank Column (Right-aligned text towards center card) */}
            <div className="v6-deck-flank-col v6-flank-col-left">
              {deckSlides.map((slide, i) => (
                <div 
                  key={`left-${slide.id}`} 
                  className="v6-deck-word-wrap"
                  ref={addToTextLeftRefs}
                >
                  <h3 className="v6-deck-flank-text">
                    {slide.left}
                  </h3>
                </div>
              ))}
            </div>

            {/* Center Column: Square Card Stage with Vertical Slide Motion */}
            <div className="v6-deck-center-col">
              <div className="v6-deck-card-viewport">
                {deckSlides.map((slide, i) => (
                  <div 
                    key={`card-${slide.id}`} 
                    className="v6-deck-card-item"
                    ref={addToCardRefs}
                    onClick={() => onSelectCard && onSelectCard(slide)}
                    role="button"
                    tabIndex={0}
                  >
                    {slide.isGrid ? (
                      /* Slide 2: 2x2 Grid of 4 authentic luxury fashion images */
                      <div className="v6-deck-card-grid-2x2">
                        {slide.gridImages.map((item, gIdx) => (
                          <div key={gIdx} className="v6-grid-quarter-wrap">
                            <img 
                              src={item.src} 
                              alt={item.alt}
                              className="v6-grid-quarter-img"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    ) : slide.isDoorCutout ? (
                      /* Slide 4: Geometric Doorway Cutout matching frame 00:09 */
                      <div className="v6-deck-cutout-box">
                        <div className="v6-cutout-monogram">
                          <span className="v6-cutout-char">f</span>
                          <span className="v6-cutout-dot" />
                        </div>
                        <p className="v6-cutout-credo">WE BUILD WHAT THE WORLD WEARS.</p>
                      </div>
                    ) : (
                      /* Slides 1 & 3: Single High-Fashion Campaign Photography */
                      <div className="v6-deck-photo-single">
                        <img 
                          src={slide.img} 
                          alt={slide.left}
                          className="v6-deck-single-img"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {/* Division Live Badge Overlay */}
                    <div className="v6-deck-card-badge">
                      <span className="v6-card-badge-dot" />
                      <span className="v6-card-badge-text">{slide.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Flank Column (Left-aligned text starting from center card) */}
            <div className="v6-deck-flank-col v6-flank-col-right">
              {deckSlides.map((slide, i) => (
                <div 
                  key={`right-${slide.id}`} 
                  className="v6-deck-word-wrap"
                  ref={addToTextRightRefs}
                >
                  <h3 className="v6-deck-flank-text">
                    {slide.right}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
