import React, { useState, useCallback, useRef, useContext } from 'react';

import ReactFlow, { 
    Background, 
    applyNodeChanges, 
    applyEdgeChanges, 
    Edge
} from 'reactflow';
import 'reactflow/dist/style.css';
import { ModalContext } from '../../../providers/ModalProvider';
import { ContentContainer } from '../../styles/containers';
import FooterSearch from '../search/footer';
import NoteBookNode from './nodes/NotebookNode';
import SpaceNode from './nodes/SpaceNode';
import GraphNav from '../nav/graph';

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

let id = 0;
const getId = () => `dndnode_${id++}`;

const MainGraph = ({ ...props }: MainGraphProps) => {
    const modalContext = useContext(ModalContext);

    const reactFlowWrapper = useRef(null);

    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    // @ts-ignore
    const onNodesChange = useCallback((changes: any) => {
        modalContext?.fns.setIsOpen(false);
        // @ts-ignore
        setNodes((nds) => applyNodeChanges(changes, nds))
    }, [setNodes]);
    // @ts-ignore 
    const onEdgesChange = useCallback((changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, [setEdges]);

    const onDrop = useCallback((event) => {
        event.preventDefault();

        console.log("nodeDropEvent", event);

        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const {
            icon,
            title,
            type
        } = JSON.parse(event.dataTransfer.getData('application/reactflow'));
  
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
          data: {
              icon,
              title
          },
        };
  
        setNodes((nds) => nds.concat(newNode));
    }, [reactFlowInstance]);

    const onNodeClick = (event, element) => {
        const {
            type,
            id,
            data,
            position,
            selected
        } = element;

        console.log("nodeClickElement", element)
    }

    return <ContentContainer ref={reactFlowWrapper}>
        <GraphNav 
            graphIcon={"unicorn"}
            graphTitle={"This is a Graph"}
        />
        <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            // @ts-ignore
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            // @ts-ignore
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onNodeClick={onNodeClick}
            onClick={() => {
                modalContext?.fns.setModalType(null);
                modalContext?.fns.setIsOpen(false);
                modalContext?.fns.setClientX(null);
                modalContext?.fns.setClientY(null);
            }}
            nodesDraggable={true}
            elementsSelectable={true}
            fitView
        >
            <Background />
        </ReactFlow>
        <FooterSearch />
    </ContentContainer>
};

export default MainGraph;