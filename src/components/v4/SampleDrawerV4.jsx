import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send, ShieldCheck, Check } from 'lucide-react';
import './SampleDrawerV4.css';

export default function SampleDrawerV4({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    email: '',
    category: 'DENIM & OUTERWEAR',
    moq: '500 - 2,500 PCS',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <AnimatePresence>
      <div className="drawer-v4-backdrop" onClick={onClose}>
        <motion.div 
          className="drawer-v4-panel"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 220 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar */}
          <div className="drawer-v4-topbar">
            <div className="drawer-badge">
              <Sparkles size={14} className="text-purple" />
              <span>FUSION ATELIER INTAKE</span>
            </div>
            <button 
              type="button" 
              className="drawer-close-btn"
              onClick={onClose}
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Form Content */}
          <div className="drawer-v4-body">
            {!submitted ? (
              <>
                <div className="drawer-head">
                  <h2>Request Atelier Sampling Suite</h2>
                  <p>
                    Connect directly with our Gurugram engineering studio. 
                    Receive digital 3D drapes and physical swatches within 72 hours.
                  </p>
                </div>

                <form className="drawer-form" onSubmit={handleSubmit}>
                  <div className="form-field">
                    <label>YOUR NAME</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Henrik Lindqvist"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="form-field">
                    <label>FASHION BRAND / HOUSE</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Atelier Stockholm"
                      value={formData.brand}
                      onChange={(e) => setFormData({...formData, brand: e.target.value})}
                    />
                  </div>

                  <div className="form-field">
                    <label>CORPORATE WORK EMAIL</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="henrik@atelierstockholm.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="form-field">
                    <label>PRIMARY PRODUCT DIVISION</label>
                    <select 
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                    >
                      <option value="DENIM & OUTERWEAR">Circular Denim & Selvedge Outerwear</option>
                      <option value="WOMEN’S ATELIER">Women's Atelier Silks & Contemporary Dresses</option>
                      <option value="MEN’S TAILORING">Men's Sartorial Wool & Suiting</option>
                      <option value="LEATHER GOODS">Tuscan Leather Totes & Bags</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>ESTIMATED PRODUCTION VOLUME (PER STYLE)</label>
                    <select 
                      value={formData.moq}
                      onChange={(e) => setFormData({...formData, moq: e.target.value})}
                    >
                      <option value="300 - 500 PCS">300 - 500 pcs (Capsule Trial)</option>
                      <option value="500 - 2,500 PCS">500 - 2,500 pcs (Standard Production)</option>
                      <option value="2,500 - 10,000 PCS">2,500 - 10,000 pcs (Scale Rollout)</option>
                      <option value="10,000+ PCS">10,000+ pcs (Enterprise Volume)</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>SPECIAL SPECIFICATIONS OR TECH PACK LINK</label>
                    <textarea 
                      rows={3}
                      placeholder="Mention any custom yarn counts, target FOB pricing, or delivery window..."
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    />
                  </div>

                  <button type="submit" className="drawer-submit-btn">
                    <span>TRANSMIT SPEC TO GURUGRAM HQ</span>
                    <Send size={15} />
                  </button>

                  <div className="drawer-guarantee">
                    <ShieldCheck size={14} className="text-emerald" />
                    <span>STRICT NON-DISCLOSURE (NDA) & DIRECT MILL TRACEABILITY</span>
                  </div>
                </form>
              </>
            ) : (
              <div className="drawer-success">
                <div className="success-icon-wrap">
                  <Check size={32} />
                </div>
                <h3>Intake Registered</h3>
                <p>
                  Thank you, {formData.name}. Your specifications for <strong>{formData.brand}</strong> have 
                  been routed to our Chief Sourcing Officer at the Gurugram Campus.
                </p>
                <span className="success-node">FUSION // TENSOR DISPATCH CONFIRMED</span>
              </div>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

