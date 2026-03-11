import React, { useRef } from 'react';
import './Product.css';

const Product = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => sliderRef.current?.scrollBy({ left: -330, behavior: 'smooth' });
  const slideRight = () => sliderRef.current?.scrollBy({ left: 330, behavior: 'smooth' });

  const softwareProducts = [
    { id: 1, title: "Employee Management System", description: "Streamline HR tasks, track employee performance, manage leave, and simplify onboarding processes.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80" },
    { id: 2, title: "Inventory Management System", description: "Track stock levels in real-time, manage orders, and prevent stockouts across multiple warehouses.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80" },
    { id: 3, title: "Hospital Management System", description: "Manage patient records, appointment scheduling, billing, and doctor availability in one centralized platform.", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80" },
    { id: 4, title: "Attendance Management System", description: "Automate time tracking with biometric integration, shift scheduling, and detailed attendance reporting.", image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80" },
    { id: 5, title: "School Management System", description: "Digitalize admissions, fee collection, grade tracking, and parent-teacher communication seamlessly.", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80" },
    { id: 6, title: "Customer Relationship (CRM)", description: "Nurture leads, manage client pipelines, track communications, and boost your sales team's productivity.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" },
    { id: 7, title: "Point of Sale (POS) System", description: "Process retail transactions quickly, manage cash drawers, and sync sales directly with inventory.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80" },
    { id: 8, title: "Library Management System", description: "Catalog books, track issued items, manage member subscriptions, and automate late fee calculations.", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80" },
    { id: 9, title: "E-Commerce Platform", description: "Launch your online store with secure payment gateways, cart management, and order fulfillment tools.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80" },
    { id: 10, title: "Hotel Management System", description: "Simplify room bookings, front desk operations, housekeeping schedules, and guest billing.", image: "https://images.unsplash.com/photo-1566073171643-4b8bb26cba8c?auto=format&fit=crop&w=600&q=80" },
    { id: 11, title: "Fleet Management Software", description: "Track vehicle locations via GPS, monitor fuel consumption, and schedule preventative maintenance.", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=600&q=80" },
    { id: 12, title: "Real Estate Management", description: "List properties, manage tenant contracts, track rent payments, and handle maintenance requests.", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80" },
    { id: 13, title: "Gym Management Software", description: "Manage memberships, schedule fitness classes, track access control, and process recurring payments.", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80" },
    { id: 14, title: "Restaurant Billing System", description: "Handle table reservations, send digital tickets to the kitchen, and split bills with ease.", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80" },
    { id: 15, title: "Project Management Tool", description: "Assign tasks, track project milestones, collaborate with teams, and monitor deadlines effectively.", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80" },
    { id: 16, title: "Helpdesk & Ticketing System", description: "Resolve customer issues faster with ticket routing, automated responses, and feedback tracking.", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80" }
  ];

  return (
    <div className="products-container" id="products">
      <div className="products-header">
        <div className="section-label">Software Solutions</div>
        <h2 className="section-heading">
          Our <span className="accent">Products</span>
        </h2>
        <p>Comprehensive management systems tailored to digitize and scale your business operations.</p>
      </div>

      <div className="slider-wrapper">
        <button className="slider-btn left-btn" onClick={slideLeft}>&#10094;</button>

        <div className="products-slider" ref={sliderRef}>
          {softwareProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="card-image-wrapper">
                <img src={product.image} alt={product.title} className="product-image" />
              </div>
              <div className="card-content">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <button className="learn-more-btn">Learn More →</button>
              </div>
            </div>
          ))}
        </div>

        <button className="slider-btn right-btn" onClick={slideRight}>&#10095;</button>
      </div>
    </div>
  );
};

export default Product;
