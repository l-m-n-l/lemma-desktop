import { configureStore } from '@reduxjs/toolkit';
import graphSlice from './slicers/graph';

export default configureStore({
    reducer: {
        graph: graphSlice.reducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});