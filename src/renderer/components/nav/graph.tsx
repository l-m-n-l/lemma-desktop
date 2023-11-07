import React, { useState } from 'react';

import * as emoji from 'node-emoji';

import { PiArrowLeftBold } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

import { GraphInfoContainer, GraphNavContainer } from '../../styles/containers';
import { GraphBackButton, GraphIconButton, GraphTitleButton } from '../../styles/interactions';

interface GraphNavProps {
    graphIcon: string
    graphTitle: string
    activeGraphMembers?: Array<any>
}

const GraphNav = ({ ...props } : GraphNavProps) => {
    const navigate = useNavigate();

    return <GraphNavContainer>
        <GraphInfoContainer style={{
            gap: "0.5rem"
        }}>
            <GraphBackButton 
                onClick={() => {
                    navigate("/graph");
                }}
            >
                <PiArrowLeftBold />
            </GraphBackButton>

            <GraphIconButton
                onClick={() => {

                }}
            >
                {emoji.get(props.graphIcon)}
            </GraphIconButton>
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