import React, { useState } from 'react';
import logo from '../log.png';
import './styles.css';
import Menu from './menu.js';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-toggle" onClick={handleMenuToggle}>
          <div className="menu-icon">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        <img src={logo} alt="logo" className="logo" />
        <Menu />
      </nav>
    </header>
  );
};

export default Header;
