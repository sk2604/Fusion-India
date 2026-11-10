import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MotionV6.css';

gsap.registerPlugin(ScrollTrigger);

export default function MotionV6({ id = 'motion' }) {
  const sectionRef = useRef(null);
  const videoBgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const videoBg = videoBgRef.current;
    const content = contentRef.current;
    if (!section || !videoBg || !content) return;

    const ctx = gsap.context(() => {
      // Pinned GSAP ScrollTrigger timeline with cinematic zoom and text reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=750',
          pin: true,
          anticipatePin: 1,
          scrub: 0.5,
        }
      });

      // Video zooms out smoothly from scale(1.18) to scale(1.0)
      tl.fromTo(videoBg, 
        { scale: 1.18 },
        { scale: 1.0, ease: 'none', duration: 1 },
        0
      );

      // Text content enters with unblur and upward glide
      tl.fromTo(content,
        { y: 50, opacity: 0, filter: 'blur(12px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', ease: 'power2.out', duration: 0.7 },
        0.15
      );

      // Hold before unpinning
      tl.to({}, { duration: 0.3 });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="v6-motion-section" id={id} ref={sectionRef} data-nav-theme="dark">
      {/* Background Cinematic High-Fashion Video Loop with Pinned Zoom */}
      <div className="v6-motion-bg" ref={videoBgRef}>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2400&auto=format&fit=crop"
          className="v6-motion-video"
          data-pin-nopin="true"
          data-pin-no-hover="true"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-model-posing-in-a-fur-coat-in-an-elevator-41588-large.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="v6-motion-scrim" />
      </div>

      {/* Centered High-Fashion Atelier Motion Statement (Authentic Fusion India Brand Credo) */}
      <div className="v6-motion-content" ref={contentRef}>
        <div className="v6-motion-badge">
          <span className="v6-motion-badge-dot" />
          <span>THE FUSION CREDO // EST. 1998</span>
        </div>

        <h2 className="v6-motion-headline">
          Right Product. Right Price. Right Performance.
        </h2>

        <p className="v6-motion-credo-lead">
          We build what global fashion wears.
        </p>

        <span className="v6-motion-sub">
          30+ YEARS OF GLOBAL SOURCING // 500+ AUDITED MILLS // GURUGRAM HQ
        </span>
      </div>
    </section>
  );
}
