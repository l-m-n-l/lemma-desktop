import React, { useContext, useEffect } from 'react';
import { DrawerContainer, DrawerHeaderContainer } from '../../styles/containers';
import { useSpring, animated } from 'react-spring';
import { DrawerContext } from '../../../providers/DrawerProvider';
import { DrawerType } from '../../../types/contexts';
import { DrawerMinimizeButton, DrawerSearch } from '../../styles/interactions';
import { setDrawerState } from '../../../providers/redux/slicers/tabs';
import useTabs from '../../../hooks/useTabs';

import { FaAnglesRight } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';

const HistoryDrawer = () => {
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

    console.log("drawerHistory, state", tabs[selectedTabId]);

    const animation = useSpring({
        transform: (type === DrawerType.history && isOpen) ? `translateX(0)` : `translateX(100%)`,
        config: { mass: 1, tension: 280, friction: 30 },
    });

    return (type === DrawerType.history && isOpen) ? <DrawerContainer style={animation}>
        <DrawerHeaderContainer>
            <DrawerMinimizeButton
                onClick={() => {
                    dispatch(setDrawerState({
                        type: null,
                        isOpen: false,
                        data: {}
                    }));
                }}
            >
                <FaAnglesRight />
            </DrawerMinimizeButton>
            <DrawerSearch placeholder={"Search graph update history..."} />
        </DrawerHeaderContainer>
    </DrawerContainer> : <></>
};

export default HistoryDrawer;