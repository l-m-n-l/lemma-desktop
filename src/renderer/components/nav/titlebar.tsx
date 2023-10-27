import React, { useState } from 'react';
import { sendIPCMessage } from '../../../helpers/ipcmanager';
import { IPCChannel } from '../../../types/ipc';

import { TitleBarContainer } from '../../styles/containers';
import WindowButtonGroup from '../groups/mainWindowButtons';

const TitleBar = () => {    
    return <TitleBarContainer>
        <WindowButtonGroup />
    </TitleBarContainer>
};

export default TitleBar;