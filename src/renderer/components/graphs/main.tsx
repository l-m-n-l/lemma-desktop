import React, { useState, useCallback, useRef } from 'react';

import ReactFlow, { Background, applyNodeChanges, applyEdgeChanges, Edge } from 'reactflow';
import 'reactflow/dist/style.css';
import { ContentContainer } from '../../styles/containers';
import FooterSearch from '../search/footer';
import NoteBookNode from './nodes/notebook';
import SpaceNode from './nodes/space';

interface MainGraphProps {

}

const initialNodes = [
    {
        id: "asd",
        type: "notebook",
        position: { x: 0, y: 0 },
        data: {
            icon: "unicorn",
            title: "Notebook Node"
        }
    },
    {
        id: "asd1",
        type: "space",
        position: { x: 100, y: 0 },
        data: {
            icon: "unicorn",
            title: "Space Node"
        }
    }
];

const initialEdges: Array<Edge> = [];

const nodeTypes = {
    space: SpaceNode,
    notebook: NoteBookNode
};

const MainGraph = ({ ...props }: MainGraphProps) => {
    const reactFlowWrapper = useRef(null);

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    // @ts-ignore
    const onNodesChange = useCallback( (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),[]);
    // @ts-ignore
    const onEdgesChange = useCallback( (changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),[]);

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback((event) => {
        event.preventDefault();

        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const type = event.dataTransfer.getData('application/reactflow');
  
        // check if the dropped element is valid
        if (typeof type === 'undefined' || !type) {
          return;
        }
  
        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });
        const newNode = {
          id: getId(),
          type,
          position,
          data: { label: `${type} node` },
        };
  
        setNodes((nds) => nds.concat(newNode));
    }, [reactFlowInstance])

    return <ContentContainer ref={reactFlowWrapper}>
        <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            // @ts-ignore
            onNodeChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onInit={reactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
        >
            <Background />
        </ReactFlow>
        <FooterSearch />
    </ContentContainer>
};

export default MainGraph;