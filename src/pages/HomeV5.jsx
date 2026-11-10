import React, { useState, useEffect } from 'react';
import NavbarV5 from '../components/v5/NavbarV5';
import TrackerV5 from '../components/v5/TrackerV5';
import HeroV5 from '../components/v5/HeroV5';
import FlankingShowcaseV5 from '../components/v5/FlankingShowcaseV5';
import CutoutTransitionV5 from '../components/v5/CutoutTransitionV5';
import BloomingGarmentV5 from '../components/v5/BloomingGarmentV5';
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
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-v5-wrap">
      {/* 1. Mix-Blend-Difference Fixed Navbar matching Video */}
      <NavbarV5 onOpenDrawer={() => setDrawerOpen(true)} />

      {/* 2. Floating Right-Side 100vh Vertical Tracker */}
      <TrackerV5 />

      {/* 3. Hero (Warm Golden Atelier Lighting matching frames 00:00-00:02) */}
      <HeroV5 onExplore={() => scrollToSection('showcase')} />

      {/* 4. Flanking Words + Square Photo Showcase (matching frames 00:03-00:11) */}
      <FlankingShowcaseV5 
        id="showcase" 
        onSelect={() => setDrawerOpen(true)}
      />

      {/* 5. Cutout Typography Transition Bridge (matching frames 00:12-00:13) */}
      <CutoutTransitionV5 />

      {/* 6. The Blooming Garment Photoshoot on Dot Grid (matching frames 00:14-00:19) */}
      <BloomingGarmentV5 
        id="blooming" 
        onSelectShot={() => setDrawerOpen(true)}
      />

      {/* 7. The 3 Columns on Dot Grid (matching frames 00:20-00:22) */}
      <PillarsV5 
        id="pillars" 
        onExploreSpecs={() => setDrawerOpen(true)} 
      />

      {/* 8. Runway / Atelier Motion Drape (matching frames 00:23-00:26) */}
      <MotionV5 id="motion" />

      {/* 9. Two Paths: FOB vs DDP on White (matching frames 00:27-00:30) */}
      <TwoPathsV5 
        id="paths"
        onSelectFOB={() => setDrawerOpen(true)}
        onSelectDDP={() => setDrawerOpen(true)}
        onRequestDeck={() => setDrawerOpen(true)}
      />

      {/* 10. Our Reach & Interactive World Map Section (Requested by user) */}
      <ReachV5 id="reach" />

      {/* 11. Sourcing Economics Metrics (matching frames 00:31-00:32) */}
      <MetricsV5 
        id="metrics" 
        onBookDemo={() => setDrawerOpen(true)} 
      />

      {/* 12. Client Trust & Quotes (matching frames 00:32-00:33) */}
      <TestimonialsV5 id="testimonials" />

      {/* 13. Sticky 2-Column FAQ Accordion (matching frames 00:34-00:36) */}
      <FAQV5 id="faq" />

      {/* 14. Warm Red/Orange Editorial Footer (matching frames 00:37-00:40) */}
      <FooterV5 onOpenDrawer={() => setDrawerOpen(true)} />

      {/* 15. Slide-out Sourcing Intake Drawer */}
      <SampleDrawerV4 
        isOpen={drawerOpen} 
        onClose={() => setDrawerOpen(false)} 
      />
    </div>
  );
}
