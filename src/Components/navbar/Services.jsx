import React, { useRef } from 'react';
import './Services.css';

const Services = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => sliderRef.current?.scrollBy({ left: -330, behavior: 'smooth' });
  const slideRight = () => sliderRef.current?.scrollBy({ left: 330, behavior: 'smooth' });

  const servicesList = [
    { id: 1, icon: "🌐", title: "Website Development", description: "Custom, responsive, high-performance websites tailored to represent your brand and convert visitors into customers." },
    { id: 2, icon: "⚙️", title: "Web Services & APIs", description: "Robust backend architectures and RESTful APIs to connect your platforms and ensure seamless data flow." },
    { id: 3, icon: "💻", title: "IT Support & Consulting", description: "End-to-end IT infrastructure management, tech support, and strategic consulting to scale your business." },
    { id: 4, icon: "☁️", title: "Cloud & Web Hosting", description: "Secure, lightning-fast, and scalable cloud hosting solutions with 99.9% uptime guarantees for your applications." },
    { id: 5, icon: "🛡️", title: "Cybersecurity Solutions", description: "Advanced security protocols, vulnerability testing, and data protection to keep your digital assets safe." },
    { id: 6, icon: "📱", title: "App Development", description: "Engaging and intuitive mobile applications for both iOS and Android platforms to reach users on the go." }
  ];

  return (
    <div className="services-container" id="services">
      <div className="services-header">
        <div className="section-label">What We Do</div>
        <h2 className="section-heading">
          Core <span className="accent">Services</span>
        </h2>
        <p>Empowering your digital journey with cutting-edge technology and innovative solutions.</p>
      </div>

      <div className="slider-wrapper">
        <button className="slider-btn left-btn" onClick={slideLeft}>&#10094;</button>
        <div className="services-slider" ref={sliderRef}>
          {servicesList.map((service) => (
            <div className="glass-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#contact" className="service-link">Get Started →</a>
            </div>
          ))}
        </div>
        <button className="slider-btn right-btn" onClick={slideRight}>&#10095;</button>
      </div>
    </div>
  );
};

export default Services;
