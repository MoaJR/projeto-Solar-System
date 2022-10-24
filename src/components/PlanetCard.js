import React from 'react';
import propTypes from 'prop-types';

import '../style/PlanetCard.scss';
import Button3D from './Button3D';

function PlanetCard({ planetName, planetImage, planet3D }) {
  return (
    <div data-testid="planet-card" className="PlanetCard">
      <img
        src={ planetImage }
        alt={ `Planeta ${planetName}` }
      />
      <p data-testid="planet-name">{planetName}</p>
      <Button3D planetName={ planetName } planet3D={ planet3D } />
    </div>
  );
}

export default PlanetCard;
