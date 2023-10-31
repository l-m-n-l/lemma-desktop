import { useContext, useEffect, useState } from 'react';
import { DataStoreContext } from '../providers/DataStoreProvider';
import { DataStores } from '../types/storage';

interface User {
    info: {
        id: string,
        authorization: string,
        name: string,
        email: string
    },
    preferences: {
        mode: "light" | "dark"
    }
}

const useUserManifest = () => {
    const _DataStoreContext = useContext(DataStoreContext);
    const _UserManifest = _DataStoreContext?.Data.userManifest;
    const _NeDBFunctions = _DataStoreContext?.NeDBFunctions;
    const _ContextFunctions = _DataStoreContext?.ContextFunctions;

    useEffect(() => {
        _ContextFunctions?.setIsUserDataLoading(true);

        let fetchData: Function;

        // If existing user manifest
        if(_UserManifest) {
            // Deconstruct user manifest
            const {
                info: {
                    id,
                    name,
                    authorization,
                    email,
                    time
                }
            } = _UserManifest;

            _ContextFunctions?.setIsUserDataLoading(false);
            _ContextFunctions?.setIsLoggedIn(true);
        }

        else {
            fetchData = async () => {
                // Fetch current stored user manifest
                const _currentUserManifest = await _NeDBFunctions?.findDocument(DataStores.user, {});

                console.log("currentUserManifest", _currentUserManifest);

                _ContextFunctions?.setIsUserDataLoading(false);
                _ContextFunctions?.setIsLoggedIn(!(_currentUserManifest.length === 0));
            }

            fetchData();
        }
    }, []);

    const storeUser = async ({
        authorization,
        id,
        name,
        email,
        time
    }: {
        authorization: string,
        id: string,
        name: string,
        email: string,
        time: number
    }) => {
        const res = await _NeDBFunctions?.createDocument(DataStores.user, {
            authorization,
            id,
            name,
            email,
            time
        });
        _ContextFunctions?.setIsLoggedIn(true);
    }

    return {
        user: _UserManifest,
        functions: {
            storeUser
        }
    }
};

export default useUserManifest;