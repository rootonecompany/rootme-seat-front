"use client";

import Image from "next/image";
import Thumbnail from "/public/images/thumbnails/thumbnail.png";
import { Colors } from "@/utils/style/colors";
import styled from "styled-components";
import useModal from "@/hooks/useModal";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";
import { ActionButton } from "@/components/button/Button";

export default function HistoryDetailHead() {
    const { isOpen, openModal, closeModal } = useModal();

    return (
        <HistoryDetailHeadContainer>
            <HistoryDetailHeadInner>
                <HistoryDetailProductInfo>
                    <Image src={Thumbnail} width={78} height={104} alt="테스트 썸네일" priority />
                    <div>
                        <strong>뮤지컬 〈달 샤베트〉 - 서울숲 </strong>
                        <span className="location">서울 상상나라 극장</span>
                        <span className="date">2024.04.23 · 오후 6:00 · 2명</span>
                    </div>
                </HistoryDetailProductInfo>
                <HistoryDetailAction>
                    <ActionButton onClick={openModal} $primary>
                        티켓보기
                    </ActionButton>
                </HistoryDetailAction>
                <DynamicModal open={isOpen} close={closeModal}>
                    <ConfirmationModal
                        title="좌석을 변경하시겠습니까?"
                        message={`좌석을 변경하실 경우\n기존 좌석은 예약이 취소됩니다.`}
                        close={closeModal}
                        buttonText="변경하기"
                    />
                </DynamicModal>
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
