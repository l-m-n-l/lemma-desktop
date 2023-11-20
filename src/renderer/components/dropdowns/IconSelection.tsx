import React, { useEffect, useMemo, useRef, useState } from 'react';

import { PiMagnifyingGlassBold } from 'react-icons/pi';

import * as emoji from 'node-emoji';
import emojilib from 'emojilib';

import { IconSelectionContainer, ModalBackDrop } from '../../styles/containers';
import { CreateNodeIconButton, NoBorderInput } from '../../styles/interactions';

const IconSelection = ({ ...props } : {
    isOpen: boolean,
    setIsOpen: Function,
    icon: string,
    setIcon: Function
}) => {
    const modalRef = useRef();
    const scrollContainerRef = useRef();

    const [iconViewDepth, setIconViewDepth] = useState(500);

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                props.setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const div = scrollContainerRef.current;

        const handleScroll = () => {
          const isAtBottom = div.scrollHeight - div.scrollTop === div.clientHeight;
          if (isAtBottom) {
            setIconViewDepth(iconViewDepth + 20);
          }
        };
    
        div.addEventListener('scroll', handleScroll);
    
        return () => div.removeEventListener('scroll', handleScroll);
    }, [])

    return <IconSelectionContainer ref={modalRef}>
        <div style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            borderBottom: "1px solid lightgray"
        }}>
            <PiMagnifyingGlassBold />
            <NoBorderInput placeholder={"Search for icon..."} />
        </div>
        <div ref={scrollContainerRef} style={{
            width: '100%',
            overflowY: "scroll",
            maxHeight: "10rem"
        }}>
            {emojilib.ordered.slice(0, iconViewDepth).map(key => {
                let emj = emoji.get(key);
                return <CreateNodeIconButton onClick={() => {
                    props.setIcon(key);
                    props.setIsOpen(false);
                }}>
                    {emj}
                </CreateNodeIconButton>
            })}
        </div>
    </IconSelectionContainer>
};

export default IconSelection;