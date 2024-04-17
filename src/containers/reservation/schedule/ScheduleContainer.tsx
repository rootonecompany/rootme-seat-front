"use client";

import { useState } from "react";
import styled from "styled-components";
import Calendar from "@/components/datepicker/Calendar";
import ScheduleTimeSelector from "./ScheduleTimeSelector";
import { EnabledButton } from "@/components/button/Button";
import { Colors } from "@/utils/style/colors";

export default function ScheduleContainer() {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string>("");

    return (
        <>
            <Calendar startDate={startDate} setStartDate={setStartDate} />
            <ScheduleTimeSelector
                date={startDate}
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
            />
            <FixedButton>
                <EnabledButton disabled={!startDate || !selectedTime}>다음</EnabledButton>
            </FixedButton>
        </>
    );
}

const FixedButton = styled.div`
    position: fixed;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 100%;
    max-width: 76.8rem;
    padding: 1.4rem 2rem 3.2rem;
    background: ${Colors.systemWhite};
    z-index: 500;
`;
