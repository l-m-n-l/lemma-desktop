import React, { ReactNode } from 'react';
import TitleBar from '../nav/titlebar';
import NodeHoverModal from '../../components/modals/NodeHoverModal';

const MainLayout = ({ children }: { children: ReactNode }) => {
    return <div style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        maxHeight: "100vh",
        position: "absolute",
        top: 0,
        left: 0
    }}>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                position: "relative"
            }}
        >
            <TitleBar />
            {children}
            <NodeHoverModal />
        </div>
    </div>
};

export default MainLayout;