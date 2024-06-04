"use client";

import styled, { css } from "styled-components";
import { Seats } from "@/interface";
import { Colors } from "@/utils/style/colors";
import TestError from "@/components/TestError";

interface SeatingChartProps {
    seats: Seats | undefined;
    selectedSeats: { [key: string]: number[] };
    toggleSeatSelection: (row: number, column: string, seatId: number) => void;
}

export default function SeatingChart({
    seats,
    selectedSeats,
    toggleSeatSelection,
}: SeatingChartProps) {
    return (
        <>
            <SeatingChartContainer>
                <SeatColumn>
                    {seats && seats.rows.map((seat) => <span key={seat.id}>{seat.name}</span>)}
                </SeatColumn>
                <div className="scroll">
                    <SeatRowContainer>
                        {seats &&
                            seats.rows.map((seat) => (
                                <SeatRowInner key={seat.id}>
                                    <SeatRow>
                                        {seat.seats.slice(0, seat.seats.length / 2).map((zone) => (
                                            <SeatZone
                                                key={zone.id}
                                                $zone={zone.state}
                                                $isDisabled={zone.isDisabled}
                                                disabled={
                                                    zone.state === 0 ||
                                                    zone.state === 2 ||
                                                    zone.isDisabled
                                                }
                                                className={
                                                    selectedSeats[seat.name]?.includes(
                                                        Number(zone.name)
                                                    )
                                                        ? "selected"
                                                        : ""
                                                }
                                                onClick={() => {
                                                    toggleSeatSelection(
                                                        Number(zone.name),
                                                        seat.name,
                                                        Number(zone.id)
                                                    );
                                                }}
                                            />
                                        ))}
                                    </SeatRow>
                                    <SeatRow>
                                        {seat.seats.slice(seat.seats.length / 2).map((zone) => (
                                            <SeatZone
                                                key={zone.id}
                                                $zone={zone.state}
                                                $isDisabled={zone.isDisabled}
                                                disabled={
                                                    zone.state === 0 ||
                                                    zone.state === 2 ||
                                                    zone.isDisabled
                                                }
                                                className={
                                                    selectedSeats[seat.name]?.includes(
                                                        Number(zone.name)
                                                    )
                                                        ? "selected"
                                                        : ""
                                                }
                                                onClick={() => {
                                                    toggleSeatSelection(
                                                        Number(zone.name),
                                                        seat.name,
                                                        Number(zone.id)
                                                    );
                                                }}
                                            />
                                        ))}
                                    </SeatRow>
                                </SeatRowInner>
                            ))}
                    </SeatRowContainer>
                </div>
            </SeatingChartContainer>

            {!seats && <TestError />}
        </>
    );
}

const SeatingChartContainer = styled.div`
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
    padding: 4.6rem 0 0;

    .scroll {
        position: relative;
        overflow-x: auto;
        &::-webkit-scrollbar {
            height: 0.6rem;
            background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
            background-color: ${Colors.blackBBBBBB};
            border-radius: 0.5rem;
        }
    }
`;

const SeatColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding-left: 2rem;
    padding-right: 1rem;
    span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1.6rem;
        height: 1.6rem;
        font-size: 1.2rem;
        font-weight: 800;
        color: ${Colors.black333333};
    }
`;

const SeatRowContainer = styled.div`
    min-width: fit-content;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding-right: 2rem;
`;

const SeatRowInner = styled.div`
    display: flex;
    align-items: center;
    gap: 3.2rem;
`;

const SeatRow = styled.div`
    display: flex;
    gap: 0.4rem;
`;

const SeatZone = styled.button<{ $zone: number; $isDisabled: boolean }>`
    width: 1.6rem;
    height: 1.6rem;
    border: none;
    background: ${(props) => {
        switch (props.$zone) {
            case 0:
                return "transparent";
            case 1:
                return Colors.blackCECECE;
            case 2:
                return Colors.black696969;
        }
    }};

    ${(props) =>
        props.$isDisabled &&
        css`
            background: ${() => {
                switch (props.$zone) {
                    case 0:
                        return "transparent";
                    case 1:
                        return Colors.green8DBC13;
                    case 2:
                        return Colors.black696969;
                }
            }};
        `}

    &.selected {
        background: ${Colors.yanoljaPrimaryTransparent};
    }

    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;
