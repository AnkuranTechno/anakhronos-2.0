import React from 'react';

import { heroImg } from '../../constants/images';

import './Hero.scss';

const Hero = () => {
  return (
    <div className="app__section hero" id="hero">
      <div className="app__section-container hero-container">
        <img className="hero__img" src={heroImg} alt="hero-bg" />
      </div>
    </div>
  );
};

export default Hero;
