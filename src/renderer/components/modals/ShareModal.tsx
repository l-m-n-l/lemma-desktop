import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { config, useSpring } from 'react-spring';
import { useDispatch, useSelector } from 'react-redux';

import { ShareModalContainer } from '../../styles/containers';

import { ModalContext } from '../../../providers/ModalProvider';
import { ModalType } from '../../../types/contexts';

const ShareModal = () => {
    const tabs = useSelector((state) => state.tabs.tabs);
    const selectedTabId = useSelector((state) => state.tabs.selectedTabId);
    const {
        state: {
            modal: {
                isOpen,
                type,
                data
            }
        }
    } = tabs[selectedTabId];

    const [mode, setMode] = useState<"share" | "publish">("share");

    const modalContext = useContext(ModalContext);
    const fade = useSpring({
        opacity: (type === ModalType.share && isOpen) ? 1 : 0,
        config: config.wobbly
    });

    const modalRef = useRef();

    useMemo(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                modalContext?.fns.setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modalContext]);

    return (type === ModalType.share && isOpen) ? <ShareModalContainer style={fade} ref={modalRef}>

    </ShareModalContainer> : <></>
};

export default ShareModal;