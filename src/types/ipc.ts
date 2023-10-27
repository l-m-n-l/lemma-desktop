export enum IPCChannel {
    NEDB = "nedb"
}

export interface MessageQueueType {
    [key: string]: (data: any) => void;
}