import React from 'react';
import SettingsNav from '../components/nav/settings';
import SideNavigation from '../components/nav/side';
import { ContentContainer, MainContainer } from '../styles/containers';

const Settings = () => {
    return <MainContainer>
        <SideNavigation />
        <SettingsNav />
        <ContentContainer>
            
        </ContentContainer>
    </MainContainer>
};

export default Settings;