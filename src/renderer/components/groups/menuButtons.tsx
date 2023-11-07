import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { Tooltip as ReactTooltip } from 'react-tooltip';
import "react-tooltip/dist/react-tooltip.css";

import { PiShareFatBold, PiClockClockwiseBold } from 'react-icons/pi';

import { WindowButtonGroupContainer } from '../../styles/containers';
import { MenuButton } from '../../styles/interactions';
import { ModalContext } from '../../../providers/ModalProvider';
import useTabs from '../../../hooks/useTabs';

import { ModalType, DrawerType } from '../../../types/contexts';
import { DrawerContext } from '../../../providers/DrawerProvider';
import { setDrawerState, setModalState } from '../../../providers/redux/slicers/tabs';
import { useDispatch, useSelector } from 'react-redux';

export const DocumentMenuButtons = () => {
    const dispatch = useDispatch();

    const tabs = useSelector((state) => state.tabs.tabs);
    const selectedTabId = useSelector((state) => state.tabs.selectedTabId);
    const {
        state: {
            drawer: {
                isOpen,
                type,
                data
            }
        }
    } = tabs[selectedTabId];

    const validPathNames = [
        "/graph",
        "/notebook"
    ];

    return <WindowButtonGroupContainer style={{
        gap: "0.1rem",
        paddingBottom: "0.3rem"
    }}>
        <MenuButton
            onClick={() => {
                dispatch(setModalState({
                    type: !(isOpen && type === ModalType.share),
                    isOpen: !(type === ModalType.share && isOpen)
                }));
            }}
            data-tooltip-content={"Share or Publish"} 
            data-tooltip-id={(isOpen && type === ModalType.share) ? "" : "info-tooltip-3"}
            isValid={type === ModalType.share && isOpen}
        >
            Share
        </MenuButton>
        <MenuButton
            onClick={() => {
                dispatch(setDrawerState({
                    type: !(isOpen && type === DrawerType.history) ? DrawerType.history : null,
                    isOpen: !(type === DrawerType.history && isOpen)
                }));
            }}
            data-tooltip-content={"View Change History"} 
            data-tooltip-id={"info-tooltip-3"}
            isValid={type === DrawerType.history && isOpen}
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