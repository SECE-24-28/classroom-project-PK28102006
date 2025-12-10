import React from 'react';
import { FooterWrapper } from './footer-style';
import { Hexagon, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <div className="footer-content">
        <div className="brand">
          <div className="logo">
            <Hexagon size={24} strokeWidth={2.5} />
            <span>Velora Living</span>
          </div>
          <p>Furniture Store</p>
        </div>

        <div className="links-section">
          <div className="column">
            <h4>Home</h4>
          </div>
           <div className="column">
            <h4>Shop</h4>
          </div>
           <div className="column">
            <h4>Product</h4>
          </div>
           <div className="column">
            <h4>Blog</h4>
          </div>
           <div className="column">
            <h4>Contact Us</h4>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          Copyright © 2025 Velora. All rights reserved.
          <span className="legal-links" style={{marginLeft: '20px', display: 'inline-block'}}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </span>
        </div>
        
        <div className="social-links">
          <a href="#"><Instagram size={18} /></a>
          <a href="#"><Facebook size={18} /></a>
          <a href="#"><Youtube size={18} /></a>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
