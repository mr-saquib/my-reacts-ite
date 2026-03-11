import { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import HeroSection from './Components/navbar/HeroSection';
import Product from './Components/navbar/Product';
import Services from './Components/navbar/Services';
import Contact from './Components/navbar/Contact';
import Footer from './Components/navbar/Footer';
import AuthForm from './Components/navbar/login';

const LandingPage = () => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
    containerRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
  };

  return (
    <div
      className="main-app-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <Navbar />
      <div className="heroSection"><HeroSection /></div>
      <div className="Product"><Product /></div>
      <div className="Services"><Services /></div>
      <div className="Contact"><Contact /></div>
      <div className="Footer"><Footer /></div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthForm />} />
      </Routes>
    </Router>
  );
};

export default App;
