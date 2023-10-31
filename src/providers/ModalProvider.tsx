import React, { createContext, ReactNode, useState } from 'react';
import { ModalContextProps, ModalDataType } from '../types/contexts';

export const ModalContext = createContext<ModalContextProps | null>(null);

export const ModalProvider = ({ children } : { children: ReactNode }) => {
    const [modalType, setModalType] = useState<ModalDataType | null>(null);
    const [modalData, setModalData] = useState<ModalDataType | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const ContextValue = {
        
    };

    <ModalContext.Provider value={ContextValue}>
        {children}
    </ModalContext.Provider>
};