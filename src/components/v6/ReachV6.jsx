import React, { useState, useRef, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ReachV6.css';

gsap.registerPlugin(ScrollTrigger);

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const hubs = [
  {
    id: 'in',
    name: 'India (HQ)',
    city: 'Gurugram',
    countryLabel: 'INDIA (HQ)',
    subLabel: 'Gurugram • QA Powerhouse',
    role: 'Manufacturing & QA Powerhouse',
    detail: 'Corporate headquarters, CAD pattern labs, and 500+ audited factory network delivering ethical volume production.',
    coordinates: [78.9629, 20.5937],
    labelDx: 18,
    labelDy: -20,
    boxWidth: 180,
    isHQ: true
  },
  {
    id: 'de',
    name: 'Germany',
    city: 'Hamburg',
    countryLabel: 'GERMANY',
    subLabel: 'Hamburg • Logistics Hub',
    role: 'European Logistics & Sourcing',
    detail: 'Central European logistics node ensuring rapid warehousing, customs clearance, and duty-paid dock delivery.',
    coordinates: [10.4515, 51.1657],
    labelDx: -192,
    labelDy: -28,
    boxWidth: 178,
    isHQ: false
  },
  {
    id: 'sca',
    name: 'Scandinavia',
    city: 'Copenhagen',
    countryLabel: 'SCANDINAVIA',
    subLabel: 'Copenhagen • Design Office',
    role: 'Design & Sourcing Hub',
    detail: 'Nordic design partnerships, seasonal forecasting, and technical buyer relations for contemporary labels.',
    coordinates: [12.5683, 55.6761],
    labelDx: 18,
    labelDy: -44,
    boxWidth: 188,
    isHQ: false
  },
  {
    id: 'na',
    name: 'North America',
    city: 'New York',
    countryLabel: 'NORTH AMERICA',
    subLabel: 'New York • Retail Accounts',
    role: 'Retail & Distribution Partners',
    detail: 'Strategic retail accounts, replenishment logistics, and fulfillment channels across USA and Canada.',
    coordinates: [-74.0060, 40.7128],
    labelDx: -204,
    labelDy: -24,
    boxWidth: 190,
    isHQ: false
  }
];

export default function ReachV6({ id = 'reach' }) {
  const [activeHub, setActiveHub] = useState('in');
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const currentHub = hubs.find(h => h.id === activeHub) || hubs[0];

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=750',
          pin: true,
          anticipatePin: 1,
          scrub: 0.5,
        }
      });

      tl.fromTo(content,
        { opacity: 0.2, y: 30, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.6, ease: 'power2.out' },
        0
      );

      tl.to({}, { duration: 0.4 });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="v6-page-surface-dark v6-reach-section" id={id} ref={sectionRef} data-nav-theme="dark">
      <div className="v6-reach-viewport-stage" ref={contentRef}>
        
        <div className="v6-reach-layout">
          
          {/* ─── LEFT COLUMN: V1 EDITORIAL AUTHORITY & STATS ─── */}
          <div className="v6-reach-col-text">
            
            <div className="v6-reach-badge">
              <span className="v6-reach-red-dot" />
              <span>GLOBAL FOOTPRINT // EST. 1998</span>
            </div>

            <h2 className="v6-reach-heading">
              Our reach<span className="text-red-500">.</span>
            </h2>

            <p className="v6-reach-intro">
              Direct operations connecting European and North American retail partners to precision manufacturing hubs across India. Audited tier-1 mills, zero-tolerance AQL 1.5 standards, and direct DDP shipping.
            </p>

            {/* V1 3-Column Stats Row */}
            <div className="v6-reach-stats-row">
              <div className="v6-r-stat-block">
                <span className="v6-r-stat-val">04<sup>+</sup></span>
                <span className="v6-r-stat-txt">Strategic Hubs</span>
              </div>
              <div className="v6-r-stat-line" />
              <div className="v6-r-stat-block">
                <span className="v6-r-stat-val">20<sup>+</sup></span>
                <span className="v6-r-stat-txt">Countries Served</span>
              </div>
              <div className="v6-r-stat-line" />
              <div className="v6-r-stat-block">
                <span className="v6-r-stat-val">500<sup>+</sup></span>
                <span className="v6-r-stat-txt">Audited Mills</span>
              </div>
            </div>

            {/* Interactive 4 Hub Selector Tabs */}
            <div className="v6-reach-tabs-list" role="tablist">
              {hubs.map((hub) => (
                <button
                  key={hub.id}
                  type="button"
                  role="tab"
                  aria-selected={activeHub === hub.id}
                  className={`v6-reach-tab-btn ${activeHub === hub.id ? 'active' : ''}`}
                  onClick={() => setActiveHub(hub.id)}
                >
                  <span className={`v6-tab-pip ${hub.isHQ ? 'hq' : ''}`} />
                  <span className="v6-tab-btn-title">{hub.name}</span>
                </button>
              ))}
            </div>

            {/* Active Hub Deep Detail Card */}
            <div className="v6-reach-detail-card">
              <div className="v6-detail-top">
                <span className="v6-detail-city">{currentHub.city}</span>
                <span className="v6-detail-sep">/</span>
                <span className="v6-detail-role">{currentHub.role}</span>
              </div>
              <p className="v6-detail-body">{currentHub.detail}</p>
            </div>

          </div>

          {/* ─── RIGHT COLUMN: BORDERLESS MASSIVE MAP STAGE ─── */}
          <div className="v6-reach-col-map">
            <div className="v6-map-canvas-wrap">
              <ComposableMap
                projectionConfig={{ scale: 235, center: [16, 25] }}
                width={1000}
                height={580}
                className="v6-reach-svg"
              >
                {/* World Landmasses with High Definition Dark Contrast */}
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#1c1c26"
                        stroke="#2f2f3d"
                        strokeWidth={0.7}
                        style={{
                          default: { outline: 'none', transition: 'fill 0.2s ease' },
                          hover: { fill: '#282836', outline: 'none' },
                          pressed: { outline: 'none' },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {/* Country Pins with Permanent High-Contrast SVG Labels */}
                {hubs.map((hub) => {
                  const isActive = activeHub === hub.id;
                  return (
                    <Marker
                      key={hub.id}
                      coordinates={hub.coordinates}
                      onClick={() => setActiveHub(hub.id)}
                      className="v6-map-marker-item"
                    >
                      {/* Pulse Wave Animation */}
                      <circle
                        r={hub.isHQ ? 16 : 11}
                        className={hub.isHQ ? "v6-pulse-hq" : "v6-pulse-sub"}
                      />

                      {/* Main Center Dot */}
                      <circle
                        r={hub.isHQ ? 6.5 : 4.8}
                        fill={hub.isHQ ? '#e50914' : isActive ? '#ffffff' : '#dddddd'}
                      />
                      <circle r={2} fill="#000000" />

                      {/* Connecting Hairline */}
                      <line
                        x1={0}
                        y1={0}
                        x2={hub.labelDx > 0 ? 12 : -12}
                        y2={hub.labelDy > 0 ? 10 : -10}
                        stroke={hub.isHQ ? '#e50914' : 'rgba(255, 255, 255, 0.55)'}
                        strokeWidth={1}
                        strokeDasharray="2,2"
                      />

                      {/* Permanent High-Contrast Badge with Country Name */}
                      <g
                        transform={`translate(${hub.labelDx}, ${hub.labelDy})`}
                        className={`v6-map-badge-group ${isActive ? 'is-active' : ''}`}
                      >
                        {/* Background Card */}
                        <rect
                          x="0"
                          y="0"
                          width={hub.boxWidth}
                          height="36"
                          rx="5"
                          fill={isActive ? "rgba(24, 24, 32, 0.98)" : "rgba(12, 12, 16, 0.94)"}
                          stroke={hub.isHQ ? "#e50914" : isActive ? "#ffffff" : "rgba(255, 255, 255, 0.32)"}
                          strokeWidth={hub.isHQ || isActive ? "1.6" : "1"}
                          filter="drop-shadow(0 6px 14px rgba(0,0,0,0.85))"
                        />

                        {/* Accent Left Bar */}
                        <rect
                          x="0"
                          y="0"
                          width="4"
                          height="36"
                          rx="1.5"
                          fill={hub.isHQ ? "#e50914" : isActive ? "#ffffff" : "rgba(255, 255, 255, 0.6)"}
                        />

                        {/* Country Name (Always Bold and Visible) */}
                        <text
                          x="12"
                          y="15"
                          fill="#ffffff"
                          className="v6-svg-country-name"
                        >
                          {hub.countryLabel}
                        </text>

                        {/* City / Role Subtitle */}
                        <text
                          x="12"
                          y="27"
                          fill={isActive ? (hub.isHQ ? "#ff4d58" : "#ffffff") : "#a6a6b0"}
                          className="v6-svg-country-sub"
                        >
                          {hub.subLabel}
                        </text>
                      </g>
                    </Marker>
                  );
                })}
              </ComposableMap>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
