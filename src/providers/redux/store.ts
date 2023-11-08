import { configureStore } from '@reduxjs/toolkit';

// Slicers
import graphSlice from './slicers/graph';
import tabSlice from './slicers/tabs';
import { emptySplitApi } from './api';

export default configureStore({
    reducer: {
        graph: graphSlice.reducer,
        tabs: tabSlice.reducer,
        api: emptySplitApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(emptySplitApi.middleware)
});