import React, { useState } from 'react';
import { SpaceNodeContainer, NodeTitleContainer } from '../../../styles/containers';
import * as emoji from 'node-emoji'
import { NodeTitle } from '../../../styles/typography';

const NoteBookNode = ({ data }) => {
    const [isHovering, setIsHovering] = useState<boolean>(false);

    const onNodeMouseOver = (event) => {
        setIsHovering(true);
    };

    const onNodeMouseOut = (event) => {
        setIsHovering(false);
    }

    return (
        <SpaceNodeContainer
            isHovering={isHovering} 
            onMouseOver={onNodeMouseOver} 
            onMouseOut={onNodeMouseOut}
        >
            {emoji.get("unicorn")}
            <NodeTitleContainer>
                <NodeTitle>Space Node</NodeTitle>
            </NodeTitleContainer>
        </SpaceNodeContainer>
    )
};

export default NoteBookNode;