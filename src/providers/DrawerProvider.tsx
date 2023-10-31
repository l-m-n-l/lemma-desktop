import React, { createContext, ReactNode, useState } from 'react';
import { DrawerContextProps, DrawerDataType, DrawerType } from '../types/contexts';

export const DrawerContext = createContext<DrawerContextProps | null>(null);

export const DrawerProvider = ({ children } : { children: ReactNode }) => {
    const [DrawerType, setDrawerType] = useState<DrawerType | null>(null);
    const [DrawerData, setDrawerData] = useState<DrawerDataType | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const ContextValue = {
        vars: {
            type: DrawerType,
            isOpen,
            data: DrawerData
        },
        fns: {
            setDrawerType,
            setDrawerData,
            setIsOpen
        }
    };

    return <DrawerContext.Provider value={ContextValue}>
        {children}
    </DrawerContext.Provider>
};