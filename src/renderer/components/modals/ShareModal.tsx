import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { config, useSpring } from 'react-spring';

import { ShareModalContainer } from '../../styles/containers';

import { ModalContext } from '../../../providers/ModalProvider';
import { ModalType } from '../../../types/contexts';

const ShareModal = () => {
    const [mode, setMode] = useState<"share" | "publish">("share");

    const modalContext = useContext(ModalContext);
    const fade = useSpring({
        opacity: (modalContext?.vars.type === ModalType.share && modalContext?.vars.isOpen) ? 1 : 0,
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

    return (modalContext?.vars.type === ModalType.share && modalContext?.vars.isOpen) ? <ShareModalContainer style={fade} ref={modalRef}>

    </ShareModalContainer> : <></>
};

export default ShareModal;