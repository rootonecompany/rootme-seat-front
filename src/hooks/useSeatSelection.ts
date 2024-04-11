import { useState } from "react";

export default function useSeatSelection() {
    const [selectedSeats, setSelectedSeats] = useState<{ [key: string]: number[] }>({});

    const toggleSeatSelection = (row: number, column: string) => {
        setSelectedSeats((prevSelectedSeats) => {
            const seatKey = `${column}`;
            const isSelected = prevSelectedSeats[seatKey]?.includes(row);
            const updatedSeats = isSelected
                ? {
                      ...prevSelectedSeats,
                      [seatKey]: prevSelectedSeats[seatKey].filter((seat) => seat !== row),
                  }
                : {
                      ...prevSelectedSeats,
                      [seatKey]: [...(prevSelectedSeats[seatKey] || []), row],
                  };

            if (updatedSeats[seatKey]?.length === 0) {
                delete updatedSeats[seatKey];
            }

            return updatedSeats;
        });
    };

    const totalSelectedSeats = Object.values(selectedSeats).reduce(
        (total, seats) => total + seats.length,
        0
    );

    return {
        selectedSeats,
        toggleSeatSelection,
        totalSelectedSeats,
    };
}
