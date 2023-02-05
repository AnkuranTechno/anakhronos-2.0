import React from 'react';

import {
  nestleLogo,
  olaCabLogo,
  timesOfIndiaLogo,
} from '../../constants/images';

import './Sponsors.scss';

const Sponsors = () => {
  return (
    <div className="app__section sponsors" id="sponsors">
      <div className="app__section-container sponsors-container">
        <h1>Our sponsors</h1>
        <div className="sponsors-slideshow">
          <div className="slide">
            {/* to add a new image/sponsor you need to add it in all three images chunks. No need to resize the image, it is taken care of in the css. */}
            <img src={nestleLogo} alt="chevrolet" />
            <img src={olaCabLogo} alt="chevrolet" />
            <img src={timesOfIndiaLogo} alt="chevrolet" />
            <img src={olaCabLogo} alt="chevrolet" />
            <img src={timesOfIndiaLogo} alt="chevrolet" />

            <img src={nestleLogo} alt="chevrolet" />
            <img src={olaCabLogo} alt="chevrolet" />
            <img src={timesOfIndiaLogo} alt="chevrolet" />
            <img src={olaCabLogo} alt="chevrolet" />
            <img src={timesOfIndiaLogo} alt="chevrolet" />

            <img src={nestleLogo} alt="chevrolet" />
            <img src={olaCabLogo} alt="chevrolet" />
            <img src={timesOfIndiaLogo} alt="chevrolet" />
            <img src={olaCabLogo} alt="chevrolet" />
            <img src={timesOfIndiaLogo} alt="chevrolet" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
