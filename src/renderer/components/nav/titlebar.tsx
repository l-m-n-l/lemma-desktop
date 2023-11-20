import React, { useState } from 'react';
import { FaAnglesDown, FaAnglesUp } from 'react-icons/fa6';
import { sendIPCMessage } from '../../../helpers/ipcmanager';
import { IPCChannel } from '../../../types/ipc';

import { TitleBarContainer, TitleBarInterior, TitleDragContainer } from '../../styles/containers';
import { MinimizeTitleBarButton } from '../../styles/interactions';
import WindowButtonGroup from '../groups/mainWindowButtons';
import {
    DocumentMenuButtons
} from '../groups/menuButtons';
import TabsNav from './tabs';

const TitleBar = () => {
    const [isMinimized, setIsMinimized] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    
    return <TitleBarContainer onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        <TitleDragContainer></TitleDragContainer>
        <TitleBarInterior>
            <WindowButtonGroup />
            {
                (!isMinimized) ? 
                    <>
                        <TabsNav />
                        <DocumentMenuButtons />
                    </>
                : <></>
            }
        </TitleBarInterior>
        {
            (isHovering) ? 
                <MinimizeTitleBarButton onClick={() => setIsMinimized(!isMinimized)}>
                    {(isMinimized) ? <FaAnglesDown /> : <FaAnglesUp />}
                </MinimizeTitleBarButton>
            : <></>
        }
    </TitleBarContainer>
};

export default TitleBar;