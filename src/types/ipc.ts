export enum IPCChannel {
    NEDB = "nedb",
    APP = "app"
}

export interface MessageQueueType {
    [key: string]: (data: any) => void;
}