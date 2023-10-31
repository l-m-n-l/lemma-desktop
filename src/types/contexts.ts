export enum ModalType {
    signout = "signout",
    share = "share",
    nodeHover = "nodeHover"
}

export interface ModalDataType {
    documentId?: string
}

export interface ModalContextProps {
    vars: {
        type: ModalType | null,
        isOpen: boolean,
        data: any,
        clientX?: number,
        clientY?: number
    },
    fns: {
        setModalType: Function,
        setModalData: Function,
        setIsOpen: Function,
        setClientX: Function,
        setClientY: Function
    }
}

export enum DrawerType {
    signout = "signout",
    share = "share"
}

export interface DrawerDataType {
    documentId?: string
}

export interface DrawerContextProps {
    vars: {
        type: DrawerType | null,
        isOpen: boolean,
        data: any
    },
    fns: {
        setDrawerType: Function,
        setDrawerData: Function,
        setIsOpen: Function
    }
}