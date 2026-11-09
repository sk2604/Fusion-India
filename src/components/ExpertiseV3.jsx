import React, { useState } from 'react';
import './ExpertiseV3.css';

const capabilities = [
  {
    id: 1,
    num: '01',
    title: 'GLOBAL SOURCING',
    category: 'RAW MATERIALS & SUPPLY CHAIN',
    desc: 'Connecting global fashion brands with verified manufacturing mills across India, Bangladesh, and Sri Lanka. Seamless procurement of organic cotton, linen, silk, and performance blends.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    tags: ['500+ Partner Mills', 'Raw Material Procurement', 'Tariff & Logistics']
  },
  {
    id: 2,
    num: '02',
    title: 'DESIGN & DEVELOPMENT',
    category: 'SEASONAL COLLECTIONS & 3D PROTO',
    desc: 'Our in-house creative studios translate European runway and streetwear trends into production-ready collections. Rapid digital prototyping, mood boards, and physical sample rooms.',
    image: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=1200&auto=format&fit=crop',
    tags: ['Trend Forecasting', 'CAD & 3D Prototyping', 'Custom Embellishments']
  },
  {
    id: 3,
    num: '03',
    title: 'QUALITY ASSURANCE',
    category: 'INLINE AUDITS & LAB TESTING',
    desc: 'Zero-tolerance QA across all production phases. Certified in-house textile testing labs verifying colorfastness, shrinkage, tensile strength, and seam integrity before shipment.',
    image: 'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['AQL 2.5 Standards', 'Physical & Chemical Testing', '100% Inline Audits']
  },
  {
    id: 4,
    num: '04',
    title: 'SUSTAINABILITY & ESG',
    category: 'ETHICAL MILLS & CIRCULAR FASHION',
    desc: 'Championing responsible manufacturing. Partnering exclusively with factories committed to fair wages, closed-loop water treatment, renewable solar power, and zero toxic effluents.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop',
    tags: ['GOTS & OEKO-TEX Certified', 'Zero Liquid Discharge', 'Fair Labour Practices']
  }
];

export default function ExpertiseV3() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="expertise-v3">
      <div className="container">
        
        {/* Header */}
        <div className="expertise-v3-header">
          <div className="expertise-v3-title-wrap">
            <span className="expertise-v3-eyebrow">WHAT WE EXCEL AT</span>
            <h2 className="expertise-v3-title">
              OUR CAPABILITIES<span className="title-dot">.</span>
            </h2>
          </div>
          <p className="expertise-v3-desc">
            Elevating global fashion brands through end-to-end design innovation, precision manufacturing, and uncompromising quality standards.
          </p>
        </div>

        {/* Visual Expanding Cards */}
        <div className="expertise-v3-cards">
          {capabilities.map((cap, idx) => (
            <div
              key={cap.id}
              className={`cap-card ${activeCard === idx ? 'active' : ''}`}
              onMouseEnter={() => setActiveCard(idx)}
              style={{ backgroundImage: `url(${cap.image})` }}
            >
              <div className="cap-overlay" />
              
              <div className="cap-content">
                <div className="cap-top">
                  <span className="cap-num">{cap.num}</span>
                  <span className="cap-category">{cap.category}</span>
                </div>

                <div className="cap-bottom">
                  <h3 className="cap-title">{cap.title}</h3>
                  <p className="cap-desc">{cap.desc}</p>
                  
                  <div className="cap-tags">
                    {cap.tags.map((t, i) => (
                      <span key={i} className="cap-tag-pill">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
