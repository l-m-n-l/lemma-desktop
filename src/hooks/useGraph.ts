import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    useLazyFindGraphQuery
} from '../providers/redux/services/graph';
import { setGraph } from '../providers/redux/slicers/graph';

const useGraph = (graphId: string | undefined) => {
    const dispatch = useDispatch();
    const cachedGraph = useSelector((state) => state.graph.graphs[graphId]);

    const [icon, setIcon] = useState("");
    const [name, setName] = useState("");
    const [permissions, setPermissions] = useState([]);
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);

    const [findGraph, { ...findGraphFlags }] = useLazyFindGraphQuery();

    useEffect(() => {
        console.log("cachedGraph", cachedGraph)

        if(cachedGraph) {
            setNodes(cachedGraph.nodes);
            setEdges(cachedGraph.edges);
            setName(cachedGraph.name);
            setIcon(cachedGraph.icon);
            setPermissions(cachedGraph.permissions);
        }

        const fetchGraph = async () => {
            const fetchRes = await findGraph({
                graphId
            });

            if(fetchRes.isSuccess) {
                const graph = fetchRes.data.graph;

                setNodes(graph.nodes);
                setEdges(graph.edges);
                setName(graph.name);
                setIcon(graph.icon);
                setPermissions(graph.permissions);
                dispatch(setGraph(graph));
            }
        }

        fetchGraph();
    }, [graphId]);

    const updateNodes = () => {
        
    };

    const updateEdges = () => {

    }

    const createNode = () => {
        
    };

    return {
        data: {
            name,
            icon,
            permissions,
            nodes,
            edges
        },
        fns: {
            updateNodes,
            updateEdges,
            createNode
        }
    }
};

export default useGraph;