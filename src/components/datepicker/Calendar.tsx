"use client";

import styled from "styled-components";
import ReactDatePicker from "react-datepicker";
import CalendarHeader from "./CalendarHeader";
import { ko } from "date-fns/locale";
import { Colors } from "@/utils/style/colors";

interface CalendarProps {
    startDate: Date | null;
    setStartDate: (date: Date | null) => void;
}

export default function Calendar({ startDate, setStartDate }: CalendarProps) {
    const testDate = ["2024-04-27", "2024-04-28", "2024 04 29", "2024 04 30", "2024 05 01"];

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
                    />
                )}
                selected={startDate}
                includeDates={testDate.map((date) => new Date(date))}
                minDate={new Date()}
                onChange={(date) => setStartDate(date)}
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
