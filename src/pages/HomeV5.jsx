import React, { useState, useEffect } from 'react';
import NavbarV5 from '../components/v5/NavbarV5';
import TrackerV5 from '../components/v5/TrackerV5';
import HeroV5 from '../components/v5/HeroV5';
import ScrollDeckV5 from '../components/v5/ScrollDeckV5';
import DoorAndBloomV5 from '../components/v5/DoorAndBloomV5';
import PillarsV5 from '../components/v5/PillarsV5';
import MotionV5 from '../components/v5/MotionV5';
import TwoPathsV5 from '../components/v5/TwoPathsV5';
import ReachV5 from '../components/v5/ReachV5';
import MetricsV5 from '../components/v5/MetricsV5';
import TestimonialsV5 from '../components/v5/TestimonialsV5';
import FAQV5 from '../components/v5/FAQV5';
import FooterV5 from '../components/v5/FooterV5';
import SampleDrawerV4 from '../components/v4/SampleDrawerV4';
import './HomeV5.css';

export default function HomeV5() {
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
    <div className="home-v5-wrap">
      {/* 1. Mix-Blend-Difference Fixed Header */}
      <NavbarV5 onOpenDrawer={() => setDrawerOpen(true)} />

      {/* 2. Floating Right-Side Vertical 100vh Tracker */}
      <TrackerV5 />

      {/* 3. Hero (Warm Golden Atelier Lighting matching frames 00:00-00:02) */}
      <HeroV5 onExplore={() => scrollToSection('deck')} />

      {/* 4. Section 01: 320vh Scroll-Driven Deck (matching frames 00:03-00:11) */}
      <ScrollDeckV5 
        id="deck" 
        onSelectCard={() => setDrawerOpen(true)}
      />

      {/* 5. Section 02: 280vh Cutout Door Zoom & Blooming Garment Photoshoot on Dot-Grid (matching frames 00:12-00:19) */}
      <DoorAndBloomV5 
        id="blooming" 
        onSelectShot={() => setDrawerOpen(true)}
      />

      {/* 6. Section 03: 3 Pillars on Dot-Grid (Detail Zoom + 2x2 Grid + Concentric Orbit) (matching frames 00:20-00:22) */}
      <PillarsV5 
        id="pillars" 
        onExploreSpecs={() => setDrawerOpen(true)} 
      />

      {/* 7. Section 04: Elevator Scene (matching user's uploaded image & frames 00:23-00:26) */}
      <MotionV5 id="motion" />

      {/* 8. Section 05: Two Sourcing Paths on White (matching frames 00:27-00:30) */}
      <TwoPathsV5 
        id="paths"
        onSelectFOB={() => setDrawerOpen(true)}
        onSelectDDP={() => setDrawerOpen(true)}
        onRequestDeck={() => setDrawerOpen(true)}
      />

      {/* 9. Section 06: Our Reach & Interactive World Map (Requested by user) */}
      <ReachV5 id="reach" />

      {/* 10. Section 07: Sourcing Economics Metrics (matching frames 00:31-00:32) */}
      <MetricsV5 
        id="metrics" 
        onBookDemo={() => setDrawerOpen(true)} 
      />

      {/* 11. Section 08: Client Trust & Quotes (matching frames 00:32-00:33) */}
      <TestimonialsV5 id="testimonials" />

      {/* 12. Section 09: Sticky 2-Column FAQ Accordion (matching frames 00:34-00:36) */}
      <FAQV5 id="faq" />

      {/* 13. Section 10: Warm Red/Orange Editorial Footer (matching frames 00:37-00:40) */}
      <FooterV5 onOpenDrawer={() => setDrawerOpen(true)} />

      {/* 14. Slide-out Sourcing Intake Drawer */}
      <SampleDrawerV4 
        isOpen={drawerOpen} 
        onClose={() => setDrawerOpen(false)} 
      />
    </div>
  );
}
