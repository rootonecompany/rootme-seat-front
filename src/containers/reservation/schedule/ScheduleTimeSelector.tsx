"use client";

import { Colors } from "@/utils/style/colors";
import Image from "next/image";
import styled from "styled-components";

interface ScheduleTimeSelectorProps {
    date: Date | null;
    selectedTime: string;
    setSelectedTime: (time: string) => void;
}

export default function ScheduleTimeSelector({
    date,
    selectedTime,
    setSelectedTime,
}: ScheduleTimeSelectorProps) {
    const handleSelectTime = (time: string) => {
        setSelectedTime(time);
    };

    return (
        <ScheduleTimeSelectorContainer>
            <ScheduleDate>
                <Image src={"/images/icons/icon_calendar.svg"} width={20} height={20} alt="달력" />
                <span>
                    {date
                        ? `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
                        : "날짜를 선택해주세요"}
                </span>
            </ScheduleDate>
            <ScheduleTimeList>
                <li
                    datatype="time-1"
                    className={(selectedTime === "time-1" && "selected") || ""}
                    onClick={(e) =>
                        handleSelectTime((e.target as HTMLLIElement).getAttribute("datatype")!)
                    }
                >
                    <span className="time">1회차 (12:00)</span>
                    <span className="count zero">
                        잔여 <span>0</span>
                    </span>
                </li>
                <li
                    datatype="time-2"
                    className={(selectedTime === "time-2" && "selected") || ""}
                    onClick={(e) =>
                        handleSelectTime((e.target as HTMLLIElement).getAttribute("datatype")!)
                    }
                >
                    <span className="time">2회차 (19:00)</span>
                    <span className="count">
                        잔여 <span>28</span>
                    </span>
                </li>
                <li
                    datatype="time-3"
                    className={(selectedTime === "time-3" && "selected") || ""}
                    onClick={(e) =>
                        handleSelectTime((e.target as HTMLLIElement).getAttribute("datatype")!)
                    }
                >
                    <span className="time">2회차 (19:00)</span>
                    <span className="count">
                        잔여 <span>28</span>
                    </span>
                </li>
                <li
                    datatype="time-4"
                    className={(selectedTime === "time-4" && "selected") || ""}
                    onClick={(e) =>
                        handleSelectTime((e.target as HTMLLIElement).getAttribute("datatype")!)
                    }
                >
                    <span className="time">2회차 (19:00)</span>
                    <span className="count">
                        잔여 <span>28</span>
                    </span>
                </li>
                <li
                    datatype="time-5"
                    className={(selectedTime === "time-5" && "selected") || ""}
                    onClick={(e) =>
                        handleSelectTime((e.target as HTMLLIElement).getAttribute("datatype")!)
                    }
                >
                    <span className="time">2회차 (19:00)</span>
                    <span className="count">
                        잔여 <span>28</span>
                    </span>
                </li>
            </ScheduleTimeList>
        </ScheduleTimeSelectorContainer>
    );
}

const ScheduleTimeSelectorContainer = styled.section`
    width: 100%;
    max-width: 48rem;
    padding: 0 2rem 9.6rem;
    margin: 3rem auto 0;
`;
const ScheduleDate = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;

    span {
        font-size: 1.4rem;
        font-weight: 600;
        color: ${Colors.black1A1A1A};
    }
`;
const ScheduleTimeList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 1.8rem 0;

    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.6rem 2rem;
        border-radius: 0.6rem;
        border: 0.1rem solid ${Colors.blackE2E2E2};
        cursor: pointer;

        span {
            font-size: 1.4rem;

            &.time {
                font-weight: 400;
                color: ${Colors.black1A1A1A};
            }

            &.count {
                font-weight: 500;
                color: ${Colors.yanoljaPrimary};
                span {
                    font-weight: 700;
                }

                &.zero {
                    color: ${Colors.blackBBBBBB};
                }
            }
        }

        &.selected {
            border-color: ${Colors.yanoljaPrimary};
        }
    }
`;
