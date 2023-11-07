import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Tooltip as ReactTooltip } from 'react-tooltip';
import "react-tooltip/dist/react-tooltip.css";

import { PiGraphBold, PiHouseBold, PiUserCircleBold, PiQuestionBold, PiGear, PiGearBold } from 'react-icons/pi';

import { SideNavContainer, SideNavInterior } from '../../styles/containers';
import { MinimizeNavButton, SideNavButton } from '../../styles/interactions';
import { updateTabInfo } from '../../../providers/redux/slicers/tabs';

import { FaAnglesRight, FaAnglesLeft } from 'react-icons/fa6';

const SideNavigation = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [isHidden, setIsHidden] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    return <SideNavContainer onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        {/* Navigation Buttons */}
        <SideNavInterior>
            <SideNavButton 
                data-tooltip-content={"Home"} 
                data-tooltip-id={"info-tooltip-1"}
                isValid={location.pathname === "/"} 
                onClick={() => {
                    dispatch(updateTabInfo({
                        tabTitle: "Home",
                        tabIcon: "system-home",
                        tabURI: "/"
                    }));
                    navigate("/");
                }}
            >
                <PiHouseBold />
            </SideNavButton>
            <SideNavButton 
                data-tooltip-content={"Graph"} 
                data-tooltip-id={"info-tooltip-1"}
                isValid={location.pathname === "/graph"} 
                onClick={() => {
                    dispatch(updateTabInfo({
                        tabTitle: "Graph",
                        tabIcon: "system-graph",
                        tabURI: "/graph"
                    }));
                    navigate("/graph");
                }}
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
                onClick={() => {
                    dispatch(updateTabInfo({
                        tabTitle: "Profile",
                        tabIcon: "system-profile",
                        tabURI: "/profile"
                    }));
                    navigate("/profile");
                }}
            >
                <PiUserCircleBold />
            </SideNavButton>
            <SideNavButton 
                data-tooltip-content={"Settings"} 
                data-tooltip-id={"info-tooltip-1"}
                isValid={location.pathname.includes("/settings")}
                onClick={() => {
                    dispatch(updateTabInfo({
                        tabTitle: "Settings",
                        tabIcon: "system-settings",
                        tabURI: "/settings"
                    }));
                    navigate("/settings");
                }}
            >
                <PiGearBold />
            </SideNavButton>
            <ReactTooltip 
                style={{ fontFamily: "Roboto, sans-serif", backgroundColor: "black", color: "white" }} 
                place={"right"} 
                id={"info-tooltip-1"}
            />
        </SideNavInterior>
        {
            (isHovering) ? <MinimizeNavButton onClick={() => {

            }}><FaAnglesLeft /></MinimizeNavButton> : <></>
        }
    </SideNavContainer>
};

export default SideNavigation;