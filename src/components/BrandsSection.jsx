import React from 'react';
import './BrandsSection.css';

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

export default function BrandsSection() {
  return (
    <section className="brands-section">
      <div className="container">

        <div className="brands-header">
          <span className="brands-eyebrow">Trusted By</span>
          <h2 className="text-title">BRANDS WE WORK WITH.</h2>
        </div>

        {/* Infinite scrolling ticker */}
        <div className="brands-ticker-wrap">
          <div className="brands-ticker">
            {[...brands, ...brands, ...brands].map((brand, i) => (
              <div key={i} className="brand-pill">
                <span>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Logo grid */}
        <div className="brands-logo-grid">
          {brands.map((brand, i) => (
            <div key={i} className="brand-logo-cell">
              <img
                src={brand.logo}
                alt={brand.name}
                className="brand-logo-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="brand-logo-fallback">{brand.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
