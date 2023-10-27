import React, { useState, useCallback } from 'react';

import ReactFlow, { Background, applyNodeChanges, applyEdgeChanges } from 'reactflow';
import 'reactflow/dist/style.css';
import { ContentContainer } from '../../styles/containers';
import FooterSearch from '../search/footer';

interface MainGraphProps {

}

const initialNodes = [
    {

    }
];

const initialEdges = [
    {
        
    }
];

const MainGraph = ({ ...props }: MainGraphProps) => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    // @ts-ignore
    const onNodesChange = useCallback( (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),[] );
    // @ts-ignore
    const onEdgesChange = useCallback( (changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),[] );

    return <ContentContainer>
        <ReactFlow>
            <Background />
        </ReactFlow>
        <FooterSearch />
    </ContentContainer>
};

export default MainGraph;