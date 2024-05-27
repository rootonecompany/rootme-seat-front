"use server";

import { CustomFetch } from "@/hooks/useCustomFetch";
import { Dates, Seats, Times } from "@/interface";

export async function getOrder(onderNumber: string) {
    const result = await CustomFetch(`/getorder/${onderNumber}`, {}, "tbridge");

    return result;
}

export async function getDates(orderNum: string, theaterCode: string) {
    const result = await CustomFetch<Dates>(
        "/api/v1/theater/dates",
        {
            params: {
                orderNum,
                theaterCode,
            },
        },
        "coleslaw"
    );
    return result;
}

export async function getTimes(dateId: string) {
    const result = await CustomFetch<Times[]>(
        "/api/v1/theater/times",
        {
            params: {
                dateId,
            },
        },
        "coleslaw"
    );

    return result;
}

export async function getSeats(timeId: string) {
    const result = await CustomFetch<Seats>(
        "/api/v1/theater/seats",
        {
            params: {
                timeId,
            },
            cache: "no-store",
        },
        "coleslaw"
    );

    return result;
}

export async function postReservation(orderNum: string, seatIds: number[]) {
    const result = await CustomFetch(
        "/api/v1/theater/seats",
        {
            method: "POST",
            body: JSON.stringify({
                orderNum,
                seatIds,
            }),
        },
        "coleslaw"
    );

    return result;
}
