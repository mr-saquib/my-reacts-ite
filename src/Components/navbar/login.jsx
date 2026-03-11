import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const AuthForm = () => {
  const containerRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
    containerRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
  };

  return (
    <div className="auth-wrapper" ref={containerRef} onMouseMove={handleMouseMove}>

      <Link to="/" className="auth-back-link">← Back to Home</Link>

      <div className={`container ${isActive ? 'active' : ''}`}>

        {/* Login Form */}
        <div className="form-box login">
          <form action="#">
            <h1>Login</h1>
            <p>Welcome back. Enter your credentials.</p>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <div className="forgot-link">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">Login</button>
            <p style={{ marginTop: '20px' }}>or continue with</p>
            <div className="social-icons">
              <a href="#"><i className="bx bxl-google"></i></a>
              <a href="#"><i className="bx bxl-facebook"></i></a>
              <a href="#"><i className="bx bxl-github"></i></a>
              <a href="#"><i className="bx bxl-linkedin"></i></a>
            </div>
          </form>
        </div>

        {/* Registration Form */}
        <div className="form-box register">
          <form action="#">
            <h1>Register</h1>
            <p>Create your account below.</p>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <i className="bx bxs-envelope"></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <button type="submit" className="btn">Register</button>
            <p style={{ marginTop: '20px' }}>or continue with</p>
            <div className="social-icons">
              <a href="#"><i className="bx bxl-google"></i></a>
              <a href="#"><i className="bx bxl-facebook"></i></a>
              <a href="#"><i className="bx bxl-github"></i></a>
              <a href="#"><i className="bx bxl-linkedin"></i></a>
            </div>
          </form>
        </div>

        {/* Sliding Toggle */}
        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <div className="logo-name-left">Universe Logic</div>
            <h1>Hello, Welcome!</h1>
            <p>Don't have an account yet?</p>
            <button className="btn register-btn" onClick={() => setIsActive(true)}>
              Register
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <div className="logo-name-right">Universe Logic</div>
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button className="btn login-btn" onClick={() => setIsActive(false)}>
              Login
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthForm;
