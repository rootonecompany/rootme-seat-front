"use client";

import styled from "styled-components";
import { Colors } from "@/utils/style/colors";
import HistoryDetailNotice from "./HistoryDetailNotice";
import useModal from "@/hooks/useModal";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";
import { ActionButton } from "@/components/button/Button";

export default function HistoryDetailBody() {
    const { isOpen, openModal, closeModal } = useModal();

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
                <ActionButton onClick={openModal}>예매취소</ActionButton>
            </HistoryDetailOptions>
            <DynamicModal open={isOpen} close={closeModal}>
                <ConfirmationModal
                    title="예매를 취소하시겠습니까?"
                    message={`결제 취소 및 환불까지 평균 3~5일이\n소모될 수 있습니다.`}
                    close={closeModal}
                    buttonText="예매취소"
                />
            </DynamicModal>
        </HistoryDetailBodyContainer>
    );
}

const HistoryDetailBodyContainer = styled.div`
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
`;
