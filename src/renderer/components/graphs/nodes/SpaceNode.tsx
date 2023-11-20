import React, { useState, useContext } from 'react';
import { SpaceNodeContainer, NodeTitleContainer } from '../../../styles/containers';
import * as emoji from 'node-emoji'
import { NodeTitle } from '../../../styles/typography';
import { useSpring, animated } from 'react-spring';
import { SpaceNodeButton } from '../../../styles/interactions';
import { ModalContext } from '../../../../providers/ModalProvider';
import { NodeNotificationBadge } from '../../badges/NotificationBadge';

const NoteBookNode = ({ data }) => {
    const modalContext= useContext(ModalContext);

    const [buttonProps, setButtonProps] = useSpring(() => ({
        scale: 1,
        config: { mass: 5, tension: 350, friction: 40 },
    }));

    const [titleProps, setTitleProps] = useSpring(() => ({
        y: 0,
        config: { mass: 5, tension: 350, friction: 40 },
    }));

    return (
        <SpaceNodeContainer>
            <NodeNotificationBadge count={10} />
            <SpaceNodeButton
                style={{
                    transform: buttonProps.scale.interpolate(scale => `scale(${scale})`),
                }}
                onMouseEnter={(e) => {
                    setTitleProps({ y: 5 });
                    setButtonProps({ scale: 1.1 });
                }}
                onMouseLeave={() => {
                    setTitleProps({ y: 0 })
                    setButtonProps({ scale: 1 })
                }}
            >
                {emoji.get(data.icon)}
            </SpaceNodeButton>
            <NodeTitleContainer
                style={{
                    transform: titleProps.y.interpolate(y => `translate3d(0, ${y}px, 0)`),
                }}
            >
                <NodeTitle>{data.title}</NodeTitle>
            </NodeTitleContainer>
        </SpaceNodeContainer>
    )
};

export default NoteBookNode;