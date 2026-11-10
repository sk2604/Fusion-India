import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Zap, Globe, Cpu, ArrowUpRight } from 'lucide-react';
import './BentoGridV4.css';

export default function BentoGridV4() {
  return (
    <section className="bento-v4">
      <div className="container bento-v4-container">
        
        {/* Section Head */}
        <div className="bento-v4-head">
          <span className="bento-kicker">INFRASTRUCTURE MATRIX // CAPABILITIES</span>
          <h2 className="bento-title">
            Engineered for <em>Speed</em>, Audited for <em>Scale</em>.
          </h2>
          <p className="bento-sub">
            Traditional sourcing agents broker disjointed middlemen. Fusion provides a unified, 
            AI-driven operating system combining digital speed with high-volume industrial discipline.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          
          {/* Card 1: Large Featured (Virtual Twin Sampling) */}
          <div className="bento-card card-large">
            <div className="card-ambient-glow glow-purple" />
            <div className="card-top">
              <div className="card-badge">
                <Cpu size={14} className="text-purple" />
                <span>ATELIER OS</span>
              </div>
              <span className="card-metric-pill">-85% PROTOTYPE FREIGHT</span>
            </div>

            <div className="card-visual-wrap">
              <img 
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop" 
                alt="CLO 3D Sample Lab"
                className="card-bg-img"
              />
              <div className="card-scanner-line" />
            </div>

            <div className="card-content">
              <h3>Photorealistic 3D Digital Twin Sampling</h3>
              <p>
                Eliminate multiple rounds of costly physical courier sampling. Our 40,000 sq.ft Gurugram campus 
                calibrates tensile drape, seam elongation, and pattern tolerances in CLO 3D before fabric is ever cut.
              </p>
              <div className="card-tags-row">
                <span>CLO 3D</span>
                <span>Optitex Marker</span>
                <span>True-to-Scale Drape</span>
              </div>
            </div>
          </div>

          {/* Card 2: Zero-Waste AI Marker */}
          <div className="bento-card card-compact">
            <div className="card-ambient-glow glow-emerald" />
            <div className="card-top">
              <div className="card-badge">
                <Zap size={14} className="text-emerald" />
                <span>SUSTAINABILITY</span>
              </div>
              <span className="card-metric-pill">0% PLASTIC</span>
            </div>

            <div className="card-mini-stat">
              <span className="mini-num">96.4%</span>
              <span className="mini-label">Average Fabric Marker Yield</span>
            </div>

            <div className="card-content">
              <h3>Zero-Waste Yield Algorithms</h3>
              <p>
                Algorithmic nesting maximizes every yard of certified organic cotton and virgin wool, 
                slashing excess cutting room scrap.
              </p>
            </div>
          </div>

          {/* Card 3: 500+ Audited Tier-1 Mills */}
          <div className="bento-card card-compact">
            <div className="card-ambient-glow glow-cyan" />
            <div className="card-top">
              <div className="card-badge">
                <ShieldCheck size={14} className="text-cyan" />
                <span>AUDITED ETHICS</span>
              </div>
              <span className="card-metric-pill">100% TRACEABLE</span>
            </div>

            <div className="card-mini-stat">
              <span className="mini-num">500<sup>+</sup></span>
              <span className="mini-label">SEDEX & BSCI Audited Tier-1 Mills</span>
            </div>

            <div className="card-content">
              <h3>Zero Child Labour & Fair Wage Guarantee</h3>
              <p>
                Every supply chain node undergoes strict international compliance audits: 
                OEKO-TEX Standard 100, GOTS certified organics, and living wage verification.
              </p>
            </div>
          </div>

          {/* Card 4: Global Hub Network (Wide Card) */}
          <div className="bento-card card-wide">
            <div className="card-ambient-glow glow-blue" />
            <div className="card-top">
              <div className="card-badge">
                <Globe size={14} className="text-blue" />
                <span>GLOBAL CORRIDOR</span>
              </div>
              <span className="card-metric-pill">20+ COUNTRIES</span>
            </div>

            <div className="card-wide-body">
              <div className="wide-text">
                <h3>Connecting Europe & North America Directly to Manufacturing HQ</h3>
                <p>
                  Local presence in Stockholm, Hamburg, and North America ensures real-time communication 
                  and smooth logistics, backed by our central manufacturing engine in Haryana, India.
                </p>
                <div className="corridor-chips">
                  <span>★ GURUGRAM (HQ)</span>
                  <span>HAMBURG / GERMANY</span>
                  <span>SCANDINAVIA</span>
                  <span>NORTH AMERICA</span>
                </div>
              </div>

              <div className="wide-figure">
                <div className="circle-stat">
                  <strong>72h</strong>
                  <span>Rapid Proto Turnaround</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

