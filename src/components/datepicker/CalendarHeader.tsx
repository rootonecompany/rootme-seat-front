"use client";

import { Colors } from "@/utils/style/colors";
import Image from "next/image";
import styled from "styled-components";

interface CalendarHeaderProps {
    date: Date;
    decreaseMonth: () => void;
    increaseMonth: () => void;
}

export default function CalendarHeader({
    date,
    decreaseMonth,
    increaseMonth,
}: CalendarHeaderProps) {
    return (
        <CalendarHeaderContainer>
            <button
                onClick={decreaseMonth}
                disabled={
                    date.getFullYear() === new Date().getFullYear() &&
                    date.getMonth() === new Date().getMonth()
                }
            >
                <Image
                    src={"/images/btns/btn_calendar_prev.svg"}
                    alt="이전달"
                    width={28}
                    height={28}
                    priority
                />
            </button>
            <span>
                {date.getFullYear()}.{" "}
                {date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`}
            </span>
            <button onClick={increaseMonth}>
                <Image
                    src={"/images/btns/btn_calendar_next.svg"}
                    alt="다음달"
                    width={28}
                    height={28}
                    priority
                />
            </button>
        </CalendarHeaderContainer>
    );
}

const CalendarHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 1rem 0;
    button {
        background: none;
        border: none;
        padding: 0;
        font-size: 0;
        cursor: pointer;

        &:disabled {
            opacity: 0.3;
            cursor: default;
        }
    }

    span {
        font-size: 1.6rem;
        font-weight: 800;
        color: ${Colors.black1A1A1A};
    }
`;
