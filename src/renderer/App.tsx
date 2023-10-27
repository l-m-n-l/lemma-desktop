import React, { useContext, useEffect } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import useDataStoreFlags from '../hooks/useDataStoreFlags';
import useUserManifest from '../hooks/useUserManifest';

// Pages
import Home from './pages/home';
import Loading from './pages/loading';
import Login from './pages/login';

// App Router
const AppRouter = () => {
    return <Router>
      <Routes>
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
  const { user, functions } = useUserManifest();

  // render relevant page/router
  return (isUserDataLoading) ? <Loading /> : (isLoggedIn) ?  <AppRouter /> : <UnAuthedRouter />
}
