import React from 'react';
import { useLocation } from 'react-router-dom';

import { Tooltip as ReactTooltip } from 'react-tooltip';
import "react-tooltip/dist/react-tooltip.css";

import { PiShareFatBold, PiClockClockwiseBold } from 'react-icons/pi';

import { WindowButtonGroupContainer } from '../../styles/containers';
import { MenuButton } from '../../styles/interactions';

export const DocumentMenuButtons = () => {
    const validPathNames = [
        "/graph",
        "/notebook"
    ];

    return <WindowButtonGroupContainer style={{
        gap: "0.1rem"
    }}>
        <MenuButton
            onClick={() => {
                
            }}
            data-tooltip-content={"Share or Publish"} 
            data-tooltip-id={"info-tooltip-3"}
        >
            Share
        </MenuButton>
        <MenuButton
            data-tooltip-content={"View Change History"} 
            data-tooltip-id={"info-tooltip-3"}
        >
            <PiClockClockwiseBold />
        </MenuButton>
        <ReactTooltip 
            style={{ fontFamily: "Roboto, sans-serif", backgroundColor: "black", color: "white" }} 
            place={"bottom"} 
            id={"info-tooltip-3"}
        />
    </WindowButtonGroupContainer>
};