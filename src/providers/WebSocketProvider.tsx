import React, { createContext, useEffect, useState } from 'react';

export type WebSocketContextProps = {

};

export const WebSocketContext = createContext<WebSocketContextProps | null>(null);

export const WebSocketProvider = ({ children }) => {
    const [userActionWebSocket, setUserActionWebSocket] = useState<WebSocket | null>(null);
    const [isUserActionWebSocketConnected, setIsUserActionWebSocketConnected] = useState<boolean>(false);

    useEffect(() => {
        const _userActionWebSocket = new WebSocket(process.env.ACTIONS_WS_URI as string);
        _userActionWebSocket.onopen = () => {
            setIsUserActionWebSocketConnected(true);
        };
    }, []);

    const ContextValue = {
        userActionWebSocket,
        isUserActionWebSocketConnected
    };
    
    return <WebSocketContext.Provider value={ContextValue}>
        {children}
    </WebSocketContext.Provider>
}