import { app } from 'electron';
import Datastore from 'nedb';

export const UserDataStore = new Datastore({ 
    filename: `${process.env.NODE_ENV === 'dev' ? '.' : app.getAppPath()}/data/user.db`, 
    autoload: true 
});
  
export const OfflineDataStore = new Datastore({
    filename: `${process.env.NODE_ENV === 'dev' ? '.' : app.getAppPath()}/data/offline_manifest.db`,
    autoload: true
});

const stores = {
    user: UserDataStore,
    offline: OfflineDataStore
}

export enum DataStores {
    user = "user",
    offline = "offline"
}

export const createNeDBDocument = (ds: DataStores, document: any) => {
    return new Promise((resolve, reject) => {
        const data_store = stores[ds];
        data_store.insert(document, (err, new_doc) => {
            if(err) reject(err);
            resolve(new_doc)
        });
    })
};

export const deleteNeDBDocument = (ds: DataStores, query: any) => {
    return new Promise((resolve, reject) => {
        const data_store = stores[ds];
        data_store.remove(query, {}, (err, num_removed) => {
            if(err) reject(err)
            resolve(num_removed)
        });
    })
};

export const updateNeDBDocument = (ds: DataStores, query: any, update: any) => {
    return new Promise((resolve, reject) => {
        const data_store = stores[ds];
        data_store.update(query, update, {}, (err) => {
            if(err) reject(err)
            resolve(true)
        });
    })
};

export const findNeDBDocument = (ds: DataStores, query: any) => {
    return new Promise((resolve, reject) => {
        const data_store = stores[ds];
        data_store.find(query, {}, (err, docs) => {
            if(err) reject(err)
            resolve(docs)
        })
    })
}