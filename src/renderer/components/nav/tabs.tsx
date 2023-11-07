import React from 'react';
import { PiPlus } from 'react-icons/pi';
import { useSelector, useDispatch } from 'react-redux';
import useTabs from '../../../hooks/useTabs';
import { addTab } from '../../../providers/redux/slicers/tabs';
import { TabContainer, TabsNavContainer } from '../../styles/containers';
import { AddTabButton } from '../../styles/interactions';
import TabButton from '../buttons/TabButton';

const TabsNav = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const selectedTabId = useSelector((state) => state.tabs.selectedTabId);
    const {
        fns: {
            addTab
        },
        tabs
    } = useTabs();

    return <TabsNavContainer>
        {
            [...tabs, ""].map((t, index) => {
                return (t !== "") ? 
                    <TabButton 
                        tabId={index} 
                        tabTitle={t.tabTitle} 
                        tabIcon={t.tabIcon} 
                        isSelected={selectedTabId === index} 
                    /> : 
                <AddTabButton onClick={async () => {
                    addTab();
                }}>
                    <PiPlus />
                </AddTabButton>
            })
        }
    </TabsNavContainer>
};

export default TabsNav;