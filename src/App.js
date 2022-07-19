import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<div>Rockets View</div>} />
        <Route path="/missions" element={<div>Missions View</div>} />
        <Route path="/profile" element={<div>Profile View</div>} />
      </Route>
    </Routes>
  </Router>
);

export default App;
