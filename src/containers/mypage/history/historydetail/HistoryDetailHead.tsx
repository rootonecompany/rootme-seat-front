"use client";

import Image from "next/image";
import Thumbnail from "/public/images/thumbnails/thumbnail.png";
import { Colors } from "@/utils/style/colors";
import styled from "styled-components";
import { ActionButton } from "@/components/button/Button";
import { useEffect } from "react";
import { removeCookie } from "@/utils/action";
import { Invoice } from "@/interface";

export default function HistoryDetailHead({ invoice }: { invoice: Invoice }) {
    const time = invoice.time.replace(/(\d{2}):(\d{2})/, function (match, p1, p2) {
        return `${parseInt(p1) < 12 ? "오전" : "오후"} ${p1}:${p2}`;
    });

    useEffect(() => {
        removeCookie("orderNumber");
    }, []);

    return (
        <HistoryDetailHeadContainer>
            <HistoryDetailHeadInner>
                <HistoryDetailProductInfo>
                    <Image src={Thumbnail} width={78} height={104} alt="테스트 썸네일" priority />
                    <div>
                        <strong>뮤지컬 〈달 샤베트〉 - 서울숲 </strong>
                        <span className="location">{invoice.theaterName}</span>
                        <span className="date">
                            {invoice.date.replaceAll("-", ". ")} · {time} ·{" "}
                            {`${invoice.seats.length} 명`}
                        </span>
                    </div>
                </HistoryDetailProductInfo>
                <HistoryDetailAction>
                    <ActionButton $primary>티켓보기</ActionButton>
                </HistoryDetailAction>
            </HistoryDetailHeadInner>
        </HistoryDetailHeadContainer>
    );
}

const HistoryDetailHeadContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.4rem 0 1.8rem;
    border-bottom: 0.8rem solid ${Colors.blackF2F2F2};
`;
const HistoryDetailHeadInner = styled.div`
    width: 100%;
    max-width: 44rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding: 0 2rem;
`;
const HistoryDetailProductInfo = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1.8rem;

    & > div {
        display: flex;
        flex-direction: column;
        padding: 0.4rem 0;
        strong {
            font-size: 1.4rem;
            font-weight: 700;
            line-height: 1.57;
            color: ${Colors.black1A1A1A};
        }

        .location {
            font-size: 1.4rem;
            font-weight: 500;
            color: ${Colors.black696969};
        }

        .date {
            font-size: 1.3rem;
            font-weight: 500;
            letter-spacing: -0.026rem;
            color: ${Colors.yanoljaPrimary};
            margin-top: 0.8rem;
        }
    }
`;
const HistoryDetailAction = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.8rem;
`;
