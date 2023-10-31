import React, { useContext } from 'react';
import 'reactflow/dist/style.css';
import * as emoji from 'node-emoji'
import { NodeTitle } from '../../../styles/typography';
import { NoteBookNodeContainer, NodeTitleContainer } from '../../../styles/containers';
import { NoteBookNodeButton } from '../../../styles/interactions';
import { useSpring, animated } from 'react-spring';
import { ModalContext } from '../../../../providers/ModalProvider';

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
        <NoteBookNodeContainer>
            <NoteBookNodeButton
                style={{
                    transform: buttonProps.scale.interpolate(scale => `scale(${scale})`),
                }}
                onMouseEnter={(e) => {
                    setTitleProps({ y: 5 });
                    modalContext?.fns.setModalType("nodeHover");
                    modalContext?.fns.setIsOpen(true);
                    modalContext?.fns.setClientX(e.clientX);
                    modalContext?.fns.setClientY(e.clientY);
                    setButtonProps({ scale: 1.1 });
                }}
                onMouseMove={(e) => {
                    modalContext?.fns.setModalType("nodeHover");
                    modalContext?.fns.setIsOpen(true);
                    modalContext?.fns.setClientX(e.clientX);
                    modalContext?.fns.setClientY(e.clientY);
                }}
                onMouseLeave={() => {
                    setTitleProps({ y: 0 })
                    modalContext?.fns.setModalType(null);
                    modalContext?.fns.setIsOpen(false);
                    modalContext?.fns.setClientX(null);
                    modalContext?.fns.setClientY(null);
                    setButtonProps({ scale: 1 })
                }}
            >
                {emoji.get(data.icon)}
            </NoteBookNodeButton>
            <NodeTitleContainer
                style={{
                    transform: titleProps.y.interpolate(y => `translate3d(0, ${y}px, 0)`),
                }}
            >
                <NodeTitle>{data.title}</NodeTitle>
            </NodeTitleContainer>
        </NoteBookNodeContainer>
    )
};

export default NoteBookNode;