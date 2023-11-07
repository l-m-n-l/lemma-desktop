import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';

interface useGraphProps {
    graphId: string
}

const useGraph = ({ ...props } : useGraphProps) => {
    const { graphId } = props;

    const nodes = useSelector((state) => state.graphs[props.graphId].nodes);
    const edges = useSelector(() => state.graphs[props.graphId].edges);

    useEffect(() => {

    }, []);

    return {
        data: {
            nodes,
            edges
        },
        fns: {

        }
    }
};

export default useGraph;