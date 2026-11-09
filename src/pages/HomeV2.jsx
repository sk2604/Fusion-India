import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import Services from '../components/Services';
import GlobalPresence from '../components/GlobalPresence';
import OfficeGallery from '../components/OfficeGallery';
import BrandsSection from '../components/BrandsSection';
import StatsManifesto from '../components/StatsManifesto';

gsap.registerPlugin(ScrollTrigger);

const RevealWrapper = ({ children }) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(el, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: "top 85%", 
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default function HomeV2() {
  return (
    <div>
      <Hero />
      <StatsManifesto />
      <GlobalPresence />
      <RevealWrapper>
        <Services />
      </RevealWrapper>
      <RevealWrapper>
        <OfficeGallery />
      </RevealWrapper>
      <RevealWrapper>
        <BrandsSection />
      </RevealWrapper>
    </div>
  );
}
