import React, { useState } from 'react';

import * as emoji from 'node-emoji';

import { PiArrowLeftBold, PiGearBold } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

import { GraphInfoContainer, GraphNavContainer } from '../../styles/containers';
import { GraphBackButton, GraphIconButton, GraphTitleButton } from '../../styles/interactions';
import useTabs from '../../../hooks/useTabs';
import IconSelection from '../dropdowns/IconSelection';

interface GraphNavProps {
    graphIcon: string
    graphTitle: string
    activeGraphMembers?: Array<any>
}

const GraphNav = ({ ...props } : GraphNavProps) => {
    const navigate = useNavigate();

    const [iconDropDownSelected, setIconDropDownSelected] = useState(false);
    const [icon, setIcon] = useState(props.graphIcon);

    const {
        fns: {
            updateTabInfo
        }
    } = useTabs();

    return <GraphNavContainer>
        <GraphInfoContainer style={{
            gap: "0.5rem"
        }}>
            <GraphBackButton 
                onClick={() => {
                    updateTabInfo("system-graph", "Your Graphs", "/graph");
                    navigate("/graph");
                }}
            >
                <PiArrowLeftBold />
            </GraphBackButton>

            <GraphBackButton 
                onClick={() => {
                    updateTabInfo("system-graph", "Your Graphs", "/graph");
                    navigate("/graph");
                }}
            >
                <PiGearBold />
            </GraphBackButton>

            <div style={{
                position: "relative"
            }}>
                <GraphIconButton
                    onClick={() => {
                        setIconDropDownSelected(!iconDropDownSelected);
                    }}
                >
                    {emoji.get(props.graphIcon)}
                </GraphIconButton>
                {(iconDropDownSelected) ? <IconSelection icon={icon} setIcon={setIcon} isOpen={iconDropDownSelected} setIsOpen={setIconDropDownSelected} /> : <></>}
            </div>

            <GraphTitleButton
                onClick={() => {

                }}
            >
                {props.graphTitle}
            </GraphTitleButton>
        </GraphInfoContainer>

        <GraphInfoContainer>
            
        </GraphInfoContainer>
    </GraphNavContainer>
};

export default GraphNav;