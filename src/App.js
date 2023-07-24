import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';

const App = () => (
  <Routes>
    <Route path="/missions" element={<Missions />} />
    <Route path="/myprofile" element={<MyProfile />} />
  </Routes>
);

export default App;
