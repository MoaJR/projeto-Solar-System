import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

import Title from './Title';

function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      <ul>
        {
          planets.map((e, i) => (
            <li key={ `${i}${e.name}` }>
              <PlanetCard planetName={ e.name } planetImage={ e.image } />
            </li>))
        }
      </ul>
    </div>
  );
}

export default SolarSystem;
