import React from 'react';
import { NodeBadgeContainer } from '../../styles/containers';

export const NodeNotificationBadge = ({ ...props } : { count: number }) => {
    return <NodeBadgeContainer>
        {props.count}
    </NodeBadgeContainer>
};