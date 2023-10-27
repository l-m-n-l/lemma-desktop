import React, { ReactNode } from 'react';
import TitleBar from '../nav/titlebar';

const MainLayout = ({ children }: { children: ReactNode }) => {
    return <div style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
        overflow: "hidden",
        maxHeight: "100vh",
        position: "absolute",
        top: 0,
        left: 0
    }}>
        <TitleBar />
        {children}
    </div>
};

export default MainLayout;