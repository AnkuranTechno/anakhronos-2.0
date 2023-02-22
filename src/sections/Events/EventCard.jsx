import React from 'react';

import './Eventcard.scss';

const EventCard = ({ image }) => {
  return (
    <div className="card-block">
      <div className="block">
        <div className="block-image">
          <img src={image} alt="img"></img>
          <div className="info-box">
            <h5 className="name">Event Name</h5>
          </div>
        </div>
      </div>
      <div className="aboutevent">
        <span>
          {' '}
          Music gives soul to the universe, wings to the mind, flight to
          imagination and life to everything. And Techno Indian Idol intends to
          give all those music lovers among the freshmen to sing the melody of
          their soul. Techno Indian Idol is a solo singing competition
          exclusively for the freshers aimed to bring the best tune out of them
          to set the mallets on the groove.
        </span>
      </div>
    </div>
  );
};

export default EventCard;
