import React, { useState, useRef, useEffect } from 'react';
import './FashionLookbook.css';

const looksData = [
  // ─── CLOTHING & TAILORING ────────────────────────────────
  {
    id: 1,
    category: 'clothing',
    tag: 'LOOK 01',
    title: 'STRUCTURED OVERCOAT',
    material: 'Virgin Wool & Cashmere',
    weight: '480 GSM Double-Face',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
    altImage: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'clothing',
    tag: 'LOOK 02',
    title: 'MINIMALIST DRAPE SILK',
    material: 'Mulberry Silk & Viscose',
    weight: '22mm Liquid Charmeuse',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
    altImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'clothing',
    tag: 'LOOK 03',
    title: 'RAW SELVEDGE DENIM',
    material: 'Organic Shuttle-Loomed Selvedge',
    weight: '13.5 oz Vintage Indigo',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
    altImage: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 4,
    category: 'clothing',
    tag: 'LOOK 04',
    title: 'AVANT-GARDE TRENCH',
    material: 'High-Density Combed Gabardine',
    weight: '340 GSM Water-Repellent',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop',
    altImage: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop'
  },

  // ─── BAGS & LEATHER ACCESSORIES ──────────────────────────
  {
    id: 5,
    category: 'bags',
    tag: 'BAG 01',
    title: 'MINIMALIST LEATHER TOTE',
    material: 'Full-Grain Tuscan Calfskin',
    weight: 'Edge-Painted Handcrafted',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop',
    altImage: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 6,
    category: 'bags',
    tag: 'BAG 02',
    title: 'STRUCTURED CROSSBODY',
    material: 'Vegetable-Tanned Saddle Leather',
    weight: 'Custom Polished Brass Closure',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop',
    altImage: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 7,
    category: 'bags',
    tag: 'BAG 03',
    title: 'CANVAS WEEKENDER DUFFLE',
    material: '24oz Heavy Duty Waxed Duck Canvas',
    weight: 'Reinforced Bridal Leather Straps',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop',
    altImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 8,
    category: 'bags',
    tag: 'BAG 04',
    title: 'AVANT-GARDE CLUTCH',
    material: 'Crinkled Metallic Nappa Leather',
    weight: 'Concealed Magnetic Bar System',
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1200&auto=format&fit=crop',
    altImage: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function FashionLookbook({ theme = 'light' }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeLook, setActiveLook] = useState(null);
  const streamRef = useRef(null);

  // Filtered items based on tab
  const filteredLooks = looksData.filter((item) => {
    if (selectedFilter === 'all') return true;
    return item.category === selectedFilter;
  });

  // Smooth slide function for arrows
  const slide = (direction) => {
    if (!streamRef.current) return;
    const distance = 360;
    streamRef.current.scrollBy({
      left: direction === 'next' ? distance : -distance,
      behavior: 'smooth'
    });
  };

  // Drag to scroll logic
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    if (!streamRef.current) return;
    isDown.current = true;
    streamRef.current.classList.add('grabbing');
    startX.current = e.pageX - streamRef.current.offsetLeft;
    scrollLeft.current = streamRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    if (!streamRef.current) return;
    isDown.current = false;
    streamRef.current.classList.remove('grabbing');
  };

  const handleMouseMove = (e) => {
    if (!isDown.current || !streamRef.current) return;
    e.preventDefault();
    const x = e.pageX - streamRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    streamRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Convert mouse wheel into smooth horizontal scroll
  useEffect(() => {
    const el = streamRef.current;
    if (!el) return;

    const onWheel = (e) => {
      // If user is rolling vertically on the lookbook stream, slide horizontally
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const atStart = el.scrollLeft <= 5;
        const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 5;

        // If inside boundaries, prevent vertical window scroll and slide lookbook
        if ((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atStart)) {
          e.preventDefault();
          el.scrollLeft += e.deltaY * 1.2;
        }
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [filteredLooks]);

  return (
    <section className={`lookbook-section ${theme === 'dark' ? 'lookbook-dark' : 'lookbook-light'}`} id="lookbook">
      <div className="container lookbook-head-container">
        
        {/* Top Header Row */}
        <div className="lookbook-head">
          <div className="lookbook-head-left">
            <span className="lookbook-kicker">SEASONAL CURATION — AUTUMN / WINTER '26</span>
            <h2 className="lookbook-title">
              The Sourcing <em>Lookbook</em>.
            </h2>
          </div>

          <div className="lookbook-head-right">
            {/* Category Filter Pills (Clothing & Bags) */}
            <div className="lookbook-filter-tabs">
              <button
                type="button"
                className={`filter-tab-pill ${selectedFilter === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('all')}
              >
                ALL ({looksData.length})
              </button>
              <button
                type="button"
                className={`filter-tab-pill ${selectedFilter === 'clothing' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('clothing')}
              >
                CLOTHING (04)
              </button>
              <button
                type="button"
                className={`filter-tab-pill ${selectedFilter === 'bags' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('bags')}
              >
                BAGS & ACCESSORIES (04)
              </button>
            </div>

            {/* Navigation Arrows */}
            <div className="lookbook-arrows-wrap">
              <button
                type="button"
                className="lookbook-nav-arrow"
                onClick={() => slide('prev')}
                aria-label="Previous"
              >
                ←
              </button>
              <button
                type="button"
                className="lookbook-nav-arrow"
                onClick={() => slide('next')}
                aria-label="Next"
              >
                →
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Horizontal Carousel Stream */}
      <div
        className="lookbook-stream"
        ref={streamRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        {filteredLooks.map((item) => (
          <div
            key={item.id}
            className={`lookbook-card ${activeLook === item.id ? 'active' : ''}`}
            onMouseEnter={() => setActiveLook(item.id)}
            onMouseLeave={() => setActiveLook(null)}
          >
            <div className="lookbook-img-box">
              <img
                src={activeLook === item.id ? item.altImage : item.image}
                alt={item.title}
                className="lookbook-photo"
                draggable={false}
              />
              <div className="lookbook-card-tags">
                <span className="card-look-badge">{item.tag}</span>
                <span className="card-weight-badge">{item.weight}</span>
              </div>
              <div className="lookbook-swap-hint">
                <span>{activeLook === item.id ? 'MACRO DETAIL' : 'HOVER TO INSPECT'}</span>
              </div>
            </div>

            <div className="lookbook-card-meta">
              <span className="card-meta-category">
                {item.category === 'bags' ? 'LEATHER & ACCESSORIES' : 'APPAREL & TAILORING'}
              </span>
              <h3 className="card-meta-title">{item.title}</h3>
              <span className="card-meta-material">{item.material}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Hint */}
      <div className="container lookbook-bottom-hint">
        <span className="hint-scroll-indicator">
          ↔ Scroll horizontally, drag cards or click arrows above
        </span>
      </div>

    </section>
  );
}
