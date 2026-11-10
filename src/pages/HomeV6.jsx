import React, { useState, useEffect } from 'react';
import NavbarV6 from '../components/v6/NavbarV6';
import TrackerV6 from '../components/v6/TrackerV6';
import HeroV6 from '../components/v6/HeroV6';
import ScrollDeckV6 from '../components/v6/ScrollDeckV6';
import DoorAndBloomV6 from '../components/v6/DoorAndBloomV6';
import PillarsV6 from '../components/v6/PillarsV6';
import MotionV6 from '../components/v6/MotionV6';
import TwoPathsV6 from '../components/v6/TwoPathsV6';
import ReachV6 from '../components/v6/ReachV6';
import MetricsV6 from '../components/v6/MetricsV6';
import TestimonialsV6 from '../components/v6/TestimonialsV6';
import FAQV6 from '../components/v6/FAQV6';
import FooterV6 from '../components/v6/FooterV6';
import SampleDrawerV4 from '../components/v4/SampleDrawerV4';
import './HomeV6.css';

export default function HomeV6() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      }
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-v6-wrap">
      {/* 1. Mix-Blend-Difference Fixed Header */}
      <NavbarV6 onOpenDrawer={() => setDrawerOpen(true)} />

      {/* 2. Floating Right-Side Vertical 100vh Tracker */}
      <TrackerV6 />

      {/* 3. Hero (Warm Golden Atelier Lighting) */}
      <HeroV6 onExplore={() => scrollToSection('deck')} />

      {/* 4. Section 01: GSAP Pinned Scroll Deck */}
      <ScrollDeckV6 
        id="deck" 
        onSelectCard={() => setDrawerOpen(true)}
      />

      {/* 5. Section 02: GSAP Pinned Cutout Door Zoom & Blooming Garment Photoshoot on Dot-Grid */}
      <DoorAndBloomV6 
        id="blooming" 
        onSelectShot={() => setDrawerOpen(true)}
      />

      {/* 6. Section 03: 3 Pillars on Dot-Grid (Detail Zoom + 2x2 Grid + Concentric Orbit) */}
      <PillarsV6 
        id="pillars" 
        onExploreSpecs={() => setDrawerOpen(true)} 
      />

      {/* 7. Section 04: Elevator Scene */}
      <MotionV6 id="motion" />

      {/* 8. Section 05: Two Sourcing Paths on White (Direct FOB vs Full DDP) */}
      <TwoPathsV6 
        id="paths"
        onSelectFOB={() => setDrawerOpen(true)}
        onSelectDDP={() => setDrawerOpen(true)}
        onRequestDeck={() => setDrawerOpen(true)}
      />

      {/* 9. Section 06: Our Reach & Interactive World Map */}
      <ReachV6 id="reach" />

      {/* 10. Section 07: Sourcing Economics Metrics */}
      <MetricsV6 
        id="metrics" 
        onBookDemo={() => setDrawerOpen(true)} 
      />

      {/* 11. Section 08: Client Trust & Quotes */}
      <TestimonialsV6 id="testimonials" />

      {/* 12. Section 09: Sticky 2-Column FAQ Accordion */}
      <FAQV6 id="faq" />

      {/* 13. Section 10: Warm Red/Orange Editorial Footer */}
      <FooterV6 onOpenDrawer={() => setDrawerOpen(true)} />

      {/* 14. Slide-out Sourcing Intake Drawer */}
      <SampleDrawerV4 
        isOpen={drawerOpen} 
        onClose={() => setDrawerOpen(false)} 
      />
    </div>
  );
}
