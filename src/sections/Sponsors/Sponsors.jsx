import React from 'react';

import './Sponsors.scss';

const Sponsors = () => {
  return (
    <div className="app__section sponsors" id="sponsors">
      <div className="app__section-container sponsors-container">
        <h1>Our sponsors</h1>
        <div class="sponsors-slideshow">
          <div class="slide">
            {/* to add a new image/sponsor you need to add it in all three images chunks. No need to resize the image, it is taken care of in the css. */}
            <img src='nestle.png' alt='chevrolet' />   
            <img src='ola-cabs.png' alt='chevrolet' />
            <img src='the-times-of-india-logo.png' alt='chevrolet' />
            <img src='ola-cabs.png' alt='chevrolet' />
            <img src='the-times-of-india-logo.png' alt='chevrolet' />

            <img src='nestle.png' alt='chevrolet' />
            <img src='ola-cabs.png' alt='chevrolet' />
            <img src='the-times-of-india-logo.png' alt='chevrolet' />
            <img src='ola-cabs.png' alt='chevrolet' />
            <img src='the-times-of-india-logo.png' alt='chevrolet' />

            <img src='nestle.png' alt='chevrolet' />
            <img src='ola-cabs.png' alt='chevrolet' />
            <img src='the-times-of-india-logo.png' alt='chevrolet' />
            <img src='ola-cabs.png' alt='chevrolet' />
            <img src='the-times-of-india-logo.png' alt='chevrolet' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
