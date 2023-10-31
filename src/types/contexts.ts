export enum ModalType {
    signout = "signout",
    share = "share"
}

export interface ModalDataType {
    documentId?: string
}

export interface ModalContextProps {
    type: ModalType,
    isOpen: boolean,
    data: any
}