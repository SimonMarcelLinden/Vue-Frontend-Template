export interface Notification {
    uuid: string;
    type: 'ERROR' | 'WARNING' | 'SUCCESS';
    message: string;
    title: string;
    createdAt: number;
}
