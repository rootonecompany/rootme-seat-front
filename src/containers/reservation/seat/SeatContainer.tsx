"use client";

import styled from "styled-components";
import SeatStageContainer from "./SeatStageContainer";
import SeatingChart from "./SeatingChart";
import SeatReservationPanel from "./SeatReservationPanel";
import useSeatSelection from "@/hooks/useSeatSelection";
import { Seats } from "@/interface";

export default function SeatContainer({ seats }: { seats: Seats }) {
    const { selectedSeats, selectedSeatsId, toggleSeatSelection, totalSelectedSeats } =
        useSeatSelection();
    return (
        <SeatContainerWrapper>
            <SeatStageContainer />
            <SeatingChart
                seats={seats}
                selectedSeats={selectedSeats}
                toggleSeatSelection={toggleSeatSelection}
            />
            <SeatReservationPanel
                selectedSeats={selectedSeats}
                selectedSeatsId={selectedSeatsId}
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
