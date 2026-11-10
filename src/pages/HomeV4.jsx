import React, { useState, useEffect } from 'react';
import GraceHero from '../components/v4/GraceHero';
import GracePillars from '../components/v4/GracePillars';
import GraceTwoPaths from '../components/v4/GraceTwoPaths';
import GraceMetrics from '../components/v4/GraceMetrics';
import GraceTestimonials from '../components/v4/GraceTestimonials';
import GraceFAQ from '../components/v4/GraceFAQ';
import GraceCTA from '../components/v4/GraceCTA';
import SampleDrawerV4 from '../components/v4/SampleDrawerV4';
import './HomeV4.css';

export default function HomeV4() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToPillars = () => {
    const el = document.getElementById('pillars');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-v4-wrap grace-theme">
      {/* 1. Grace Hero: Fullscreen Pinned Statement */}
      <GraceHero onExplore={scrollToPillars} />

      {/* 2. Grace 3 Core Pillars (Zoom Inspector + 7 Consistent Scenes + Animated Orbit System) */}
      <GracePillars id="pillars" />

      {/* 3. Grace Two Paths: "Do it yourself or Let us produce" */}
      <GraceTwoPaths 
        onSelectDigital={() => setDrawerOpen(true)}
        onSelectService={() => setDrawerOpen(true)}
      />

      {/* 4. Grace Giant Metrics: 80% / 100% / 72h */}
      <GraceMetrics onBookDemo={() => setDrawerOpen(true)} />

      {/* 5. Grace Testimonials & Logos ("Kundenstimmen") */}
      <GraceTestimonials />

      {/* 6. Grace FAQ Accordion (Left sticky title, right rotating + buttons) */}
      <GraceFAQ />

      {/* 7. Grace Final CTA */}
      <GraceCTA onOpenModal={() => setDrawerOpen(true)} />

      {/* 8. Slide-out Atelier Intake Drawer */}
      <SampleDrawerV4 
        isOpen={drawerOpen} 
        onClose={() => setDrawerOpen(false)} 
      />
    </div>
  );
}
