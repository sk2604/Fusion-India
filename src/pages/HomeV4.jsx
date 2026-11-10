import React, { useState, useEffect } from 'react';
import GraceNavbar from '../components/v4/GraceNavbar';
import GraceTracker from '../components/v4/GraceTracker';
import GraceHero from '../components/v4/GraceHero';
import GraceDeck from '../components/v4/GraceDeck';
import GracePillars from '../components/v4/GracePillars';
import GraceMotion from '../components/v4/GraceMotion';
import GraceTwoPaths from '../components/v4/GraceTwoPaths';
import GraceReach from '../components/v4/GraceReach';
import GraceMetrics from '../components/v4/GraceMetrics';
import GraceTestimonials from '../components/v4/GraceTestimonials';
import GraceFAQ from '../components/v4/GraceFAQ';
import GraceFooter from '../components/v4/GraceFooter';
import SampleDrawerV4 from '../components/v4/SampleDrawerV4';
import './HomeV4.css';

export default function HomeV4() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToDeck = () => {
    const el = document.getElementById('deck');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-v4-wrap grace-theme">
      {/* 1. Grace Minimal Fixed Mix-Blend-Difference Navbar */}
      <GraceNavbar onOpenDrawer={() => setDrawerOpen(true)} />

      {/* 2. Floating Right-Side 100vh Vertical Section Tracker */}
      <GraceTracker />

      {/* 3. Section 01: Grace Fullscreen Pinned Hero Statement */}
      <GraceHero onExplore={scrollToDeck} />

      {/* 4. Section 02: 100vh White Surface Divisions Showcase */}
      <GraceDeck 
        id="deck" 
        onSelectDivision={() => setDrawerOpen(true)}
      />

      {/* 5. Section 03: 100vh Dark Dot-Grid 3 Pillars (Detail Zoom + 2x2 Grid + Concentric Orbit) */}
      <GracePillars 
        id="pillars" 
        onExploreSpecs={() => setDrawerOpen(true)} 
      />

      {/* 6. Section 04: 100vh High-Fashion Motion Drape */}
      <GraceMotion />

      {/* 7. Section 05: 100vh White Surface Two Sourcing Paths (FOB Direct vs DDP Concierge) */}
      <GraceTwoPaths 
        id="paths"
        onSelectFOB={() => setDrawerOpen(true)}
        onSelectDDP={() => setDrawerOpen(true)}
        onRequestDeck={() => setDrawerOpen(true)}
      />

      {/* 8. Section 06: 100vh White Surface Our Reach & Interactive Global Hubs Map */}
      <GraceReach id="reach" />

      {/* 9. Section 07: 100vh White Surface Giant Metrics (35% / 100% / 14 Days) */}
      <GraceMetrics 
        id="metrics" 
        onBookAudit={() => setDrawerOpen(true)} 
      />

      {/* 10. Section 08: 100vh Kundenstimmen (Brand Trust & Quotes) */}
      <GraceTestimonials />

      {/* 11. Section 09: White Surface Sticky 2-Column FAQ Accordion */}
      <GraceFAQ id="faq" />

      {/* 12. Section 10: Dark Luxury Footer */}
      <GraceFooter onOpenDrawer={() => setDrawerOpen(true)} />

      {/* 13. Slide-out Sourcing Intake Drawer */}
      <SampleDrawerV4 
        isOpen={drawerOpen} 
        onClose={() => setDrawerOpen(false)} 
      />
    </div>
  );
}
