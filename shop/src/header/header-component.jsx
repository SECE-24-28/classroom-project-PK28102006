import React from 'react';
import { HeaderWrapper } from './header-style';
import { Hexagon } from 'lucide-react';

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="logo">
        <Hexagon size={28} strokeWidth={2.5} />
        <span>Velora Living</span>
      </div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#explore">Explore</a>
        <a href="#about">About Us</a>
        <a href="#trending">Trending</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="actions">
        <span className="sign-in">Sign In</span>
        <button className="register-btn">Register</button>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
