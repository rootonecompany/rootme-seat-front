"use client";

import { handleUseOrder } from "@/services/reservationAction";

export default function Test() {
    return (
        <div>
            <button
                onClick={async () => {
                    await handleUseOrder("O5C11A701F33");
                }}
            >
                사용 테스트
            </button>
            <button>취소 테스트</button>
        </div>
    );
}
