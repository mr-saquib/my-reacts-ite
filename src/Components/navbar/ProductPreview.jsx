import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ProductPreview.css";

// 1. Razorpay स्क्रिप्ट लोड करने का फंक्शन (इसे कॉम्पोनेंट के बाहर रखें)
const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const ProductPreview = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 2. पेमेंट हैंडल करने का फंक्शन
  const handlePayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert(
        "Razorpay SDK लोड नहीं हो पाया। कृपया अपना इंटरनेट कनेक्शन चेक करें।",
      );
      return;
    }

    // कीमत को पैसों में बदला गया है (₹19,999 = 1999900 पैसे)
    const amountInPaise = 99 * 100;

    const options = {
      key: "rzp_live_SNerdmeDwneb8w", // यहाँ Razorpay डैशबोर्ड से अपनी Test Key डालें
      amount: amountInPaise,
      currency: "INR",
      name: "Universe Logic",
      description: `${product.title} Purchase`,
      image: "https://your-website.com/logo.png", // अपनी कंपनी का लोगो लगा सकते हैं
      handler: function (response) {
        // पेमेंट सक्सेसफुल होने पर यह कोड चलेगा
        console.log(response);
        alert(`पेमेंट सफल रहा! Payment ID: ${response.razorpay_payment_id}`);

        // पेमेंट के बाद यूजर को Success पेज पर भेजने के लिए:
        // navigate('/payment-success');
      },
      prefill: {
        name: "Saquib", // आप इसे डायनामिक बना सकते हैं जब यूजर लॉगिन करेगा
        email: "contact@universelogic.com",
        contact: "9999999999",
      },
      theme: {
        color: "#2563eb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  if (!product)
    return (
      <div className="error-page">
        <h2>Product not found!</h2>
        <button onClick={() => navigate("/")}>Back Home</button>
      </div>
    );

  return (
    <div className="preview-page-container">
      {/* Top Header Section */}
      <header className="preview-top-bar">
        <button className="back-button-modern" onClick={() => navigate(-1)}>
          <span className="back-icon">←</span> Back to Products
        </button>
      </header>

      <main className="product-content-grid">
        {/* Left: Product Image */}
        <div className="product-image-side">
          <div className="image-wrapper-box">
            <img src={product.image} alt={product.title} />
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="product-details-side">
          <div className="sticky-details">
            <span className="premium-badge">PREMIUM SOLUTION</span>
            <h1 className="product-main-title">{product.title}</h1>

            <div className="product-description-text">
              <p>{product.description}</p>
            </div>

            <div className="feature-list">
              <div className="feature-item">✓ Full Access Life Time</div>
              <div className="feature-item">✓ 24/7 Technical Support</div>
              <div className="feature-item">✓ Free Future Updates</div>
            </div>

            <div className="pricing-box-modern">
              <div className="price-tag">
                <span className="price-val">₹ 99</span>
                <span className="price-type">/ License</span>
              </div>
              <div className="preview-actions">
                {/* 3. Buy बटन पर handlePayment फंक्शन लगाया गया है */}
                <button className="buy-now-btn-final" onClick={handlePayment}>
                  Buy This Software
                </button>
                {/*<button className="request-demo-btn">View Demo</button>*/}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPreview;
