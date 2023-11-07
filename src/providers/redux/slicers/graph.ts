import { createSlice } from '@reduxjs/toolkit';

const graphSlice = createSlice({
    name: "graphSlice",
    initialState: {
        selectedGraphId: null,
        selectedGraphDocuments: [],
        selectedGraphEdges: [],
        graphs: [],
    },
    reducers: {
        setSelectedGraphId: (state, action) => {
            state.selectedGraphId = action.payload;
        },

        setSelectedGraphDocuments: (state, action) => {
            state.selectedGraphDocuments = [...action.payload]
        },

        setSelectedGraphEdges: (state, action) => {
            state.selectedGraphEdges = [...action.payload]
        },

        setGraphs: (state, action) => {
            state.graphs = [...action.payload];
        }
    }
});

export const {
    setSelectedGraphId,
    setSelectedGraphDocuments,
    setGraphs
} = graphSlice.actions;

export default graphSlice;