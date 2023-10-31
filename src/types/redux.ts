export interface NodeType {
    type: "notebook" | "space",
    id: string,
    data: any,
    position: {
        x: number,
        y: number
    }
}

export interface GraphHashMap {
    [id: string]: Array<NodeType>
}

export interface GraphStateType {
    selectedGraphId: string | null
    selectedNodeId: string | null
    graphs: GraphHashMap
}