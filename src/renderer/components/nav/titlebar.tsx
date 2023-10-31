import React, { useState } from 'react';
import { sendIPCMessage } from '../../../helpers/ipcmanager';
import { IPCChannel } from '../../../types/ipc';

import { TitleBarContainer } from '../../styles/containers';
import WindowButtonGroup from '../groups/mainWindowButtons';
import {
    DocumentMenuButtons
} from '../groups/menuButtons';

const TitleBar = () => {    
    return <TitleBarContainer>
        <WindowButtonGroup />
        <DocumentMenuButtons />
    </TitleBarContainer>
};

export default TitleBar;