import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

import '../style/SolarSystem.scss';

function SolarSystem() {
  return (
    <div data-testid="solar-system" className="SolarSystem">
      <Title headline="Planetas" />
      <ul>
        {
          planets.map((e, i) => (
            <li key={ `${i}${e.name}` }>
              <PlanetCard
                planetName={ e.name }
                planetImage={ e.image }
                planet3D={ e.component }
              />
            </li>))
        }
      </ul>
    </div>
  );
}

export default SolarSystem;
