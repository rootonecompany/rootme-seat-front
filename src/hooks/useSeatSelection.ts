import { useState } from "react";

export default function useSeatSelection() {
    const [selectedSeats, setSelectedSeats] = useState<{ [key: string]: number[] }>({});

    const handleSelectSeat = (row: number, column: string) => {
        setSelectedSeats((prev) => {
            const seatKey = `${column}`;
            const isSelected = prev[seatKey]?.includes(row);
            const updatedSeats = {
                ...prev,
                [seatKey]: isSelected
                    ? prev[seatKey].filter((seat) => seat !== row)
                    : [...(prev[seatKey] || []), row],
            };

            if (updatedSeats[seatKey]?.length === 0) {
                delete updatedSeats[seatKey];
            }

            return updatedSeats;
        });
    };

    const totalSelectedSeats = Object.values(selectedSeats).flat().length;

    return {
        selectedSeats,
        handleSelectSeat,
        totalSelectedSeats,
    };
}
