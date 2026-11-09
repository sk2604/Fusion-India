import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import ClothingRack from '../components/ClothingRack';
import About from '../components/About';
import ServicesV1 from '../components/ServicesV1';
import Products from '../components/Products';
import GlobalPresenceV1 from '../components/GlobalPresenceV1';
import OfficeGalleryV1 from '../components/OfficeGalleryV1';

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

export default function HomeV1() {
  return (
    <div>
      <Hero />
      <ClothingRack />
      <GlobalPresenceV1 />
      <RevealWrapper>
        <About />
      </RevealWrapper>
      <RevealWrapper>
        <ServicesV1 />
      </RevealWrapper>
      <RevealWrapper>
        <Products />
      </RevealWrapper>
      <RevealWrapper>
        <OfficeGalleryV1 />
      </RevealWrapper>
    </div>
  );
}

