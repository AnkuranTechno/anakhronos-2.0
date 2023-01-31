import React from 'react';

import './Navbar.scss';
import { tmslLogo } from '../../constants/images';

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
            <a href="#hero">Home</a>
          </li>
          <li className="navbar__menu-item">
            <a href="#about">About</a>
          </li>
          <li className="navbar__menu-item">
            <a href="#events">Event</a>
          </li>
          <li className="navbar__menu-item">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="navbar__menu-item">
            <a href="#sponsors">Sponsors</a>
          </li>
          <li className="navbar__menu-item">
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
