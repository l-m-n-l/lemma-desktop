import {
    createNeDBDocument,
    findNeDBDocument,
  } from './storage';
import {
    DataStores,
    NeDBArgType
} from '../types/storage';
import { IPCChannel } from '../types/ipc';
import { ipcMain, app } from 'electron';
import { mainWindow } from './main';

export const NeDbIpcListener = async () => {
    ipcMain.on(IPCChannel.NEDB, async (event, args: Array<NeDBArgType>) => {
        const {
            id,
            method,
            args: {
                ds,
                document,
                query
            }
        } = args[0];

        // Create Document
        switch(method) {
            case "create":
                {
                    const data = await createNeDBDocument(ds, document);
                    event.sender.send(IPCChannel.NEDB, {
                        id,
                        data
                    })
                    return
                }

            // Find Document
            case "find":
                {
                    const data = await findNeDBDocument(ds, query);
                    event.sender.send(IPCChannel.NEDB, {
                        id,
                        data
                    })
                }
            default:
                return
        }
    })
}

export const AppEventsIpcListener = async () => {
    ipcMain.on(IPCChannel.APP, async (event, args: Array<any>) => {
        const {
            operation
        } = args[0];

        switch(operation) {
            case "quit":
                {
                    app.quit();
                    return
                }
            case "maximize":
                {
                    mainWindow?.maximize();
                    return
                }
            case "minimize":
                {
                    mainWindow?.minimize();
                    return
                }
            default:
                return
        }
    });
};

export const IPCListeners = {
    nedb: NeDbIpcListener,
    app: AppEventsIpcListener
}

export const initializeIpcManager = () => {
    for (const [key, value] of Object.entries(IPCChannel)) {
        IPCListeners[value]();
    }
};