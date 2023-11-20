import React, { useState } from 'react';

import * as emoji from 'node-emoji';

import { CenteredContentInterior, ContentContainer, MainContainer, ObjectsContainer, PageTextHeaderContainer, PageHeaderContainer } from '../styles/containers';

import MainGraph from '../components/graphs/MainGraph';
import SideNavigation from '../components/nav/side';
import GraphNavigation from '../components/nav/graph';
import HistoryDrawer from '../components/drawers/HistoryDrawer';
import { useNavigate, useParams } from 'react-router-dom';
import useGraph from '../../hooks/useGraph';
import { GraphTileTitle, PageTextHeader, PageTextSubHeader, GraphTileSubheader } from '../styles/typography';
import { CreateGraphButton, GraphTileButton } from '../styles/interactions';
import { GraphIconContainer } from '../styles/containers';
import { PiPlus } from 'react-icons/pi';
import useGraphs from '../../hooks/useGraphs';
import { useDispatch } from 'react-redux';
import useTabs from '../../hooks/useTabs';
import { ModalType } from '../../types/contexts';
import { getRandomIcon, getRandomName } from '../../helpers/util';
import CreateNodeModal from '../components/modals/CreateNode';

interface GraphProps {
    graphId: string
}

const Graph = ({ ...props } : GraphProps) => {
    const graph = useGraph(props.graphId);

    return <>
        <MainGraph graph={graph} />
        <HistoryDrawer graph={graph} />
        <CreateNodeModal graph={graph} />
    </>
}

const GraphTile = ({ ...props } : {
    icon: string,
    name: string,
    graph_id: string,
}) => {
    const navigate = useNavigate();

    const [isHovering, setIsHovering] = useState(false);

    const {
        data: {
            graphs
        },
        fns: {
            createGraph
        }
    } = useGraphs();
    const {
        fns: {
            updateTabInfo
        }
    } = useTabs();

    return <GraphTileButton
        onClick={() => {
            updateTabInfo(props.icon, props.name, "/graph/" + props.graph_id);
            navigate("/graph/" + props.graph_id);
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
    >
        <div style={{
            width: "max-content",
            height: "100%",
            display: "flex",
            alignItems: "center",
            gap: "1rem"
        }}>
            <GraphIconContainer>
                {emoji.get(props.icon)}
            </GraphIconContainer>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                alignItems: "flex-start"
            }}>
                <GraphTileTitle>
                    {props.name}
                </GraphTileTitle>
                <GraphTileSubheader>
                    Created by @nvariable on Nov 12 at 12:51 am
                </GraphTileSubheader>
            </div>
        </div>
        <div style={{
            width: "max-content",
            height: "100%",
            display: "flex",
            alignItems: "center",
        }}>

        </div>
    </GraphTileButton>
};

const GraphLanding = () => {
    const navigate = useNavigate();

    const {
        data: {
            graphs
        },
        fns: {
            createGraph
        }
    } = useGraphs();

    const {
        fns: {
            updateTabInfo
        }
    } = useTabs();

    return <ContentContainer style={{
        display: "flex",
        justifyContent: "center",
        overflowY: "scroll"
    }}>
        <CenteredContentInterior>
            <PageHeaderContainer>
                <PageTextHeaderContainer>
                    <PageTextHeader>Your Graphs</PageTextHeader>
                    <PageTextSubHeader>Create a new graph or hop into an existing one.</PageTextSubHeader>
                </PageTextHeaderContainer>
                <CreateGraphButton onClick={async () => {
                    const random_icon = getRandomIcon();
                    const random_name = getRandomName();
                    const create_graph_response = await createGraph(random_name, random_icon);
                    console.log("create_graph_response", create_graph_response);
                }}>
                    <PiPlus />
                </CreateGraphButton>
            </PageHeaderContainer>
            <ObjectsContainer style={{
                marginTop: "2rem"
            }}>
                {graphs.map((g) => {
                    console.log("g", g)
                    return <GraphTile 
                        name={g.name}
                        icon={g.icon}
                        graph_id={g.graph_id}
                    />
                })}
            </ObjectsContainer>
        </CenteredContentInterior>
    </ContentContainer>
}

const GraphPage = () => {
    const { graphId } = useParams();

    return <MainContainer>
        <SideNavigation />
        {(graphId) ? <Graph graphId={graphId} /> : <GraphLanding />}
    </MainContainer>
};

export default GraphPage;