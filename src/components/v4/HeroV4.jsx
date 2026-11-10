import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Sliders, ShieldCheck, Cpu, Play } from 'lucide-react';
import './HeroV4.css';

export default function HeroV4({ onOpenStudio, onOpenModal }) {
  const [activePill, setActivePill] = useState('3d');

  const heroStats = [
    { label: 'AUDITED MILLS', val: '500+' },
    { label: 'SAMPLE TURNAROUND', val: '72 HRS' },
    { label: 'FABRIC WASTE', val: '0.0%' },
    { label: 'GLOBAL HUBS', val: '04 NODES' },
  ];

  return (
    <section className="hero-v4">
      {/* Background Ambient Glow Meshes */}
      <div className="hero-v4-mesh mesh-1" />
      <div className="hero-v4-mesh mesh-2" />
      <div className="hero-v4-grid-lines" />

      <div className="container hero-v4-container">
        
        {/* Top Floating Badge */}
        <motion.div 
          className="hero-v4-badge-wrap"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-v4-badge">
            <span className="badge-pulse-dot" />
            <span className="badge-kicker">FUSION // SOURCING OS v4.2</span>
            <span className="badge-sep">/</span>
            <span className="badge-status">
              <Sparkles size={13} className="sparkle-icon" /> AI-DRIVEN RUNWAY ATELIER
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          className="hero-v4-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          FROM 3D SKETCH <br />
          <span className="gradient-text">TO ETHICAL CONTAINER.</span>
        </motion.h1>

        {/* Subtitle / Value Proposition */}
        <motion.p 
          className="hero-v4-lead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          The intelligent apparel operating system bridging European runway vision 
          and audited scale. Photorealistic virtual sampling, CLO 3D pattern grading, 
          and zero-compromise manufacturing in days — not months.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          className="hero-v4-cta-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <button 
            type="button" 
            className="btn-v4-primary"
            onClick={onOpenStudio}
          >
            <span>LAUNCH VIRTUAL STUDIO</span>
            <ArrowRight size={16} />
          </button>

          <button 
            type="button" 
            className="btn-v4-glass"
            onClick={onOpenModal}
          >
            <Sliders size={16} />
            <span>REQUEST SAMPLING SUITE</span>
          </button>
        </motion.div>

        {/* Hero Interactive Portal Card (Grace-style Glass Studio Mockup) */}
        <motion.div 
          className="hero-v4-portal"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="portal-glass-frame">
            {/* Window Topbar */}
            <div className="portal-topbar">
              <div className="portal-window-dots">
                <span className="dot dot-red" />
                <span className="dot dot-amber" />
                <span className="dot dot-green" />
              </div>
              <div className="portal-title-pill">
                <Cpu size={12} />
                <span>STUDIO WORKSPACE // LIVE ATELIER RENDER</span>
              </div>
              <div className="portal-status-pill">
                <span className="live-blink" /> READY (GPU TENSOR 4)
              </div>
            </div>

            {/* Split Media Preview */}
            <div className="portal-body">
              {/* Left Column: Garment Tech Spec */}
              <div className="portal-col portal-spec">
                <div className="spec-header">
                  <span className="spec-step-tag">INPUT 01 // 3D FLAT PATTERN</span>
                  <h4>Raw Japanese Selvedge Denim</h4>
                </div>

                <div className="spec-visual-box">
                  <img 
                    src="https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=800&auto=format&fit=crop" 
                    alt="Denim CAD"
                    className="spec-flat-img"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop';
                    }}
                  />
                  <div className="spec-overlay-tags">
                    <span className="spec-chip">13.5 oz Shuttle Loom</span>
                    <span className="spec-chip">Indigo 04</span>
                  </div>
                </div>

                <div className="spec-metrics-grid">
                  <div className="metric-chip">
                    <span className="m-label">CAD Marker Efficiency</span>
                    <strong className="m-val text-cyan">94.8%</strong>
                  </div>
                  <div className="metric-chip">
                    <span className="m-label">Seam Strength (ISO)</span>
                    <strong className="m-val">420 N</strong>
                  </div>
                </div>
              </div>

              {/* Center Transformation Indicator */}
              <div className="portal-divider-col">
                <div className="pulse-arrow-badge">
                  <Sparkles size={18} />
                  <span>AI SYNTHESIS</span>
                </div>
              </div>

              {/* Right Column: High Fashion Photorealistic On-Model */}
              <div className="portal-col portal-model">
                <div className="model-header">
                  <span className="model-step-tag">OUTPUT 02 // PHOTOREALISTIC ON-MODEL</span>
                  <h4>Campaign Grade Ready</h4>
                </div>

                <div className="model-visual-box">
                  <img 
                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop" 
                    alt="AI On Model Editorial"
                    className="model-img"
                  />
                  <div className="model-floating-card">
                    <div className="m-avatar-badge">
                      <ShieldCheck size={14} className="text-emerald" />
                      <span>FABRIC DRAPE VALIDATED</span>
                    </div>
                    <p className="m-factory">Factory Node: Gurugram Campus Unit 02</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="portal-footer-bar">
              {heroStats.map((stat, i) => (
                <div key={i} className="footer-stat-unit">
                  <span className="stat-unit-label">{stat.label}</span>
                  <strong className="stat-unit-val">{stat.val}</strong>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
