import React from 'react';

import { MainContainer } from '../styles/containers';

import MainGraph from '../components/graphs/main';
import SideNavigation from '../components/nav/side';
import GraphNavigation from '../components/nav/graph';

const Graph = () => {
    return <MainContainer>
        <SideNavigation />
        <MainGraph />
        <GraphNavigation />
    </MainContainer>
};

export default Graph;