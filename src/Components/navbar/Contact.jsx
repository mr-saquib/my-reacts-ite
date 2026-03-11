import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "f058f7b6-22c6-408f-9bf3-e292bc09b2f2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setResult("✓ Message sent successfully.");
        event.target.reset();
      } else {
        setResult("✕ Submission failed. Please retry.");
      }
    } catch {
      setResult("✕ Network error. Please try again.");
    }
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-shape-1" />
      <div className="contact-shape-2" />

      <div className="contact-header">
        <div className="section-label">Contact</div>
        <h2 className="section-heading">
          Get In <span className="accent">Touch</span>
        </h2>
        <p>Ready to transform your business? Drop us a message and our team will get back to you within 24 hours.</p>
      </div>

      <div className="contact-content">
        {/* Info Panel */}
        <div className="contact-info glass-panel">
          <h3>Contact Information</h3>
          <p className="info-subtext">Fill out the form and we'll respond promptly.</p>

          <div className="info-details">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <p>Mumbai, Maharashtra</p>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <p>+91 8541078902 · +91 7004819326</p>
            </div>
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <p>support@universelogic.in</p>
            </div>
          </div>
        </div>

        {/* Form Panel */}
        <div className="contact-form-wrapper glass-panel">
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="john@example.com" required />
            </div>
            <div className="input-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" placeholder="How can we help you?" required />
            </div>
            <button type="submit" className="submit-btn">Send Message →</button>
            {result && (
              <span className="form-result">{result}</span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
