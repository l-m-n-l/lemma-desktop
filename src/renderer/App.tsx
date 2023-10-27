import React, { useContext, useEffect } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import useDataStoreFlags from '../hooks/useDataStoreFlags';
import useUserManifest from '../hooks/useUserManifest';
import MainLayout from './components/layouts/main';
import Graph from './pages/graph';

// Pages
import Home from './pages/home';
import Loading from './pages/loading';
import Login from './pages/login';
import Profile from './pages/profile';

// App Router
const AppRouter = () => {
    return <Router>
      <Routes>
        <Route path="/graph" element={<Graph />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
};

// Router for Unauthorized users
const UnAuthedRouter = () => {
    return <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
};

// App Renderer
export default function App() {
  // @ts-ignore
  const { isUserDataLoading, isLoggedIn } = useDataStoreFlags();
  
  return <MainLayout>
    {(isUserDataLoading) ? <Loading /> : (isLoggedIn) ?  <AppRouter /> : <UnAuthedRouter />}
  </MainLayout>
}
