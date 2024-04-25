"use client";

import styled from "styled-components";
import { Colors } from "@/utils/style/colors";
import HistoryDetailNotice from "./HistoryDetailNotice";
import useModal from "@/hooks/useModal";

export default function HistoryDetailBody() {
    return (
        <HistoryDetailBodyContainer>
            <HistoryDetailBodyInner>
                <h6>예매 세부정보</h6>
                <ul>
                    <li>
                        <strong>주문자명</strong>
                        <span>임○식</span>
                    </li>
                    <li>
                        <strong>주문번호</strong>
                        <span>KFJDO23KDF3</span>
                    </li>
                    <li>
                        <strong>선택한 좌석</strong>
                        <span>가 12번, 나21번</span>
                    </li>
                    <li>
                        <strong>공연날짜</strong>
                        <span>2024.04.23</span>
                    </li>
                    <li>
                        <strong>장소</strong>
                        <span>서울시 광진구 능동로216, 서울상상나라 지하 1층</span>
                    </li>
                </ul>
            </HistoryDetailBodyInner>
            <HistoryDetailOptions>
                <HistoryDetailNotice />
            </HistoryDetailOptions>
        </HistoryDetailBodyContainer>
    );
}

const HistoryDetailBodyContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.4rem 0 4.2rem;
`;
const HistoryDetailBodyInner = styled.div`
    width: 100%;
    max-width: 44rem;
    display: flex;
    flex-direction: column;
    gap: 2.8rem;
    padding: 0 2rem;
    & > h6 {
        font-size: 2rem;
        font-weight: 500;
        line-height: 1.1;
        color: ${Colors.black1A1A1A};
    }
    & > ul {
        display: flex;
        flex-direction: column;
        gap: 2.6rem;

        li {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
            padding-bottom: 2.6rem;
            border-bottom: 0.1rem solid ${Colors.blackE2E2E2};

            strong {
                font-size: 1.4rem;
                font-weight: 700;
                color: ${Colors.black1A1A1A};
            }

            span {
                font-size: 1.4rem;
                font-weight: 400;
                color: ${Colors.black696969};
            }
        }
    }
`;
const HistoryDetailOptions = styled.div`
    width: 100%;
    max-width: 44rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.8rem;
    padding: 0 2rem;
`;
