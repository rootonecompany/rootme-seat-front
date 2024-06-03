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

export const handleUseOrder = async (orderId: string) => {
    try {
        const result = await CustomFetch(
            `/useorder/${orderId}`,
            {
                method: "POST",
                headers: {
                    Authorization: "Bearer 339feaed11a6eeabe1e5e0eb1695f498",
                },
                credentials: "include",
            },
            "tbridge"
        );
        console.log(result);
        return result;
    } catch (error) {
        console.warn(error);
    }
};
