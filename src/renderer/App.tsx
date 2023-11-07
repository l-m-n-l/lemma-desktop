import React, { useContext, useEffect } from 'react';
import { MemoryRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
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

const AppRoutes = () => {
  useRoutes([
    "/profile",
    "/profile/settings",
    "/profile/integrations",
    "/profile/billing"
  ].map((path) => ({path, element: <Profile />})));

  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/graph" element={<Graph />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
}

// App Router
const AppRouter = () => {
    return <Router>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </Router>
};

// Router for Unauthorized users
const UnAuthedRouter = () => {
    return <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </MainLayout>
    </Router>
};

// App Renderer
export default function App() {
  // @ts-ignore
  const { isUserDataLoading, isLoggedIn } = useDataStoreFlags();
  
  return (isUserDataLoading) ? <Loading /> : (isLoggedIn) ?  <AppRouter /> : <UnAuthedRouter />
}
