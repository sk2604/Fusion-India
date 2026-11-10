import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollDeckV6.css';

gsap.registerPlugin(ScrollTrigger);

// 3 High-Fashion Editorial Slides matching Grace Reference (Images 4 & 6)
// Single monumental vertical portrait photo flanked by clean, confident typography
const deckSlides = [
  {
    id: 1,
    left: 'Campaigns',
    right: 'with authority.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
    alt: 'High-Fashion Editorial Sourcing Campaign'
  },
  {
    id: 2,
    left: 'Atelier craft,',
    right: 'at audited scale.',
    img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
    alt: 'Bespoke Atelier Craftsmanship and Tailoring'
  },
  {
    id: 3,
    left: 'From tech pack',
    right: 'to verified runway.',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
    alt: 'Production Ready High-End Apparel Runs'
  }
];

export default function ScrollDeckV6({ id = 'deck', onSelectCard }) {
  const containerRef = useRef(null);
  const quoteRef = useRef(null);
  const stageRef = useRef(null);
  const trackRef = useRef(null);
  const textLeftRefs = useRef([]);
  const textRightRefs = useRef([]);

  textLeftRefs.current = [];
  textRightRefs.current = [];

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
    const track = trackRef.current;
    if (!container || !quote || !stage || !track) return;

    const ctx = gsap.context(() => {
      // 1. Initial State: Quote is visible and prominent
      gsap.set(quote, { opacity: 1, y: 0, filter: 'blur(0px)' });
      // Stage starts hidden slightly below
      gsap.set(stage, { opacity: 0, y: 40, filter: 'blur(10px)', pointerEvents: 'none' });
      // Filmstrip starts at Slide 0
      gsap.set(track, { yPercent: 0 });

      // Texts: Slide 0 is prepped to show; others start hidden
      textLeftRefs.current.forEach((el, i) => {
        gsap.set(el, {
          opacity: i === 0 ? 1 : 0,
          filter: i === 0 ? 'blur(0px)' : 'blur(14px)',
          y: i === 0 ? 0 : 25
        });
      });

      textRightRefs.current.forEach((el, i) => {
        gsap.set(el, {
          opacity: i === 0 ? 1 : 0,
          filter: i === 0 ? 'blur(0px)' : 'blur(14px)',
          y: i === 0 ? 0 : 25
        });
      });

      // Master Pinned GSAP ScrollTrigger Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=3200',
          pin: true,
          anticipatePin: 1,
          scrub: 0.65,
        }
      });

      // ─── PART 1: Philosophy Quote Screen holds, then exits upward ───
      tl.to({}, { duration: 0.4 });
      
      tl.to(quote, {
        y: -60,
        opacity: 0,
        filter: 'blur(14px)',
        duration: 0.9,
        ease: 'power2.inOut'
      }, 0.4);

      // Deck Stage enters from below with unblur
      tl.to(stage, {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.9,
        ease: 'power2.out',
        onStart: () => gsap.set(stage, { pointerEvents: 'auto' })
      }, 0.6);

      // ─── PART 2: Slide 1 holds, then glides to Slide 2 ───
      tl.to({}, { duration: 0.5 });
      
      // Move track by -100%
      tl.to(track, { yPercent: -100, duration: 1.0, ease: 'power2.inOut' }, 1.8);
      // Blur and exit Slide 1 text
      tl.to(textLeftRefs.current[0], { opacity: 0, filter: 'blur(14px)', y: -20, duration: 0.5, ease: 'power2.in' }, 1.8);
      tl.to(textRightRefs.current[0], { opacity: 0, filter: 'blur(14px)', y: -20, duration: 0.5, ease: 'power2.in' }, 1.8);
      // Unblur and enter Slide 2 text
      tl.to(textLeftRefs.current[1], { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.6, ease: 'power2.out' }, 2.2);
      tl.to(textRightRefs.current[1], { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.6, ease: 'power2.out' }, 2.2);

      // ─── PART 3: Slide 2 holds, then glides to Slide 3 ───
      tl.to({}, { duration: 0.5 });

      // Move track by -200%
      tl.to(track, { yPercent: -200, duration: 1.0, ease: 'power2.inOut' }, 3.2);
      // Blur and exit Slide 2 text
      tl.to(textLeftRefs.current[1], { opacity: 0, filter: 'blur(14px)', y: -20, duration: 0.5, ease: 'power2.in' }, 3.2);
      tl.to(textRightRefs.current[1], { opacity: 0, filter: 'blur(14px)', y: -20, duration: 0.5, ease: 'power2.in' }, 3.2);
      // Unblur and enter Slide 3 text
      tl.to(textLeftRefs.current[2], { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.6, ease: 'power2.out' }, 3.6);
      tl.to(textRightRefs.current[2], { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.6, ease: 'power2.out' }, 3.6);

      // Hold Slide 3 before releasing pin
      tl.to({}, { duration: 0.6 });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section className="v6-deck-section" id={id} ref={containerRef} data-nav-theme="light">
      <div className="v6-deck-wrapper">
        
        {/* 1. Introductory Atelier Philosophy Quote */}
        <div className="v6-deck-quote-screen" ref={quoteRef}>
          <span className="v6-deck-quote-tag">FUSION INDIA // PHILOSOPHY</span>
          <blockquote className="v6-deck-quote-text">
            Garments designed to be worn, loved, and carried across seasons.
          </blockquote>
        </div>

        {/* 2. Pinned 3-Column Deck Stage with Single High-Impact Visuals */}
        <div className="v6-deck-stage" ref={stageRef}>
          <div className="v6-deck-columns-grid">
            
            {/* Left Flank Column (Right-aligned text towards center portrait photo) */}
            <div className="v6-deck-flank-col v6-flank-col-left">
              {deckSlides.map((slide) => (
                <div 
                  key={`left-${slide.id}`} 
                  className="v6-deck-word-wrap"
                  ref={addToTextLeftRefs}
                >
                  <h3 className="v6-deck-flank-text text-right">
                    {slide.left}
                  </h3>
                </div>
              ))}
            </div>

            {/* Center Column: Portrait Viewport with Smooth Continuous Filmstrip Track */}
            <div className="v6-deck-center-col">
              <div className="v6-deck-card-viewport">
                <div className="v6-deck-filmstrip-track" ref={trackRef}>
                  {deckSlides.map((slide) => (
                    <div 
                      key={`card-${slide.id}`} 
                      className="v6-deck-card-slide"
                      onClick={() => onSelectCard && onSelectCard(slide)}
                      role="button"
                      tabIndex={0}
                    >
                      <img 
                        src={slide.img} 
                        alt={slide.alt}
                        className="v6-deck-single-img"
                        loading="lazy"
                        data-pin-nopin="true"
                        data-pin-no-hover="true"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Flank Column (Left-aligned text starting from center photo) */}
            <div className="v6-deck-flank-col v6-flank-col-right">
              {deckSlides.map((slide) => (
                <div 
                  key={`right-${slide.id}`} 
                  className="v6-deck-word-wrap"
                  ref={addToTextRightRefs}
                >
                  <h3 className="v6-deck-flank-text text-left">
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
