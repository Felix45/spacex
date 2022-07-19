import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RocketsView from './components/RocketsView';
import MissionsView from './components/MissionsView';
import Layout from './components/Layout';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<RocketsView />} />
        <Route path="/missions" element={<MissionsView />} />
        <Route path="/profile" element={<div>Profile View</div>} />
      </Route>
    </Routes>
  </Router>
);

export default App;
