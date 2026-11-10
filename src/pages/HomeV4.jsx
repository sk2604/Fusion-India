import React, { useState, useEffect } from 'react';
import HeroV4 from '../components/v4/HeroV4';
import StudioPlaygroundV4 from '../components/v4/StudioPlaygroundV4';
import BentoGridV4 from '../components/v4/BentoGridV4';
import WorkflowV4 from '../components/v4/WorkflowV4';
import ReachTelemetryV4 from '../components/v4/ReachTelemetryV4';
import BrandTrustV4 from '../components/v4/BrandTrustV4';
import SampleDrawerV4 from '../components/v4/SampleDrawerV4';
import './HomeV4.css';

export default function HomeV4() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToStudio = () => {
    const el = document.getElementById('studio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-v4-wrap">
      {/* 1. Hero */}
      <HeroV4 
        onOpenStudio={scrollToStudio} 
        onOpenModal={() => setDrawerOpen(true)} 
      />

      {/* 2. Interactive AI Studio Playground (Flagship Feature) */}
      <StudioPlaygroundV4 
        id="studio" 
        onOpenModal={() => setDrawerOpen(true)} 
      />

      {/* 3. Bento Capability Grid */}
      <BentoGridV4 />

      {/* 4. 3-Step Operating Protocol */}
      <WorkflowV4 />

      {/* 5. Global Reach & Telemetry */}
      <ReachTelemetryV4 />

      {/* 6. Brand Trust & Certifications */}
      <BrandTrustV4 />

      {/* 7. Slide-Out Inquiry Drawer */}
      <SampleDrawerV4 
        isOpen={drawerOpen} 
        onClose={() => setDrawerOpen(false)} 
      />
    </div>
  );
}
