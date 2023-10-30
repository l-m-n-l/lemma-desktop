import React from 'react';

import { PiGraphBold, PiHouseBold, PiUserCircleBold, PiQuestionBold, PiPlugBold, PiCoinsBold, PiCreditCardBold, PiSignOutBold } from 'react-icons/pi';
import { useNavigate, useLocation } from 'react-router-dom';

import { SideNavContainer, WindowButtonGroupContainer } from '../../styles/containers';
import { SettingsButton } from '../../styles/interactions';

const SettingsNav = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return <SideNavContainer style={{ justifyContent: "left", gap: "1rem" }}>
        <SettingsButton
            onClick={() => navigate("/profile")}
            isValid={location.pathname === "/profile"}
        >
            <PiUserCircleBold />
            Profile
        </SettingsButton>
        <SettingsButton
            onClick={() => navigate("/profile/integrations")}
            isValid={location.pathname === "/profile/integrations"}
        >
            <PiPlugBold />
            Integrations
        </SettingsButton>
        <SettingsButton
            onClick={() => navigate("/profile/billing")}
            isValid={location.pathname === "/profile/billing"}
        >
            <PiCreditCardBold />
            Billing
        </SettingsButton>
        <SettingsButton
            onClick={() => navigate("/profile/credits")}
            isValid={location.pathname === "/profile/credits"}
        >
            <PiCoinsBold />
            Credits
        </SettingsButton>
        <SettingsButton
            onClick={() => navigate("/profile/credits")}
            isValid={location.pathname === "/profile/credits"}
        >
            <PiSignOutBold />
            Log Out
        </SettingsButton>
    </SideNavContainer>
};

export default SettingsNav;