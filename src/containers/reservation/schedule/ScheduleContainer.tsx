"use client";

import styled from "styled-components";
import Calendar from "@/components/datepicker/Calendar";
import ScheduleTimeSelector from "./ScheduleTimeSelector";
import useRouterPush from "@/hooks/useRouterPush";
import { EnabledButton } from "@/components/button/Button";
import { ScheduleState } from "./utils";
import { Dates } from "@/interface";
import { Colors } from "@/utils/style/colors";

export default function ScheduleContainer({ dates }: { dates: Dates }) {
    const { handleRouterPush } = useRouterPush();
    const {
        selectedDate,
        setSelectedDate,
        renderTimes,
        setRenderTimes,
        selectedTime,
        setSelectedTime,
    } = ScheduleState();
    const handleNextSeatPage = () => {
        handleRouterPush(`/reservation/schedule/${selectedTime}`);
    };

    return (
        <>
            {/* <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                setRenderTimes={setRenderTimes}
                performanceDate={dates}
                setSelectedTime={setSelectedTime}
            /> */}
            <ScheduleTimeSelector
                date={selectedDate}
                renderTimes={renderTimes}
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
            />
            <FixedButton>
                <EnabledButton
                    disabled={!selectedDate || !selectedTime}
                    onClick={handleNextSeatPage}
                >
                    다음
                </EnabledButton>
            </FixedButton>
        </>
    );
}

const FixedButton = styled.section`
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
