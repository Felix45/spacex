import React from 'react';
import RocketsView from './components/RocketsView';
import MissionsView from './components/MissionsView';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div className="App">
    <RocketsView />
    <MissionsView />
  </div>
);

export default App;
