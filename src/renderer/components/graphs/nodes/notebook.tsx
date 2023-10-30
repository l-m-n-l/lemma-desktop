import React from 'react';
import * as emoji from 'node-emoji'
import { NodeTitle } from '../../../styles/typography';
import { NoteBookNodeContainer, NodeTitleContainer } from '../../../styles/containers';

const NoteBookNode = ({ data }) => {
    return (
        <NoteBookNodeContainer>
            {emoji.get(data.icon)}
            <NodeTitleContainer>
                <NodeTitle>{data.title}</NodeTitle>
            </NodeTitleContainer>
        </NoteBookNodeContainer>
    )
};

export default NoteBookNode;