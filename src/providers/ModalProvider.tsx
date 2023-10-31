import React, { createContext, ReactNode, useState } from 'react';
import { ModalContextProps, ModalDataType, ModalType } from '../types/contexts';

export const ModalContext = createContext<ModalContextProps | null>(null);

export const ModalProvider = ({ children } : { children: ReactNode }) => {
    const [modalType, setModalType] = useState<ModalType | null>(null);
    const [modalData, setModalData] = useState<ModalDataType | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [clientX, setClientX] = useState<number>();
    const [clientY, setClientY] = useState<number>();

    const ContextValue = {
        vars: {
            type: modalType,
            isOpen,
            data: modalData,
            clientX,
            clientY
        },
        fns: {
            setIsOpen,
            setModalType,
            setModalData,
            setClientX,
            setClientY
        }
    };

    return <ModalContext.Provider value={ContextValue}>
        {children}
    </ModalContext.Provider>
};