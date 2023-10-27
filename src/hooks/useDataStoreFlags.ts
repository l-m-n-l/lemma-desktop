import { useContext, useEffect } from 'react';
import { DataStoreContext } from '../providers/DataStoreProvider';

const useDataStoreFlags = () => {
    const _DataStoreContext = useContext(DataStoreContext);
    return _DataStoreContext?.Flags
};

export default useDataStoreFlags;