import { v4 as uuidv4 } from 'uuid';
import { AppEventsIpcListener } from '../main/ipc';
import { MessageQueueType, IPCChannel } from '../types/ipc';

export const messageQueues = {
    nedb: {} as MessageQueueType,
    app: {} as MessageQueueType
};

export const sendIPCMessage = (channel: IPCChannel, data: any, callback: (data: any) => void) => {
    const id = uuidv4();
    // @ts-ignore
    window.electron.ipcRenderer.sendMessage(channel, [{
        id,
        ...data
    }]);
    messageQueues[channel][id] = callback;
};

const NeDBEventListener = (response: { id: string, data: Object | Array<Object> }) => {
    const { id, data } = response;

    const callback = messageQueues['nedb'][id];

    if(callback) {
        callback(data);
        delete messageQueues['nedb'][id];
    }
};



// @ts-ignore
window.electron.ipcRenderer.on(IPCChannel.NEDB, NeDBEventListener);