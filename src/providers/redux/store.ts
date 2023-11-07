import { configureStore } from '@reduxjs/toolkit';

// Slicers
import graphSlice from './slicers/graph';
import tabSlice from './slicers/tabs';

export default configureStore({
    reducer: {
        graph: graphSlice.reducer,
        tabs: tabSlice.reducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});