import { useContext, useEffect } from 'react';
import { DataStoreContext } from '../providers/DataStoreProvider';

const useOfflineManifest = () => {
    const _DataStoreContext = useContext(DataStoreContext);
    const _OfflineManifest = _DataStoreContext?.Data.offlineManifest;
    const _NeDBFunctions = _DataStoreContext?.NeDBFunctions;
    const _ContextFunctions = _DataStoreContext?.ContextFunctions;

    useEffect(() => {

    }, []);
    
    return {
        
    }
};

export default useOfflineManifest;