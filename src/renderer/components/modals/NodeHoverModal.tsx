import React, { useContext, useEffect } from 'react';
import { ModalContext } from '../../../providers/ModalProvider';
import { ModalType } from '../../../types/contexts';
import { HoverModalContainer, NodeHoverModalSectionContainer } from '../../styles/containers';
import {useSpring, animated, config} from 'react-spring';
import { NodeModalHoverSectionTitle } from '../../styles/typography';

const NodeHoverModal = () => {
    const modalContext = useContext(ModalContext);
    const fade = useSpring({
        opacity: (modalContext?.vars.type === ModalType.nodeHover && modalContext?.vars.isOpen) ? 1 : 0,
        config: config.gentle
    });

    return (modalContext?.vars.type === ModalType.nodeHover && modalContext?.vars.isOpen) ? <HoverModalContainer style={{
        left: modalContext?.vars.clientX + "px",
        top: modalContext?.vars.clientY + "px",
        ...fade
    }}>
        <NodeHoverModalSectionContainer>
            <NodeModalHoverSectionTitle>Contributors</NodeModalHoverSectionTitle>
        </NodeHoverModalSectionContainer>
        <NodeHoverModalSectionContainer>
            <NodeModalHoverSectionTitle>Alerts</NodeModalHoverSectionTitle>
        </NodeHoverModalSectionContainer>
    </HoverModalContainer> : <></>
};

export default NodeHoverModal;