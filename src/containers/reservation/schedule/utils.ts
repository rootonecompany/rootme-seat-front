import { Result } from "@/interface";
import { Times } from "@/interface";
import { useState } from "react";

export const ScheduleState = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [renderTimes, setRenderTimes] = useState<Result<Times[]>>({} as Result<Times[]>);
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
