import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    useLazyFindGraphQuery
} from '../providers/redux/services/graph';

const useGraph = (graphId: string) => {
    const dispatch = useDispatch();
    const cachedGraph = useSelector((state) => state.graph.graphs[graphId]);

    const [] = useState();
    const [nodes, setNodes] = useState();
    const [edges, setEdges] = useState();

    const [findGraph, { ...findGraphFlags }] = useLazyFindGraphQuery();

    useEffect(() => {
        if(cachedGraph) {
            setNodes(cachedGraph.nodes);
            setEdges(cachedGraph.edges);
        }

        else {
            const fetchGraph = async () => {
                const fetchRes = await findGraph({
                    graphId
                });
            }

            fetchGraph();
        }
    }, [graphId]);

    const updateNodes = () => {
        
    };

    const updateEdges = () => {

    }

    return {
        data: {
            nodes,
            edges
        },
        fns: {
            updateNodes,
            updateEdges
        }
    }
};

export default useGraph;