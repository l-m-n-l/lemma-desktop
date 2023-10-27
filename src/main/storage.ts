import { app } from 'electron';
import Datastore from 'nedb';
import { DataStores } from '../types/storage';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

export const UserDataStore = new Datastore({ 
    filename: `${process.env.NODE_ENV === 'development' ? '.' : app.getAppPath()}/data/user.db`, 
    autoload: true,
    // afterSerialization: (plaintext) => {
    //     const key = Buffer.from(process.env.LOCAL_KEY as string, 'hex')
    //     const iv = crypto.randomBytes(16)
	// 	const aes = crypto.createCipheriv('aes-256-cbc', key, iv)
	// 	let ciphertext = aes.update(plaintext)
	// 	ciphertext = Buffer.concat([iv, ciphertext, aes.final()])
	// 	return ciphertext.toString('base64')
    // },
    // beforeDeserialization: (ciphertext) => {
    //     const key = Buffer.from(process.env.LOCAL_KEY as string, 'hex')
    //     const ciphertextBytes = Buffer.from(ciphertext, 'base64')
	// 	const iv = ciphertextBytes.slice(0, 16)
	// 	const data = ciphertextBytes.slice(16)
	// 	const aes = crypto.createDecipheriv('aes-256-cbc', key, iv)
	// 	let plaintextBytes = Buffer.from(aes.update(data))
	// 	plaintextBytes = Buffer.concat([plaintextBytes, aes.final()])
	// 	return plaintextBytes.toString()
    // }
});
  
export const OfflineDataStore = new Datastore({
    filename: `${process.env.NODE_ENV === 'development' ? '.' : app.getAppPath()}/data/offline_manifest.db`,
    autoload: true,
    // afterSerialization: (plaintext) => {
    //     const iv = crypto.randomBytes(16)
	// 	const aes = crypto.createCipheriv('aes-256-cbc', process.env.LOCAL_KEY as string, iv)
	// 	let ciphertext = aes.update(plaintext)
	// 	ciphertext = Buffer.concat([iv, ciphertext, aes.final()])
	// 	return ciphertext.toString('base64')
    // },
    // beforeDeserialization: (ciphertext) => {
    //     const ciphertextBytes = Buffer.from(ciphertext, 'base64')
	// 	const iv = ciphertextBytes.slice(0, 16)
	// 	const data = ciphertextBytes.slice(16)
	// 	const aes = crypto.createDecipheriv('aes-256-cbc', process.env.LOCAL_KEY as string, iv)
	// 	let plaintextBytes = Buffer.from(aes.update(data))
	// 	plaintextBytes = Buffer.concat([plaintextBytes, aes.final()])
	// 	return plaintextBytes.toString()
    // }
});

const stores = {
    user: UserDataStore,
    offline: OfflineDataStore
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