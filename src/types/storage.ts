export interface UserManifestInfoProps {
    id: string,
    name: string,
    authorization: string,
    email: string,
    time: number
}

export interface UserManifestPreferencesProps {
    
}

export interface UserManifestProps {
    info: UserManifestInfoProps,
    preferences: UserManifestPreferencesProps
}

export interface OfflineManifestProps {

}

export interface DataStoreContextProps {
    Flags: {
        isLoggedIn: boolean,
        isUserDataLoading: boolean
    },
    Data: {
        offlineManifest: OfflineManifestProps,
        userManifest: UserManifestProps
    },
    NeDBFunctions: {
        createDocument: Function,
        findDocument: Function,
        updateDocument: Function
    },
    ContextFunctions: {
        setOfflineManifest: Function,
        setUserManifest: Function,
        setIsLoggedIn: Function,
        setIsUserDataLoading: Function
    }
};

export enum DataStores {
    user = "user",
    offline = "offline",
    graphs = "graphs"
}

export interface NeDBArgType {
    id: string,
    method: string,
    args: {
      ds: DataStores,
      document?: object,
      query?: object
    }
}