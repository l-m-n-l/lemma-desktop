import React, { useState } from 'react';
import { sendIPCMessage } from '../../../helpers/ipcmanager';
import { IPCChannel } from '../../../types/ipc';

import { TitleBarContainer } from '../../styles/containers';
import WindowButtonGroup from '../groups/mainWindowButtons';
import MenuButtonGroup from '../groups/menuButtons';

const TitleBar = () => {    
    return <TitleBarContainer>
        <WindowButtonGroup />
        <MenuButtonGroup />
    </TitleBarContainer>
};

export default TitleBar;