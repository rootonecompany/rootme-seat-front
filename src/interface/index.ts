export interface Modal {
    key?: string;
    component?: () => React.ReactNode;
    close?: () => void;
}

export interface KeyValueData {
    [key: string]: string;
}
