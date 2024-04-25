"use client";

import styled from "styled-components";
import { Colors } from "@/utils/style/colors";
import RightArrow from "/public/images/icons/icon_right_arrow.svg";
import DynamicModal from "@/components/modal/DynamicModal";
import useModal from "@/hooks/useModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";
import useRouterPush from "@/hooks/useRouterPush";

export default function OptionList() {
    const { handleRouterPush } = useRouterPush();
    const { isOpen, openModal, closeModal } = useModal();

    const handleReservation = () => {
        handleRouterPush("/reservation/schedule");
    };

    return (
        <OptionListWrapper>
            <OptionListItem className="reservation" onClick={handleReservation}>
                <div>
                    <strong>좌석 예매하기</strong>
                    <span>공연 좌석을 예매해주세요.</span>
                </div>
                <RightArrow width={24} height={24} color={Colors.systemWhite} />
            </OptionListItem>
            <OptionListItem className="cancel" onClick={openModal}>
                <div>
                    <strong>예매 취소하기</strong>
                    <span>예매를 취소하시겠습니까?</span>
                </div>
                <RightArrow width={24} height={24} color={Colors.yanoljaPrimary} />
            </OptionListItem>
            <DynamicModal open={isOpen} close={closeModal}>
                <ConfirmationModal
                    title="예매를 취소하시겠습니까?"
                    message={`결제 취소 및 환불까지 평균 3~5일이\n소모될 수 있습니다.`}
                    close={closeModal}
                    buttonText="예매취소"
                />
            </DynamicModal>
        </OptionListWrapper>
    );
}

const OptionListWrapper = styled.ul`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-top: 2.8rem;
`;
const OptionListItem = styled.li`
    width: 100%;
    height: 13.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 1.6rem;
    padding: 0 2rem 0 2.8rem;
    cursor: pointer;

    & > div {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;

        strong {
            font-size: 2rem;
            font-weight: 700;
        }
        span {
            font-size: 1.3rem;
            font-weight: 500;
        }
    }

    &.reservation {
        background: ${Colors.buttonGradient};
        box-shadow: 0px 2px 12px 0px rgba(255, 25, 120, 0.4);
        & > div {
            strong,
            span {
                color: ${Colors.systemWhite};
            }
        }
    }

    &.cancel {
        background: ${Colors.systemWhite};
        border: 0.1rem solid ${Colors.yanoljaPrimary};

        & > div {
            strong,
            span {
                color: ${Colors.yanoljaPrimary};
            }
        }
    }
`;
