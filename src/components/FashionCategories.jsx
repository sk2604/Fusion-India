import React from 'react';
import './FashionCategories.css';

const categories = [
  {
    num: '01',
    badge: 'APPAREL',
    name: "WOMEN'S ATELIER",
    subtitle: 'Contemporary Silhouettes & Fine Silk Dresses',
    img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop'
  },
  {
    num: '02',
    badge: 'TAILORING',
    name: "MEN'S TAILORING",
    subtitle: 'Italian Wool Suiting & Smart Casual Luxury',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1400&auto=format&fit=crop'
  },
  {
    num: '03',
    badge: 'LEATHER GOODS',
    name: 'BAGS & ACCESSORIES',
    subtitle: 'Handcrafted Tuscan Calfskin Totes & Hardware',
    img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1400&auto=format&fit=crop'
  },
  {
    num: '04',
    badge: 'OUTERWEAR',
    name: 'CIRCULAR DENIM & COATS',
    subtitle: 'Low-Water Selvedge & Double-Face Wool',
    img: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1400&auto=format&fit=crop'
  }
];

export default function FashionCategories({ theme = 'light' }) {
  return (
    <section className={`categories-section ${theme === 'dark' ? 'cat-dark' : 'cat-light'}`}>
      <div className="container cat-container">
        
        {/* Header */}
        <div className="cat-head">
          <div className="cat-head-left">
            <span className="cat-kicker">CORE MANUFACTURING PILLARS</span>
            <h2 className="cat-title">
              Product <em>Specialties</em>.
            </h2>
          </div>
          <div className="cat-head-right">
            <span className="cat-pill-badge">04 SPECIALIZED DIVISIONS</span>
          </div>
        </div>

        {/* 4 Large Visual Portals */}
        <div className="cat-grid">
          {categories.map((c) => (
            <div key={c.num} className="cat-card">
              <div className="cat-img-wrap">
                <img src={c.img} alt={c.name} className="cat-img" />
                <div className="cat-overlay" />
                <div className="cat-floating-tags">
                  <span className="cat-num-badge">{c.num}</span>
                  <span className="cat-division-badge">{c.badge}</span>
                </div>
              </div>

              <div className="cat-text-bar">
                <div className="cat-info">
                  <h3 className="cat-name">{c.name}</h3>
                  <span className="cat-sub">{c.subtitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
