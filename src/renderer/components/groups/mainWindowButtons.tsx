import React, { useState } from 'react';

import { WindowButtonGroupContainer } from '../../styles/containers';
import { WindowButton } from '../../styles/interactions';

import { PiX } from 'react-icons/pi';

import { sendIPCMessage } from '../../../helpers/ipcmanager';

import { IPCChannel } from '../../../types/ipc';

const MainWindowButtonGroup = () => {
    const [isQuitHover, setIsQuitHover] = useState<boolean>(false);
    const [isMinimizeHover, setIsMinimizeHover] = useState<boolean>(false);
    const [isMaximizeHover, setIsMaximizeHover] = useState<boolean>(false);
    
    return <WindowButtonGroupContainer>
        <WindowButton 
            windowButtonType={"quit"} onClick={() => {
                sendIPCMessage(IPCChannel.APP, {
                    operation: "quit"
                }, (data: any) => {});
            }}
        >
            <PiX />
        </WindowButton>
        <WindowButton 
            windowButtonType={"minimize"} 
            onClick={() => {
                sendIPCMessage(IPCChannel.APP, {
                    operation: "minimize"
                }, (data: any) => {});
            }}
        >

        </WindowButton>
        <WindowButton 
            onClick={() => {
                sendIPCMessage(IPCChannel.APP, {
                    operation: "maximize"
                }, (data: any) => {});
            }} 
            windowButtonType={"maximize"}
        >
                
        </WindowButton>
    </WindowButtonGroupContainer>
};

export default MainWindowButtonGroup;