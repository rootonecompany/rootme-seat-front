"use client";

import { Colors } from "@/utils/style/colors";
import styled from "styled-components";

interface Props {
    data: {
        id: number;
        column: string;
        row: {
            id: number;
            state: number;
        }[];
    }[];
    selectedSeats: { [key: string]: number[] };
    handleSelectSeat: (row: number, column: string) => void;
}

export default function SeatingChart({ data, selectedSeats, handleSelectSeat }: Props) {
    return (
        <>
            <SeatingChartContainer>
                <SeatColumn>
                    {data.map((seat) => (
                        <span key={seat.id}>{seat.column}</span>
                    ))}
                </SeatColumn>
                <div className="scroll">
                    <SeatVerticalContainer>
                        {data.map((seat) => (
                            <SeatVerticalInner key={seat.id}>
                                <SeatVertical>
                                    {seat.row.slice(0, seat.row.length / 2).map((zone) => (
                                        <SeatZone
                                            key={zone.id}
                                            $zone={zone.state}
                                            disabled={zone.state === 0 || zone.state === 2}
                                            className={
                                                selectedSeats[seat.column]?.includes(zone.id)
                                                    ? "selected"
                                                    : ""
                                            }
                                            onClick={() => handleSelectSeat(zone.id, seat.column)}
                                        />
                                    ))}
                                </SeatVertical>
                                <SeatVertical>
                                    {seat.row.slice(seat.row.length / 2).map((zone) => (
                                        <SeatZone
                                            key={zone.id}
                                            $zone={zone.state}
                                            disabled={zone.state === 0 || zone.state === 2}
                                            className={
                                                selectedSeats[seat.column]?.includes(zone.id)
                                                    ? "selected"
                                                    : ""
                                            }
                                            onClick={() => handleSelectSeat(zone.id, seat.column)}
                                        />
                                    ))}
                                </SeatVertical>
                            </SeatVerticalInner>
                        ))}
                    </SeatVerticalContainer>
                </div>
            </SeatingChartContainer>
        </>
    );
}

const SeatingChartContainer = styled.div`
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
    padding: 2.4rem 0 0;

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

const SeatVerticalContainer = styled.div`
    min-width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding-right: 2rem;
`;

const SeatVerticalInner = styled.div`
    display: flex;
    align-items: center;
    gap: 3.2rem;
`;

const SeatVertical = styled.div`
    display: flex;
    gap: 0.4rem;
`;

const SeatZone = styled.button<{ $zone: number }>`
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
                return Colors.yanoljaSecondary;
        }
    }};

    &.selected {
        background: ${Colors.yanoljaPrimaryTransparent};
    }

    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;
