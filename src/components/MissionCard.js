import React from 'react';

import '../style/MissionCard.scss';

function MissionCard({ name, year, country, destination }) {
  return (
    <div data-testid="mission-card" className="MissionCard">
      <p data-testid="mission-name" className="name">{name}</p>
      <p data-testid="mission-year" className="year">{year}</p>
      <p data-testid="mission-country" className="country">{country}</p>
      <p data-testid="mission-destination" className="destination">{destination}</p>
    </div>
  );
}

export default MissionCard;
