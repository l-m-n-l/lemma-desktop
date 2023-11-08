import { createSlice } from '@reduxjs/toolkit';

const graphSlice = createSlice({
    name: "graphSlice",
    initialState: {
        graphs: {}
    },
    reducers: {
        setGraph: (state, action) => {
            state.graphs[action.payload.graph_id] = {
                ...action.payload
            }
        }
    }
});

export const {
    setGraph
} = graphSlice.actions;

export default graphSlice;