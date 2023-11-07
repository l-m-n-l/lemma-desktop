import { emptySplitApi } from '../api';

const BASE_URI = "/graph/"

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
            Create Graph Request
        */
        createGraph: (builder) => {
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
        }
    })
});

export const {
    useLazyFindGraphQuery,
    useFindGraphQuery,
} = graphApi;