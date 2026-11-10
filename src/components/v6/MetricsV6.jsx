import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MetricsV6.css';

gsap.registerPlugin(ScrollTrigger);

export default function MetricsV6({ id = 'metrics', onBookDemo }) {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=700',
          pin: true,
          anticipatePin: 1,
          scrub: 0.5,
        }
      });

      tl.fromTo(container,
        { opacity: 0.3, y: 30, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.5, ease: 'power2.out' },
        0
      );

      tl.to({}, { duration: 0.4 });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="v6-page-surface-white v6-metrics-section" id={id} ref={sectionRef} data-nav-theme="light">
      <div className="v6-container v6-px v6-metrics-container" ref={containerRef}>
        
        {/* Headline matching 00:31 in video */}
        <h2 className="v6-metrics-title">
          <span className="v6-metrics-line">The same luxury quality.</span>
          <span className="v6-metrics-line">One third of the cost.</span>
        </h2>

        {/* 3 Metric Columns with Thin Top Divider Lines */}
        <div className="v6-metrics-grid">
          
          <div className="v6-metric-col">
            <div className="v6-metric-divider">
              <p className="v6-metric-num tabular-nums text-black">
                35 %
              </p>
              <p className="body-large mt-2 text-neutral-500">
                under third-party trading agencies
              </p>
            </div>
          </div>

          <div className="v6-metric-col">
            <div className="v6-metric-divider">
              <p className="v6-metric-num tabular-nums text-black">
                100 %
              </p>
              <p className="body-large mt-2 text-neutral-500">
                brand-compliant & audited
              </p>
            </div>
          </div>

          <div className="v6-metric-col">
            <div className="v6-metric-divider">
              <p className="v6-metric-num tabular-nums text-black">
                14 Days
              </p>
              <p className="body-large mt-2 text-neutral-500">
                prototype turnaround
              </p>
            </div>
          </div>

        </div>

        {/* Paragraph & CTA matching 00:31 */}
        <div className="v6-metrics-bottom-row">
          <p className="body-large text-neutral-500 max-w-[56ch]">
            Traditional buying agencies add 3 layers of middleman markup and 4 weeks of planning delays. Here, the master pattern and sample run are calibrated on a Tuesday afternoon.
          </p>
          <button 
            type="button" 
            className="v6-pill-btn-black"
            onClick={onBookDemo}
          >
            Book a demo
          </button>
        </div>

      </div>
    </section>
  );
}
