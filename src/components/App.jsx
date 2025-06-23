import React, { useState } from 'react';
import './App.css';
import './ProductList.css';

import ProductList from './ProductList.jsx';
import AboutUs from './AboutUs.jsx';
import CartItem from './CartItem.jsx';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
    setShowCart(false);
  };

  const handleViewCart = () => {
    setShowCart(true);
    setShowProductList(false);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
    setShowProductList(true);
  };
  

  return (
    <div className="app-container">
      {!showProductList && !showCart && (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
              <button className="get-started-button" onClick={handleGetStartedClick}>
                Get Started
              </button>
            </div>
            <div className="aboutus_container">
              <AboutUs />
            </div>
          </div>
        </div>
      )}

      {showProductList && (
        <div className="product-list-container visible">
          <ProductList onHomeClick={handleHomeClick} onViewCart={handleViewCart} />
        </div>
      )}

      {showCart && (
        <div className="cart-container visible">
          <CartItem onContinueShopping={handleContinueShopping} />
        </div>
      )}
    </div>
  );
}

export default App;



