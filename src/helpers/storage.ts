import { sendIPCMessage } from './ipcmanager';
import { DataStores } from '../types/storage';
import { IPCChannel } from '../types/ipc';
import { v4 as uuidv4 } from 'uuid';

export const createNeDBDocument = (ds: DataStores, document: any) => {
    return new Promise((resolve, reject) => {
        sendIPCMessage(IPCChannel.NEDB, {
            method: "create",
            args: {
                ds,
                document
            }
        }, (data: any) => {
            resolve(data);
        })
    })
};

export const findNeDBDocument = (ds: DataStores, query: any) => {
    return new Promise((resolve, reject) => {
        const id = uuidv4();

        sendIPCMessage(IPCChannel.NEDB, {
            id,
            method: "find",
            args: {
                query
            }
        }, (data: any) => {
            resolve(data);
        })
    })
}

// // export const deleteNeDBDocument = (ds: DataStores, query: any) => {
// //     return new Promise((resolve, reject) => {
// //         const data_store = stores[ds];
// //         data_store.remove(query, {}, (err, num_removed) => {
// //             if(err) reject(err)
// //             resolve(num_removed)
// //         });
// //     })
// // };

// // export const updateNeDBDocument = (ds: DataStores, query: any, update: any) => {
// //     return new Promise((resolve, reject) => {
// //         const data_store = stores[ds];
// //         data_store.update(query, update, {}, (err) => {
// //             if(err) reject(err)
// //             resolve(true)
// //         });
// //     })
// // };