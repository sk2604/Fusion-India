import React, { useState } from 'react';
import './ServicesV1.css';

const services = [
  {
    id: 1,
    title: 'GLOBAL SOURCING',
    desc: 'Connecting you with the finest manufacturing hubs across the Indian Sub-Continent. We ensure the right product from the right source.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=50&w=800&auto=format&fit=crop',
    number: '01'
  },
  {
    id: 2,
    title: 'DESIGN & DEV',
    desc: 'Our in-house experts translate global trends into market-ready collections, ensuring your brand stays ahead of the curve.',
    image: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=50&w=800&auto=format&fit=crop',
    number: '02'
  },
  {
    id: 3,
    title: 'QUALITY ASSURANCE',
    desc: 'Rigorous inline and final inspections. We uphold the highest standards of quality control so your performance never drops.',
    image: 'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=800',
    number: '03'
  },
  {
    id: 4,
    title: 'COMPLIANCE & ESG',
    desc: 'Committed to ethical manufacturing and sustainable practices. We ensure every factory meets strict global compliance standards.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=50&w=800&auto=format&fit=crop',
    number: '04'
  }
];

export default function ServicesV1() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="expertise-section-v1">
      <div className="container">
        <div className="expertise-header-v1">
          <h2 className="text-title">OUR EXPERTISE.</h2>
          <p className="expertise-subtitle-v1">Elevating brands through precision, innovation, and unwavering standards.</p>
        </div>
        
        <div className="expertise-cards-container-v1">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`expertise-card-v1 ${activeIndex === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className="card-overlay-v1"></div>
              <div className="card-content-v1">
                <div className="card-number-v1">{service.number}</div>
                <div className="card-text-v1">
                  <h3>{service.title}</h3>
                  <p className="card-desc-v1">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

