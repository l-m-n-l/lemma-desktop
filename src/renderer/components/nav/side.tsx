import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Tooltip as ReactTooltip } from 'react-tooltip';
import "react-tooltip/dist/react-tooltip.css";

import { PiGraphBold, PiHouseBold, PiUserCircleBold, PiQuestionBold, PiGear, PiGearBold } from 'react-icons/pi';

import { SideNavContainer, SideNavInterior } from '../../styles/containers';
import { SideNavButton } from '../../styles/interactions';

const SideNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return <SideNavContainer>
        {/* Navigation Buttons */}
        <SideNavInterior>
            <SideNavButton 
                data-tooltip-content={"Home"} 
                data-tooltip-id={"info-tooltip-1"}
                isValid={location.pathname === "/"} 
                onClick={() => navigate("/")}
            >
                <PiHouseBold />
            </SideNavButton>
            <SideNavButton 
                data-tooltip-content={"Graph"} 
                data-tooltip-id={"info-tooltip-1"}
                isValid={location.pathname === "/graph"} 
                onClick={() => navigate("/graph")}
            >
                <PiGraphBold />
            </SideNavButton>
            <ReactTooltip 
                style={{ fontFamily: "Roboto, sans-serif", backgroundColor: "black", color: "white" }} 
                place={"right"} 
                id={"info-tooltip-1"}
            />
        </SideNavInterior>

        {/* User Buttons */}
        <SideNavInterior>
            <SideNavButton 
                data-tooltip-content={"My Profile"} 
                data-tooltip-id={"info-tooltip-1"}
                isValid={location.pathname === "/profile"} 
                onClick={() => navigate("/profile")}
            >
                <PiUserCircleBold />
            </SideNavButton>
            <SideNavButton 
                data-tooltip-content={"Settings"} 
                data-tooltip-id={"info-tooltip-1"}
                isValid={location.pathname.includes("/settings")}
                onClick={() => navigate("/profile")}
            >
                <PiGearBold />
            </SideNavButton>
            <ReactTooltip 
                style={{ fontFamily: "Roboto, sans-serif", backgroundColor: "black", color: "white" }} 
                place={"right"} 
                id={"info-tooltip-1"}
            />
        </SideNavInterior>
    </SideNavContainer>
};

export default SideNavigation;