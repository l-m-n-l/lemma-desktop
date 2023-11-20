import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    addTab as reduxAddTab,
    removeTab as reduxRemoveTab,
    selectTab as reduxSelectTab,
    updateTabInfo as reduxUpdateTabInfo,
    setModalState as reduxSetModalState,
    setDrawerState as reduxSetDrawerState
} from '../providers/redux/slicers/tabs';
import { DrawerType, ModalType } from '../types/contexts';

const useTabs = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const selectedTabId = useSelector((state) => state.tabs.selectedTabId);
    // @ts-ignore
    const tabs = useSelector((state) => state.tabs.tabs);

    const addTab = () => {
        dispatch(reduxAddTab());
    };

    const removeTab = (id: number) => {
        dispatch(reduxRemoveTab(id));
    };

    const selectTab = (id: number) => {
        dispatch(reduxSelectTab(id));
    };

    const updateTabInfo = (tabIcon: string, tabTitle: string, tabURI: string) => {
        dispatch(reduxUpdateTabInfo({
            tabIcon,
            tabTitle,
            tabURI
        }));
    };

    const setModalState = (type: ModalType | null, isOpen: boolean, data: any) => {
        dispatch(reduxSetModalState({
            type,
            isOpen,
            data
        }));
    };

    const setDrawerState = (type: DrawerType, isOpen: boolean, data: any) => {
        dispatch(reduxSetDrawerState({
            type,
            isOpen,
            data
        }))
    };

    const setPageState = () => {

    };

    return {
        currentTab: {
            tabInfo: {
                tabIcon: tabs[selectedTabId].tabIcon,
                tabTitle: tabs[selectedTabId].tabTitle,
                tabUri: tabs[selectedTabId].tabURI
            },
            state: tabs[selectedTabId].state
        },
        tabs,
        fns: {
            addTab,
            removeTab,
            selectTab,
            updateTabInfo,
            setModalState,
            setDrawerState,
            setPageState
        }
    }
};

export default useTabs;