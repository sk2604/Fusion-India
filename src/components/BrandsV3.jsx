import React from 'react';
import './BrandsV3.css';

const brands = [
  { name: 'H&M',        logo: 'https://logo.clearbit.com/hm.com' },
  { name: 'Zara',       logo: 'https://logo.clearbit.com/zara.com' },
  { name: 'Next',       logo: 'https://logo.clearbit.com/next.co.uk' },
  { name: 'Mango',      logo: 'https://logo.clearbit.com/mango.com' },
  { name: 'Bestseller', logo: 'https://logo.clearbit.com/bestseller.com' },
  { name: 'Jack & Jones',logo: 'https://logo.clearbit.com/jackjones.com' },
  { name: 'Only',       logo: 'https://logo.clearbit.com/only.com' },
  { name: 'Vero Moda',  logo: 'https://logo.clearbit.com/veromoda.com' },
  { name: 'Esprit',     logo: 'https://logo.clearbit.com/esprit.com' },
  { name: 'Tom Tailor', logo: 'https://logo.clearbit.com/tom-tailor.de' },
];

export default function BrandsV3({ theme = 'light' }) {
  const isDark = theme === 'dark';

  return (
    <section className={`brands-v3 ${isDark ? 'brands-dark' : 'brands-light'}`}>
      <div className="container brands-container">

        {/* Header */}
        <div className="brands-v3-header">
          <span className="brands-v3-eyebrow">GLOBAL PARTNERSHIPS</span>
          <h2 className="brands-v3-title">
            BRANDS WE WORK WITH<span className="title-dot">.</span>
          </h2>
          <p className="brands-v3-desc">
            Trusted by Europe and North America’s largest fashion groups to manage end-to-end seasonal production and compliance.
          </p>
        </div>

        {/* Ticker Bar */}
        <div className="brands-v3-ticker-wrap">
          <div className="brands-v3-ticker">
            {[...brands, ...brands, ...brands].map((b, i) => (
              <div key={i} className="ticker-brand-pill">
                <span>{b.name}</span>
                <span className="ticker-dot-v3">·</span>
              </div>
            ))}
          </div>
        </div>

        {/* Logo Grid */}
        <div className="brands-v3-grid">
          {brands.map((b, i) => (
            <div key={i} className="brand-v3-card">
              <img
                src={b.logo}
                alt={b.name}
                className="brand-v3-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="brand-v3-fallback">{b.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
