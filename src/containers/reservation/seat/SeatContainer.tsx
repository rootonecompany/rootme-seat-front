"use client";

import SeatStageContainer from "./SeatStageContainer";
import { SeatData } from "@/utils/data";
import SeatingChart from "./SeatingChart";
import SeatReservationPanel from "./SeatReservationPanel";
import useSeatSelection from "@/hooks/useSeatSelection";
import styled from "styled-components";

export default function SeatContainer() {
    const { selectedSeats, toggleSeatSelection, totalSelectedSeats } = useSeatSelection();

    return (
        <SeatContainerWrapper>
            <SeatStageContainer />
            <SeatingChart
                data={SeatData}
                selectedSeats={selectedSeats}
                toggleSeatSelection={toggleSeatSelection}
            />
            <SeatReservationPanel
                selectedSeats={selectedSeats}
                totalSelectedSeats={totalSelectedSeats}
            />
        </SeatContainerWrapper>
    );
}

const SeatContainerWrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - 5.6rem);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;
