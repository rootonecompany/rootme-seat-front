"use client";

import styled from "styled-components";
import ReactDatePicker from "react-datepicker";
import CalendarHeader from "./CalendarHeader";
import { ko } from "date-fns/locale";
import { Colors } from "@/utils/style/colors";
import { Dates, Times } from "@/interface";
import { formatISO } from "date-fns";
import { toDate } from "date-fns-tz";
import { getTimes } from "@/services/reservationAction";
import { hasCookie } from "@/utils/action";

interface CalendarProps {
    selectedDate: Date | null;
    setSelectedDate: (date: Date | null) => void;
    setRenderTimes: React.Dispatch<React.SetStateAction<Times[] | undefined>>;
    performanceDate: Dates;
    setSelectedTime: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export default function Calendar({
    selectedDate,
    setSelectedDate,
    setRenderTimes,
    performanceDate,
    setSelectedTime,
}: CalendarProps) {
    const handleSelectDate = async (date: Date) => {
        const hasMycookie = await hasCookie("orderNumber", "/reservation");
        if (hasMycookie) {
            try {
                const formattedDate = formatISO(date as Date).slice(0, 10);
                const fetchDate = performanceDate.dates.find(
                    (performance) => performance.date === formattedDate
                );
                const result = fetchDate && (await getTimes(fetchDate.id));

                setSelectedDate(date);
                setSelectedTime(undefined);
                return setRenderTimes(result);
            } catch (error) {
                throw error;
            }
        }
    };

    return (
        <CalendarContainer>
            <ReactDatePicker
                locale={ko}
                weekDayClassName={(date) =>
                    date.getDay() === 0 || date.getDay() === 6
                        ? "react-datepicker__day--weekend"
                        : null
                }
                renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
                    <CalendarHeader
                        date={date}
                        decreaseMonth={decreaseMonth}
                        increaseMonth={increaseMonth}
                        performanceDate={performanceDate && performanceDate}
                    />
                )}
                selected={selectedDate}
                includeDates={
                    performanceDate
                        ? performanceDate.dates.map((date) =>
                              toDate(date.date, { timeZone: "Asia/Seoul" })
                          )
                        : undefined
                }
                onChange={(date) => {
                    handleSelectDate(date as Date);
                }}
                inline
            />
        </CalendarContainer>
    );
}

const CalendarContainer = styled.section`
    width: 100%;
    max-width: 48rem;
    padding: 0 2rem;
    margin: 0 auto;
    .react-datepicker {
        padding-bottom: 1.8rem;
        border-bottom: 0.1rem solid ${Colors.blackE2E2E2};
    }
    .react-datepicker__aria-live {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }

    .react-datepicker__month {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .react-datepicker__day-names {
        background: ${Colors.blackFAFAFA};
        border-radius: 1.6rem;
        margin-bottom: 1rem;
    }

    .react-datepicker__day-names,
    .react-datepicker__week {
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > div {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3.2rem;
            height: 3.2rem;
            border-radius: 50%;
            font-size: 1.4rem;
            font-weight: 600;
            color: ${Colors.black1A1A1A};

            &.react-datepicker__day--disabled {
                color: ${Colors.blackCECECE};
                cursor: default;
            }
            &.react-datepicker__day--selected {
                background-color: ${Colors.yanoljaPrimary};
                color: white;
            }
        }
        .react-datepicker__day--weekend {
            color: #ff322e;
        }

        .react-datepicker__day {
            cursor: pointer;
        }
        .react-datepicker__day--outside-month {
            visibility: hidden;
        }
    }
`;
