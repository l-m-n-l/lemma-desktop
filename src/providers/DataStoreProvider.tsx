import { sendIPCMessage } from '../helpers/ipcmanager';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { 
    DataStores,
    DataStoreContextProps, UserManifestProps, OfflineManifestProps
} from '../types/storage';
import { IPCChannel } from '../types/ipc';

export const DataStoreContext = createContext<DataStoreContextProps | null>(null);

export const DataStoreProvider = ({ children } : { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isUserDataLoading, setIsUserDataLoading] = useState<boolean>(false);
    const [offlineManifest, setOfflineManifest] = useState<OfflineManifestProps | null>(null);
    const [userManifest, setUserManifest] = useState<UserManifestProps | null>(null);

    const _createDocument = async (ds: DataStores, document: any) => {
        return new Promise((resolve, reject) => {
            sendIPCMessage(IPCChannel.NEDB, {
                method: "create",
                args: {
                    ds,
                    document
                }
            }, (data: any) => {
                resolve(data)
            })
        })
    };

    const _findDocument = (ds: DataStores, query: any) => {
        return new Promise((resolve, reject) => {
            sendIPCMessage(IPCChannel.NEDB, {
                method: "find",
                args: {
                    ds,
                    query
                }
            }, (data: any) => {
                resolve(data)
            })
        })
    };

    const _updateDocument = () => {

    };

    const ContextValue = {
        Flags: {
            isUserDataLoading,
            isLoggedIn
        },
        Data: {
            offlineManifest,
            userManifest
        },
        NeDBFunctions: {
            createDocument: _createDocument,
            findDocument: _findDocument,
            updateDocument: _updateDocument
        },
        ContextFunctions: {
            setOfflineManifest,
            setUserManifest,
            setIsUserDataLoading,
            setIsLoggedIn
        }
    }

    return <DataStoreContext.Provider value={ContextValue}>{children}</DataStoreContext.Provider>
};