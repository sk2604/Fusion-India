import React from 'react';
import './ReachV5.css';

const hubs = [
  {
    id: 'in',
    name: "★ INDIA (HQ)",
    sub: "Gurugram 40,000 sq.ft Atelier",
    isHQ: true,
    cx: 690,
    cy: 230
  },
  {
    id: 'de',
    name: "GERMANY",
    sub: "Hamburg Port & Showroom",
    isHQ: false,
    cx: 505,
    cy: 145
  },
  {
    id: 'sca',
    name: "SCANDINAVIA",
    sub: "Copenhagen Logistics Hub",
    isHQ: false,
    cx: 520,
    cy: 115
  },
  {
    id: 'na',
    name: "NORTH AMERICA",
    sub: "New York Client Services",
    isHQ: false,
    cx: 260,
    cy: 175
  }
];

export default function ReachV5({ id = 'reach' }) {
  return (
    <section className="v5-page-surface-white v5-reach-section" id={id}>
      <div className="v5-container v5-px v5-reach-container">
        <div className="v5-reach-split-grid">
          
          {/* Left Column: Minimal Typography & Stats */}
          <div className="v5-reach-left-col">
            <span className="label text-neutral-400">GLOBAL FOOTPRINT</span>
            
            <h2 className="v5-reach-title text-black mt-3">
              Our Reach<span className="text-red-600">.</span>
            </h2>

            <p className="body-large text-neutral-500 mt-4 max-w-[42ch]">
              Operating across Scandinavia, Germany, North America, and our manufacturing core in India — bridging European design discipline with audited ethical scale.
            </p>

            {/* 3 Metric Rows */}
            <div className="v5-reach-stats-grid">
              <div className="v5-reach-stat-item">
                <span className="v5-stat-num text-black tabular-nums">04<sup>+</sup></span>
                <span className="label text-neutral-400 mt-2">GLOBAL HUBS</span>
              </div>

              <div className="v5-reach-stat-item">
                <span className="v5-stat-num text-black tabular-nums">20<sup>+</sup></span>
                <span className="label text-neutral-400 mt-2">COUNTRIES SERVED</span>
              </div>

              <div className="v5-reach-stat-item">
                <span className="v5-stat-num text-black tabular-nums">500<sup>+</sup></span>
                <span className="label text-neutral-400 mt-2">AUDITED MILLS</span>
              </div>
            </div>

            {/* Hub Details Pills */}
            <div className="v5-reach-hubs-list">
              <span className="v5-hub-pill">GURUGRAM HQ // 40,000 SQ.FT CAMPUS</span>
              <span className="v5-hub-pill">HAMBURG</span>
              <span className="v5-hub-pill">COPENHAGEN</span>
              <span className="v5-hub-pill">NEW YORK</span>
            </div>
          </div>

          {/* Right Column: High-Contrast World Map SVG */}
          <div className="v5-reach-right-col">
            <div className="v5-reach-map-box">
              <svg 
                viewBox="0 0 1000 500" 
                className="v5-reach-svg-map"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Subtle Grid Pattern */}
                  <pattern id="v5-map-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <circle cx="15" cy="15" r="1" fill="rgba(255,255,255,0.08)" />
                  </pattern>
                  <linearGradient id="v5-route-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e50914" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* Map Base Canvas */}
                <rect width="1000" height="500" fill="#0a0a0a" rx="12" />
                <rect width="1000" height="500" fill="url(#v5-map-grid)" rx="12" />

                {/* Stylized Simplified Continents Outlines */}
                <g fill="#181818" stroke="#2a2a2a" strokeWidth="1">
                  {/* North America */}
                  <path d="M 120 70 L 320 80 L 340 180 L 290 220 L 220 280 L 170 240 L 150 160 Z" />
                  {/* South America */}
                  <path d="M 280 290 L 380 320 L 340 440 L 290 470 L 260 380 Z" />
                  {/* Europe */}
                  <path d="M 460 90 L 580 90 L 590 170 L 530 200 L 450 170 Z" />
                  {/* Africa */}
                  <path d="M 470 210 L 590 220 L 610 330 L 540 420 L 480 330 Z" />
                  {/* Asia & India */}
                  <path d="M 600 80 L 880 90 L 910 230 L 780 290 L 680 260 L 640 190 Z" />
                  {/* Australia */}
                  <path d="M 770 340 L 890 350 L 870 440 L 780 430 Z" />
                </g>

                {/* Shipping / Flight Arcs connecting India HQ to Europe and NA */}
                {/* India (690, 230) -> Hamburg (505, 145) */}
                <path 
                  d="M 690 230 Q 600 140 505 145" 
                  fill="none" 
                  stroke="url(#v5-route-grad)" 
                  strokeWidth="2" 
                  strokeDasharray="6,4"
                  className="v5-dash-flow"
                />
                {/* India (690, 230) -> Copenhagen (520, 115) */}
                <path 
                  d="M 690 230 Q 610 120 520 115" 
                  fill="none" 
                  stroke="url(#v5-route-grad)" 
                  strokeWidth="1.5" 
                  strokeDasharray="5,5"
                  className="v5-dash-flow"
                />
                {/* India (690, 230) -> New York (260, 175) via Atlantic */}
                <path 
                  d="M 690 230 Q 480 80 260 175" 
                  fill="none" 
                  stroke="url(#v5-route-grad)" 
                  strokeWidth="1.5" 
                  strokeDasharray="6,4"
                  className="v5-dash-flow"
                />

                {/* Hub Markers and Pins */}
                {hubs.map((hub) => (
                  <g key={hub.id} transform={`translate(${hub.cx}, ${hub.cy})`}>
                    {/* Pulsing ring for HQ */}
                    {hub.isHQ && (
                      <circle r="14" fill="none" stroke="#e50914" strokeWidth="1.5" className="v5-ping-ring" opacity="0.6" />
                    )}
                    <circle 
                      r={hub.isHQ ? 7 : 5} 
                      fill={hub.isHQ ? '#e50914' : '#ffffff'} 
                      stroke="#000000" 
                      strokeWidth="1.5"
                    />
                    
                    {/* Badge Label */}
                    <g transform={`translate(${hub.isHQ ? 14 : 10}, ${hub.isHQ ? -10 : -8})`}>
                      <rect 
                        x="0" 
                        y="0" 
                        width={hub.isHQ ? 140 : 110} 
                        height="26" 
                        rx="4" 
                        fill={hub.isHQ ? '#e50914' : 'rgba(255,255,255,0.92)'} 
                        boxShadow="0 4px 12px rgba(0,0,0,0.5)"
                      />
                      <text 
                        x="10" 
                        y="14" 
                        fill={hub.isHQ ? '#ffffff' : '#000000'} 
                        fontSize="10" 
                        fontWeight="700" 
                        fontFamily="var(--v5-font-sans)"
                        letterSpacing="0.05em"
                      >
                        {hub.name}
                      </text>
                      <text 
                        x="10" 
                        y="22" 
                        fill={hub.isHQ ? 'rgba(255,255,255,0.8)' : '#666666'} 
                        fontSize="7" 
                        fontFamily="var(--v5-font-sans)"
                      >
                        {hub.sub}
                      </text>
                    </g>
                  </g>
                ))}
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
