export interface KeyValueData {
    [key: string]: string;
}

export interface Dates {
    count: number;
    dates: [
        {
            id: string;
            date: string;
            state: boolean;
        }
    ];
}

export interface Times {
    id: string;
    time: string;
    enabled_count: string;
    disabled_count: string;
}

export interface Seats {
    id: string;
    time: string;
    rows: [
        {
            id: string;
            name: string;
            seats: [
                {
                    id: string;
                    name: string;
                    state: number;
                    isDisabled: boolean;
                }
            ];
        }
    ];
}

export interface Invoice {
    result: boolean;
    theaterName: string;
    theaterLocation: string;
    theaterTitle: null | string;
    theaterPoster: null | string;
    orderNum: string;
    name: string;
    phone: string;
    date: string;
    time: string;
    seats: string[];
}
