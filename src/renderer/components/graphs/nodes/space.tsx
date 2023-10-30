import React from 'react';
import { SpaceNodeContainer, NodeTitleContainer } from '../../../styles/containers';
import * as emoji from 'node-emoji'
import { NodeTitle } from '../../../styles/typography';

const NoteBookNode = ({ data }) => {
    return (
        <SpaceNodeContainer>
            {emoji.get("unicorn")}
            <NodeTitleContainer>
                <NodeTitle>Space Node</NodeTitle>
            </NodeTitleContainer>
        </SpaceNodeContainer>
    )
};

export default NoteBookNode;