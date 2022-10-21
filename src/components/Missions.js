import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';

import Title from './Title';

function Missions() {
  return (
    <div data-testid="missions">
      <Title headline="Missões" />
      <ul>
        {
          missions.map(({ name, year, country, destination }, i) => (
            <li key={ `${i}${name}` }>
              <MissionCard
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Missions;
