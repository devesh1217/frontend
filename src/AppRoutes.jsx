import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import TimerPage from './components/TimerPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/timer" element={<TimerPage />} />
  </Routes>
);

export default AppRoutes;
