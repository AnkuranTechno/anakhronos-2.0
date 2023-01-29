import React from 'react';

import './Navbar.scss';
import { tmslLogo } from '../../constants/image';

const Navbar = () => {
  return (
    <header className="app__section navbar">
      <div className="app__section-container navbar-container">
        <div className="navbar__logo-container">
          <div className="navbar__logo">
            <img src={tmslLogo} alt="logo" />
          </div>
        </div>
        <ul className="navbar__menu">
          <li className="navbar__menu-item">
            <a href="/">Home</a>
          </li>
          <li className="navbar__menu-item">
            <a href="/">About</a>
          </li>
          <li className="navbar__menu-item">
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
