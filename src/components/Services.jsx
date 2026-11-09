import React, { useState } from 'react';
import './Services.css';

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
    desc: 'Rigorous inline and final inspections. We uphold the highest standards so your performance never drops.',
    image: 'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=800',
    number: '03'
  },
  {
    id: 4,
    title: 'COMPLIANCE & ESG',
    desc: 'Committed to ethical manufacturing and sustainable practices. Every factory meets strict global compliance standards.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=50&w=800&auto=format&fit=crop',
    number: '04'
  }
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(3); // default: last one open like asmara

  return (
    <section className="expertise-section">
      <div className="container">

        {/* Header */}
        <div className="expertise-header">
          <span className="expertise-eyebrow">What We Do</span>
          <h2 className="text-title">OUR EXPERTISE.</h2>
          <p className="expertise-subtitle">
            Elevating brands through precision, innovation, and unwavering standards.
          </p>
        </div>

        {/* Desktop: expanding cards */}
        <div className="expertise-cards-container">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`expertise-card ${activeIndex === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className="card-overlay" />
              <div className="card-content">
                <div className="card-number">{service.number}</div>
                <div className="card-text">
                  <h3>{service.title}</h3>
                  <p className="card-desc">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: accordion list */}
        <div className="expertise-accordion">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`accordion-item ${activeIndex === index ? 'open' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
            >
              <div className="accordion-header">
                <span className="accordion-num">{service.number}</span>
                <h3 className="accordion-title">{service.title}</h3>
                <span className="accordion-arrow">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className="accordion-body">
                <div
                  className="accordion-img"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <p className="accordion-desc">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
