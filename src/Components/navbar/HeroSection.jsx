import './heroSection.css';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  return (
    <div className="heroContainer" id="platform">
      <div className="hero-blob-1" />
      <div className="hero-blob-2" />

      <div className="hero-corner-tag">
        <span>Est. 2024</span>
        <span>Mumbai, IN</span>
        <span>v2.0 Live</span>
      </div>

      <div className="hero-text-content">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          Next-Generation IT Solutions
        </div>

        <h1 className="hero-title">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 40,
              strings: [
                "IT <span class='red-name'>Company</span><br/>with Leading Gen<span class='green-name'>AI</span>",
                "Software That<br/><span class='green-name'>Scales</span> With You",
                "Build Smarter.<br/>Grow <span class='red-name'>Faster</span>.",
              ]
            }}
          />
        </h1>

        <p className="hero-subtitle">Software · Websites · Services</p>

        <div className="hero-cta-row">
          <a href="#products" className="btn-hero-primary">
            Explore Products →
          </a>
          <a href="#contact" className="btn-hero-secondary">
            Get in Touch
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">50<span className="unit">+</span></span>
            <span className="hero-stat-label">Projects Delivered</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">16<span className="unit">+</span></span>
            <span className="hero-stat-label">Software Products</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">99<span className="unit">%</span></span>
            <span className="hero-stat-label">Uptime Guaranteed</span>
          </div>
        </div>
      </div>

      <div className="bg-img">
        <img src="https://i.postimg.cc/zDQKLdqD/hero_img.png" alt="Universe Logic Platform" />
      </div>
    </div>
  );
};

export default HeroSection;
