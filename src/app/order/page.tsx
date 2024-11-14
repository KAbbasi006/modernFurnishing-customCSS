// /src/app/order/page.tsx
'use client';
import { useState } from 'react';

const OrderPage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleBuyNow = () => {
    setShowForm(true); // Show the form when "Buy Now" is clicked
  };

  return (
    <div className="order-page-container">
      <h2 className="order-heading">Order Now</h2>

      <p className="order-description">
        Your items are ready for review! Proceed with your order or visit our showroom.
      </p>

      <div className="order-buttons">
        <button onClick={handleBuyNow} className="order-now-button">
          Buy Now
        </button>
        <button className="visit-showroom-button">
         <a href="/contact#visit"> Visit Showroom</a>
        </button>
      </div>

      {/* Display form when "Buy Now" is clicked */}
      {showForm && (
        <div className="order-form-container">
          <h3 className="order-form-heading">Contact Information</h3>
          <form className="order-form">
            <input type="text" placeholder="Your Name" className="form-input" />
            <input type="email" placeholder="Your Email" className="form-input" />
            <input type="text" placeholder="Contact Number" className="form-input" />
            <textarea placeholder="Address" className="form-input" rows={3}></textarea>
            <button type="submit" className="submit-order-button">
              Submit Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
