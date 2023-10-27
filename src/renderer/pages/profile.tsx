import React from 'react';
import SettingsNav from '../components/nav/settings';
import SideNavigation from '../components/nav/side';
import { ContentContainer, MainContainer } from '../styles/containers';

const Profile = () => {
    return <MainContainer>
        <SideNavigation />
        <SettingsNav />
        <ContentContainer>
            
        </ContentContainer>
    </MainContainer>
};

export default Profile;