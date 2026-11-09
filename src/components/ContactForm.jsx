import React, { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('SENDING...');
    const formData = new FormData(event.target);
    formData.append('access_key', 'YOUR_ACCESS_KEY_HERE');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setStatus('MESSAGE SENT.');
        event.target.reset();
      } else {
        setStatus('ERROR.');
      }
    } catch (error) {
      setStatus('ERROR.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2 className="text-title">LET'S TALK.</h2>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <p className="text-caption mb-2">EMAIL</p>
            <a href="mailto:info@fcindia.com" className="contact-link">INFO@FCINDIA.COM</a>
            
            <p className="text-caption mb-2 mt-4">PHONE</p>
            <a href="tel:+911244509101" className="contact-link">+91 124 4509101</a>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={onSubmit} className="minimal-form">
              <input type="text" name="name" placeholder="YOUR NAME" required />
              <input type="email" name="email" placeholder="YOUR EMAIL" required />
              <textarea name="message" rows="1" placeholder="YOUR MESSAGE" required></textarea>
              <div className="form-footer">
                <button type="submit" className="submit-btn">SUBMIT</button>
                <span className="status-msg">{status}</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
