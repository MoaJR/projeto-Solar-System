import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';

import './style/App.scss';

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <Header />
        <SolarSystem />
        <Missions />
      </main>
    );
  }
}

export default App;
