import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { Tooltip as ReactTooltip } from 'react-tooltip';
import "react-tooltip/dist/react-tooltip.css";

import { PiShareFatBold, PiClockClockwiseBold } from 'react-icons/pi';

import { WindowButtonGroupContainer } from '../../styles/containers';
import { MenuButton } from '../../styles/interactions';
import { ModalContext } from '../../../providers/ModalProvider';

import { ModalType, DrawerType } from '../../../types/contexts';
import { DrawerContext } from '../../../providers/DrawerProvider';

export const DocumentMenuButtons = () => {
    const modalContext = useContext(ModalContext);
    const drawerContext = useContext(DrawerContext);

    const validPathNames = [
        "/graph",
        "/notebook"
    ];

    return <WindowButtonGroupContainer style={{
        gap: "0.1rem"
    }}>
        <MenuButton
            onClick={() => {
                modalContext?.fns.setModalType(!(modalContext?.vars.isOpen && modalContext?.vars.type === ModalType.share) ? ModalType.share : null);
                modalContext?.fns.setIsOpen(!(modalContext?.vars.isOpen && modalContext?.vars.type === ModalType.share));
                modalContext?.fns.setModalData();
            }}
            data-tooltip-content={"Share or Publish"} 
            data-tooltip-id={(modalContext?.vars.type === ModalType.share && modalContext?.vars.isOpen) ? "" : "info-tooltip-3"}
            isValid={modalContext?.vars.isOpen && modalContext?.vars.type === ModalType.share}
        >
            Share
        </MenuButton>
        <MenuButton
            onClick={() => {
                drawerContext?.fns.setDrawerType(!(drawerContext?.vars.isOpen && drawerContext?.vars.type === DrawerType.history) ? DrawerType.history : null);
                drawerContext?.fns.setIsOpen(!(drawerContext?.vars.isOpen && drawerContext?.vars.type === DrawerType.history));
                // drawerContext?.fns.setDrawerData();
            }}
            data-tooltip-content={"View Change History"} 
            data-tooltip-id={"info-tooltip-3"}
            isValid={drawerContext?.vars.isOpen && drawerContext?.vars.type === DrawerType.history}
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