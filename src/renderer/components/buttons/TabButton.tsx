import React, { useState } from 'react';

import * as emoji from 'node-emoji';

import { Tooltip as ReactTooltip } from 'react-tooltip';
import "react-tooltip/dist/react-tooltip.css";

import { PiUserBold, PiX, PiHouseBold, PiGraphBold, PiGearBold } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeTab, selectTab } from '../../../providers/redux/slicers/tabs';

import { TabContainer, TabTitleContainer } from '../../styles/containers';
import { TabCloseButton } from '../../styles/interactions';
import { TabTitle } from '../../styles/typography';

interface TabButtonProps {
    isSelected: boolean
    tabId: number
    tabTitle: string
    tabIcon: string
}

const TabButton = ({ ...props } : TabButtonProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const tabs = useSelector((state) => state.tabs.tabs);
    const {
        tabURI,
        state: {
            drawer: {
                isOpen,
                type,
                data
            }
        }
    } = tabs[props.tabId];

    const [isHovering, setIsHovering] = useState(false);

    const system_icons = {
        "system-home": <PiHouseBold />,
        "system-graph": <PiGraphBold />,
        "system-settings": <PiGearBold />,
        "system-profile": <PiUserBold />
    };

    return <>
        <TabContainer 
            isValid={props.isSelected}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            data-tooltip-content={props.tabTitle} 
            data-tooltip-id={"info-tooltip-4"}
        >
            <TabTitleContainer onClick={() => {
                console.log("tab" + props.tabId + " URI", tabURI)
                navigate(tabURI);
                dispatch(selectTab(props.tabId))
            }}>
                <TabTitle style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <span style={{ marginRight: "0.5rem" }}>{
                        (system_icons[props.tabIcon]) ? system_icons[props.tabIcon] : emoji.get(props.tabIcon)
                    }</span>
                    {(props.tabTitle.length > 10) ? props.tabTitle.slice(0, 10) + "..." : props.tabTitle}
                </TabTitle>
            </TabTitleContainer>
            {((props.isSelected || isHovering) && (tabs.length > 1)) ? <TabCloseButton onClick={() => {
                dispatch(removeTab(props.tabId));
            }}><PiX /></TabCloseButton> : <></>}
        </TabContainer>
        <ReactTooltip 
            style={{ fontFamily: "Roboto, sans-serif", backgroundColor: "black", color: "white", fontSize: "0.75rem", zIndex: 303 }} 
            place={"bottom"} 
            id={"info-tooltip-4"}
        />
    </>
};

export default TabButton;