"use client";

import Image from "next/image";
import styled from "styled-components";
import { Times } from "@/interface";
import { Colors } from "@/utils/style/colors";

interface ScheduleTimeSelectorProps {
    date: Date | null;
    renderTimes: Times[] | undefined;
    selectedTime: number | undefined;
    setSelectedTime: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export default function ScheduleTimeSelector({
    date,
    renderTimes,
    selectedTime,
    setSelectedTime,
}: ScheduleTimeSelectorProps) {
    const handleSelectTime = (time: number) => {
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
                {/* {renderTimes &&
                    renderTimes.map((item, index) => (
                        <li
                            key={item.id}
                            datatype={item.id}
                            className={(selectedTime === Number(item.id) && "selected") || ""}
                            onClick={(e) =>
                                handleSelectTime(
                                    Number(
                                        (e.currentTarget as HTMLLIElement).getAttribute("datatype")!
                                    )
                                )
                            }
                        >
                            <span className="time">{`${index + 1}회차 (${item.time})`}</span>
                            <span
                                className={`count ${Number(item.enabled_count) <= 0 ? "zero" : ""}`}
                            >{`잔여 ${item.enabled_count}`}</span>
                        </li>
                    ))} */}
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
