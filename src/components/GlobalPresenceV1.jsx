import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import './GlobalPresenceV1.css';

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const markers = [
  { name: "Scandinavia", coordinates: [14.3986, 61.6422], info: "Design & Sourcing Hub" },
  { name: "Germany", coordinates: [10.4515, 51.1657], info: "European Logistics" },
  { name: "North America", coordinates: [-95.7129, 37.0902], info: "Retail Partners" },
  { name: "India (HQ)", coordinates: [78.9629, 20.5937], info: "Manufacturing & QA" }
];

export default function GlobalPresenceV1() {
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, name: '', info: '' });

  const handleMouseMove = (e) => {
    if (tooltip.show) {
      setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }));
    }
  };

  return (
    <section className="presence-section-v1" onMouseMove={handleMouseMove}>
      <div className="container">
        <div className="presence-content-v1">
          <div className="presence-text-v1">
            <h2 className="text-title">OUR REACH.</h2>
            <p className="presence-desc-v1">
              Operating across Scandinavia, Germany, North America, and our HQ in India. We bring global standards with local expertise, ensuring seamless sourcing and manufacturing worldwide.
            </p>
            <div className="presence-stats-v1">
              <div className="p-stat-v1">
                <h4>4+</h4>
                <span>Global Hubs</span>
              </div>
              <div className="p-stat-v1">
                <h4>20+</h4>
                <span>Countries Served</span>
              </div>
            </div>
          </div>
          
          <div className="map-container-v1">
            <ComposableMap
              projectionConfig={{ scale: 160, center: [0, 20] }}
              width={800}
              height={400}
              style={{ width: "100%", height: "100%" }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#1f1f1f"
                      stroke="#333"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none", transition: 'all 0.4s ease' },
                        hover: { fill: "#333", outline: "none", cursor: "crosshair" },
                        pressed: { outline: "none" }
                      }}
                    />
                  ))
                }
              </Geographies>

              {markers.map(({ name, coordinates, info }) => (
                <Marker 
                  key={name} 
                  coordinates={coordinates}
                  onMouseEnter={(e) => setTooltip({ show: true, x: e.clientX, y: e.clientY, name, info })}
                  onMouseLeave={() => setTooltip({ ...tooltip, show: false })}
                >
                  <circle r={12} fill="transparent" style={{ cursor: 'pointer' }} />
                  <circle r={5} fill="#fff" className="map-pulse-circle-v1" />
                  <circle r={2.5} fill="#fff" style={{ filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.8))' }} />
                </Marker>
              ))}
            </ComposableMap>
          </div>
        </div>
      </div>

      {tooltip.show && (
        <div 
          className="cursor-tooltip-v1" 
          style={{ left: tooltip.x + 15, top: tooltip.y + 15 }}
        >
          <strong>{tooltip.name}</strong>
          <span>{tooltip.info}</span>
        </div>
      )}
    </section>
  );
}

