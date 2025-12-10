import React from 'react';
import { ShopNowWrapper } from './shop-now-style';

const ShopNow = () => {
  return (
    <ShopNowWrapper>
      <div className="content">
        <h1 className="title">
          <span>Furniture</span> That <br />
          Elevates Your <span>Space</span>
        </h1>
        <p className="subtitle">
          Crafted for comfort. Designed for modern living.
        </p>
        <div className="button-group">
          <button className="button primary">Shop Now</button>
          <button className="button">Check New Arrivals</button>
        </div>
      </div>
      
      <div className="image-wrapper">
         {/* Using a high-quality placeholder image of a living room */}
        <img 
          src="https://creatersteel.com/wp-content/uploads/2022/10/blog-9.jpg" 
          alt="Modern Living Room Furniture" 
        />
      </div>
    </ShopNowWrapper>
  );
};

export default ShopNow;
