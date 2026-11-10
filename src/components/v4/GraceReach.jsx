import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import './GraceReach.css';

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const hubs = [
  {
    id: 'na',
    name: "NORTH AMERICA",
    coordinates: [-95.7129, 37.0902],
    boxX: -125,
    boxY: -30,
    boxWidth: 120,
    lineX: -8,
    lineY: -8,
    isHQ: false
  },
  {
    id: 'de',
    name: "GERMANY",
    coordinates: [10.4515, 51.1657],
    boxX: -95,
    boxY: 10,
    boxWidth: 85,
    lineX: -6,
    lineY: 6,
    isHQ: false
  },
  {
    id: 'sca',
    name: "SCANDINAVIA",
    coordinates: [14.3986, 61.6422],
    boxX: 16,
    boxY: -26,
    boxWidth: 100,
    lineX: 10,
    lineY: -6,
    isHQ: false
  },
  {
    id: 'in',
    name: "★ INDIA (HQ)",
    coordinates: [78.9629, 20.5937],
    boxX: 18,
    boxY: -8,
    boxWidth: 110,
    lineX: 12,
    lineY: 0,
    isHQ: true
  }
];

export default function GraceReach({ id = 'reach' }) {
  return (
    <section className="page-surface grace-reach-section" id={id}>
      <div className="grace-container grace-px">
        <div className="grace-reach-split-grid">
          
          {/* Left Column: Minimal Typography & Stats */}
          <div className="grace-reach-left-col">
            <span className="label text-neutral-400">GLOBAL FOOTPRINT</span>
            
            <h2 className="headline-xl text-black mt-3">
              Our Reach<span className="text-red-500">.</span>
            </h2>

            <p className="body-large text-neutral-500 mt-5 max-w-[42ch]">
              Operating across Scandinavia, Germany, North America, and our manufacturing core in India — bringing European design discipline together with audited ethical scale.
            </p>

            {/* 3 Metric Rows with Clean Top Borders */}
            <div className="grace-reach-stats-grid">
              
              <div className="grace-reach-stat-item">
                <span className="headline-large text-black tabular-nums">04<sup>+</sup></span>
                <span className="label text-neutral-400 mt-2">GLOBAL STRATEGIC HUBS</span>
              </div>

              <div className="grace-reach-stat-item">
                <span className="headline-large text-black tabular-nums">20<sup>+</sup></span>
                <span className="label text-neutral-400 mt-2">COUNTRIES SERVED</span>
              </div>

              <div className="grace-reach-stat-item">
                <span className="headline-large text-black tabular-nums">500<sup>+</sup></span>
                <span className="label text-neutral-400 mt-2">AUDITED TIER-1 MILLS</span>
              </div>

            </div>

            {/* Hub Details Pills */}
            <div className="grace-reach-hubs-list">
              <span className="grace-hub-tag">GURUGRAM HQ // 40,000 SQ.FT CAMPUS</span>
              <span className="grace-hub-tag">HAMBURG</span>
              <span className="grace-hub-tag">COPENHAGEN</span>
              <span className="grace-hub-tag">NEW YORK</span>
            </div>

          </div>

          {/* Right Column: High-Contrast World Map */}
          <div className="grace-reach-right-col">
            <div className="grace-reach-map-wrapper">
              <ComposableMap
                projectionConfig={{ scale: 175, center: [10, 20] }}
                width={800}
                height={460}
                style={{ width: "100%", height: "auto", maxHeight: "460px" }}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#0a0a0a"
                        stroke="#262626"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { fill: "#1f1f1f", outline: "none" },
                          pressed: { outline: "none" }
                        }}
                      />
                    ))
                  }
                </Geographies>

                {hubs.map((m) => (
                  <Marker key={m.id} coordinates={m.coordinates}>
                    {/* Pulsing Beacon Wave */}
                    <circle
                      r={m.isHQ ? 7 : 5}
                      className={m.isHQ ? "grace-pulse-hq" : "grace-pulse-sub"}
                    />

                    {/* Core Marker */}
                    <circle
                      r={m.isHQ ? 4 : 3}
                      fill={m.isHQ ? '#e50914' : '#ffffff'}
                    />
                    <circle
                      r={1.2}
                      fill="#ffffff"
                    />

                    {/* Hairline Pointer */}
                    <line
                      x1={0}
                      y1={0}
                      x2={m.lineX}
                      y2={m.lineY}
                      stroke={m.isHQ ? '#e50914' : 'rgba(255,255,255,0.45)'}
                      strokeWidth={0.8}
                      strokeDasharray="2,2"
                    />

                    {/* Floating Capsule Badge */}
                    <g transform={`translate(${m.boxX}, ${m.boxY})`}>
                      <rect
                        x="0"
                        y="0"
                        width={m.boxWidth}
                        height="22"
                        rx="4"
                        fill={m.isHQ ? '#e50914' : '#ffffff'}
                        stroke={m.isHQ ? '#e50914' : 'rgba(0,0,0,0.1)'}
                        strokeWidth="0.8"
                        filter="drop-shadow(0 2px 6px rgba(0,0,0,0.12))"
                      />
                      <text
                        x={m.boxWidth / 2}
                        y="15"
                        textAnchor="middle"
                        fill={m.isHQ ? '#ffffff' : '#0a0a0a'}
                        className="grace-badge-text"
                      >
                        {m.name}
                      </text>
                    </g>
                  </Marker>
                ))}
              </ComposableMap>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

