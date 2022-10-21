import React from 'react';
import proptypes from 'prop-types';

function MissionCard({ name, year, country, destination }) {
  return (
    <div data-testid="mission-card">
      <p data-testid="mission-name">{name}</p>
      <p data-testid="mission-year">{year}</p>
      <p data-testid="mission-country">{country}</p>
      <p data-testid="mission-destination">{destination}</p>
    </div>
  );
}

MissionCard.propTypes = {
  name: proptypes.string.isRequired,
  year: proptypes.number.isRequired,
  country: proptypes.string.isRequired,
  destination: proptypes.string.isRequired,
};

export default MissionCard;
