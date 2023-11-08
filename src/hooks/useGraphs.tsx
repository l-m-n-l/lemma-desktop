import React, { useEffect, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DataStoreContext } from '../providers/DataStoreProvider';
import { DataStores } from '../types/storage';
import { setGraph } from '../providers/redux/slicers/graph';

import {
    useLazyFindGraphQuery,
    useLazyFindGraphsQuery,
    useCreateGraphMutation
} from '../providers/redux/services/graph';
import { useNavigate } from 'react-router-dom';

const useGraphs = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const _graphs = useSelector((state) => state.graph.graphs);

    const _DataStoreContext = useContext(DataStoreContext);
    const _NeDBFunctions = _DataStoreContext?.NeDBFunctions;

    const [findGraphs, { ...findGraphFlags }] = useLazyFindGraphsQuery();
    const [_createGraph, { ...createGraphFlags }] = useCreateGraphMutation();

    const [graphs, setGraphs] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const fetchedGraphs = await findGraphs({});

            if(fetchedGraphs.isSuccess) {
                const graphs = fetchedGraphs.data.graphs;

                graphs.forEach((g) => {
                    dispatch(setGraph({
                        graph_id: g.graph_id,
                        icon: g.icon,
                        name: g.name,
                        nodes: g.nodes,
                        edges: g.edges,
                        permissions: g.permissions
                    }));
                })
            }
        };

        fetchData();
    }, [])

    const createGraph = async (name: string, icon: string) => {
        const results = await _createGraph({
            name,
            icon
        });

        if(createGraphFlags.isSuccess) {
            const new_graph = results.graph;

            await _NeDBFunctions?.createDocument(DataStores.graphs, {
                ...new_graph
            });

            navigate("/graph/" + new_graph.graph_id);
        }
    };
    
    return {
        data: {
            graphs: Object.values(_graphs)
        },
        fns: {
            createGraph
        }
    }
};

export default useGraphs;