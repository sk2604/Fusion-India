import React, { useState, useEffect } from 'react';
import GraceNavbar from '../components/v4/GraceNavbar';
import GraceHero from '../components/v4/GraceHero';
import GraceDeck from '../components/v4/GraceDeck';
import GracePillars from '../components/v4/GracePillars';
import GraceMotion from '../components/v4/GraceMotion';
import GraceTwoPaths from '../components/v4/GraceTwoPaths';
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

      {/* 2. Grace Fullscreen Pinned Hero Statement */}
      <GraceHero onExplore={scrollToDeck} />

      {/* 3. Section 1: 300vh White Surface Scroll Deck */}
      <GraceDeck id="deck" />

      {/* 4. Section 2: Dark Dot-Grid 3 Pillars (Detail Zoom + 2x2 Grid + Concentric Orbit) */}
      <GracePillars 
        id="pillars" 
        onExploreSpecs={() => setDrawerOpen(true)} 
      />

      {/* 5. Section 3: High-Fashion Motion / Dynamic Drape */}
      <GraceMotion />

      {/* 6. Section 4: White Surface Two Paths (FOB Direct vs DDP Concierge) */}
      <GraceTwoPaths 
        id="paths"
        onSelectFOB={() => setDrawerOpen(true)}
        onSelectDDP={() => setDrawerOpen(true)}
        onRequestDeck={() => setDrawerOpen(true)}
      />

      {/* 7. Section 5: White Surface Giant Metrics (35% / 100% / 14 Days) */}
      <GraceMetrics 
        id="metrics" 
        onBookAudit={() => setDrawerOpen(true)} 
      />

      {/* 8. Section 6: Kundenstimmen (Brand trust + Minimal quote slider) */}
      <GraceTestimonials />

      {/* 9. Section 7: White Surface Sticky 2-Column FAQ Accordion */}
      <GraceFAQ id="faq" />

      {/* 10. Section 8: Dark Luxury Footer */}
      <GraceFooter onOpenDrawer={() => setDrawerOpen(true)} />

      {/* 11. Slide-out Sourcing Intake Drawer */}
      <SampleDrawerV4 
        isOpen={drawerOpen} 
        onClose={() => setDrawerOpen(false)} 
      />
    </div>
  );
}
