import React, { useState } from 'react';
import { FaAnglesUp } from 'react-icons/fa6';
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
    const [isHovering, setIsHovering] = useState(false);
    
    return <TitleBarContainer onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        <TitleDragContainer></TitleDragContainer>
        <TitleBarInterior>
            <WindowButtonGroup />
            <TabsNav />
            <DocumentMenuButtons />
        </TitleBarInterior>
        {
            (isHovering) ? 
                <MinimizeTitleBarButton>
                    <FaAnglesUp />
                </MinimizeTitleBarButton>
            : <></>
        }
    </TitleBarContainer>
};

export default TitleBar;