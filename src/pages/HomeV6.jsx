import React, { useState, useEffect } from 'react';
import NavbarV6 from '../components/v6/NavbarV6';
import HeroV6 from '../components/v6/HeroV6';
import ScrollDeckV6 from '../components/v6/ScrollDeckV6';
import DoorAndBloomV6 from '../components/v6/DoorAndBloomV6';
import PillarsV6 from '../components/v6/PillarsV6';
import MotionV6 from '../components/v6/MotionV6';
import TwoPathsV6 from '../components/v6/TwoPathsV6';
import ReachV6 from '../components/v6/ReachV6';
import WhoWeAreV6 from '../components/v6/WhoWeAreV6';
import HeadquartersV6 from '../components/v6/HeadquartersV6';
import BrandsV6 from '../components/v6/BrandsV6';
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

      {/* Main Content Curtain (z-index: 10 over sticky footer) */}
      <div className="v6-main-curtain">
        {/* 2. Hero (Warm Golden Atelier Lighting) */}
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

        {/* 10. Section 07: Who We Are & Heritage Deck (Davaris-Style Stacking Cards) */}
        <WhoWeAreV6 
          id="who-we-are" 
          onOpenDrawer={() => setDrawerOpen(true)} 
        />

        {/* 11. Section 08: Gurugram Head Office & Sampling Campus */}
        <HeadquartersV6 id="headquarters" />

        {/* 12. Section 09: Brands We Work With (Infinite Dual-Track Marquee) */}
        <BrandsV6 id="brands" />

        {/* 12. Section 09: Client Trust & Quotes */}
        <TestimonialsV6 id="testimonials" />

        {/* 12. Section 09: Sticky 2-Column FAQ Accordion */}
        <FAQV6 id="faq" />
      </div>

      {/* 13. Section 10: Warm Red/Orange Editorial Curtain Footer */}
      <FooterV6 onOpenDrawer={() => setDrawerOpen(true)} />

      {/* 14. Slide-out Sourcing Intake Drawer */}
      <SampleDrawerV4 
        isOpen={drawerOpen} 
        onClose={() => setDrawerOpen(false)} 
      />
    </div>
  );
}

