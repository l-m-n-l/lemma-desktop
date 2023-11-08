import { useContext, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
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

    useMemo(() => {
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
        }

        else {
            fetchData = async () => {
                // Fetch current stored user manifest
                const _currentUserManifest = await _NeDBFunctions?.findDocument(DataStores.user, {});

                if(_currentUserManifest.length > 0) {
                    const {
                        authorization,
                        time
                    } = _currentUserManifest.sort((a, b) => {
                        return a.time - b.time
                    })[0];

                    console.log({
                        authorization,
                        time
                    })

                    if(Date.now() - time > 30 * 86400) {
                        _ContextFunctions?.setIsUserDataLoading(false);
                        _ContextFunctions?.setIsLoggedIn(false);
                        return;
                    }

                    else {
                        _ContextFunctions?.setIsUserDataLoading(false);
                        _ContextFunctions?.setIsLoggedIn(true);
                        window.localStorage.setItem("_authorization", _currentUserManifest[0].authorization);
                    }
                }

                else {
                    _ContextFunctions?.setIsUserDataLoading(false);
                    _ContextFunctions?.setIsLoggedIn(false);
                }
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