export interface Modal {
    key?: string;
    component?: () => React.ReactNode;
    close?: () => void;
}
