import React, { useState } from 'react';

import { PiX } from 'react-icons/pi';
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

    return <TabContainer 
        isValid={props.isSelected}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
    >
        <TabTitleContainer onClick={() => {
            console.log("tab" + props.tabId + " URI", tabURI)
            navigate(tabURI);
            dispatch(selectTab(props.tabId))
        }}>
            <TabTitle>{props.tabTitle}</TabTitle>
        </TabTitleContainer>
        {((props.isSelected || isHovering) && (tabs.length > 1)) ? <TabCloseButton onClick={() => {
            dispatch(removeTab(props.tabId));
        }}><PiX /></TabCloseButton> : <></>}
    </TabContainer>
};

export default TabButton;