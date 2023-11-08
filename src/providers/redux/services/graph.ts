import { emptySplitApi } from '../api';

const BASE_URI = "/graphs/"

export const graphApi = emptySplitApi.injectEndpoints({
    endpoints: (builder) => ({
        /* 
            Find Graph By ID
        */
        findGraph: builder.query({
            query: (params) => {
                return {
                    url: BASE_URI + "find",
                    method: "GET",
                    query: params,
                    headers: {
                        authorization: window.localStorage.getItem("_authorization")
                    }
                }
            }
        }),

        /*
            Find all graphs
        */
       findGraphs: builder.query({
           query: (params) => {
                return {
                    url: BASE_URI + "find/mine",
                    method: "GET",
                    query: params,
                    headers: {
                        authorization: window.localStorage.getItem("_authorization")
                    }
                }
           }
       }),

        /*
            Create Graph Request
        */
        createGraph: builder.mutation({
            query: (body) => {
                return {
                    url: BASE_URI + "create",
                    method: "POST",
                    body,
                    headers: {
                        authorization: window.localStorage.getItem("_authorization")
                    }
                }
            }
        })
    })
});

export const {
    useLazyFindGraphQuery,
    useFindGraphQuery,
    useLazyFindGraphsQuery,
    useCreateGraphMutation
} = graphApi;