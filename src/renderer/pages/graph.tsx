import React from 'react';

import { MainContainer } from '../styles/containers';

import MainGraph from '../components/graphs/MainGraph';
import SideNavigation from '../components/nav/side';
import GraphNavigation from '../components/nav/graph';
import HistoryDrawer from '../components/drawers/HistoryDrawer';

const Graph = () => {
    return <MainContainer>
        <SideNavigation />
        <MainGraph />
        <HistoryDrawer />
    </MainContainer>
};

export default Graph;