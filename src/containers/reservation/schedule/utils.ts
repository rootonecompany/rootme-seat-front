import { Times } from "@/interface";
import { useState } from "react";

export const ScheduleState = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [renderTimes, setRenderTimes] = useState<Times[] | undefined>();
    const [selectedTime, setSelectedTime] = useState<number>();

    return {
        selectedDate,
        setSelectedDate,
        renderTimes,
        setRenderTimes,
        selectedTime,
        setSelectedTime,
    };
};
