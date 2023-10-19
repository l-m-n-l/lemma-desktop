import React, { useEffect } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';

import Login from './pages/login';

const AppRouter = () => {
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
};

export default function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}
