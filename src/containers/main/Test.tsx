"use client";

import { CustomFetch } from "@/hooks/useCustomFetch";

const accessToken =
    process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_ACCESS_TOKEN
        : process.env.ACCESS_TOKEN;

export default function Test() {
    const handleUseOrder = async (orderId: string) => {
        try {
            const result = await CustomFetch(
                `/useorder/${orderId}`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                    credentials: "include",
                },
                "tbridge"
            );

            return result;
        } catch (error) {
            console.warn(error);
        }
    };

    return (
        <div>
            <button
                onClick={() => {
                    handleUseOrder("O5C11A701F33");
                }}
            >
                사용 테스트
            </button>
            <button>취소 테스트</button>
        </div>
    );
}
