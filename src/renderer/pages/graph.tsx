import React from 'react';

import { CenteredContentInterior, ContentContainer, MainContainer, ObjectsContainer, PageTextHeaderContainer } from '../styles/containers';

import MainGraph from '../components/graphs/MainGraph';
import SideNavigation from '../components/nav/side';
import GraphNavigation from '../components/nav/graph';
import HistoryDrawer from '../components/drawers/HistoryDrawer';
import { useParams } from 'react-router-dom';
import useGraph from '../../hooks/useGraph';
import { PageTextHeader, PageTextSubHeader } from '../styles/typography';
import { CreateGraphButton } from '../styles/interactions';
import { PiPlus } from 'react-icons/pi';
import useGraphs from '../../hooks/useGraphs';
import CreateGraphModal from '../components/modals/CreateGraph';
import { useDispatch } from 'react-redux';
import useTabs from '../../hooks/useTabs';
import { ModalType } from '../../types/contexts';
import { getRandomIcon, getRandomName } from '../../helpers/util';

interface GraphProps {
    graphId: string
}

const Graph = ({ ...props } : GraphProps) => {
    return <>
        <MainGraph />
        <HistoryDrawer />
    </>
}

const GraphLanding = () => {
    const {
        data: {
            graphs
        },
        fns: {
            createGraph
        }
    } = useGraphs();

    return <ContentContainer style={{
        display: "flex",
        justifyContent: "center"
    }}>
        <CenteredContentInterior>
            <PageTextHeaderContainer>
                <PageTextHeader>Your Graphs</PageTextHeader>
                <PageTextSubHeader>Create a new graph or hop into an existing one.</PageTextSubHeader>
            </PageTextHeaderContainer>
            <ObjectsContainer style={{
                marginTop: "2rem"
            }}>
                <CreateGraphButton onClick={async () => {
                    const random_icon = getRandomIcon();
                    const random_name = getRandomName();
                    await createGraph(random_name, random_icon);
                }}>
                    <PiPlus />
                </CreateGraphButton>
                {graphs.map(() => {
                    return 
                })}
            </ObjectsContainer>
        </CenteredContentInterior>
    </ContentContainer>
}

const GraphPage = () => {
    const { graphId } = useParams();

    console.log("graphId", graphId);

    return <MainContainer>
        <SideNavigation />
        {(graphId) ? <Graph graphId={graphId} /> : <GraphLanding />}
    </MainContainer>
};

export default GraphPage;