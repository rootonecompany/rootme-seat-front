import { Colors } from "@/utils/style/colors";
import styled from "styled-components";
import Notice from "/public/images/icons/icon_notice.svg";
import useModal from "@/hooks/useModal";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ConfirmationModal";

interface Props {
    selectedSeats: { [key: string]: number[] };
    totalSelectedSeats: number;
}

export default function SeatReservationPanel({ selectedSeats, totalSelectedSeats }: Props) {
    const { isOpen, openModal, closeModal } = useModal();

    return (
        <SeatReservationSummary>
            <SeatReservationSummaryContainer>
                <h6>좌석 선택</h6>
                <SeatReservationSummaryView>
                    <SeatReservationSummaryViewInner>
                        {Object.keys(selectedSeats).length > 0 ? (
                            <>
                                <span>선택한 좌석</span>
                                <div>
                                    <strong>
                                        {Object.keys(selectedSeats)
                                            .slice(0, 1)
                                            .map(
                                                (column) =>
                                                    `${column} ${Object.values(
                                                        selectedSeats[column]
                                                    ).slice(0, 1)}번${
                                                        totalSelectedSeats - 1 > 0 ? " 외 " : ""
                                                    }`
                                            )}
                                    </strong>
                                    <span>
                                        {totalSelectedSeats - 1 > 0 ? (
                                            <>{totalSelectedSeats - 1}좌석</>
                                        ) : null}
                                    </span>
                                </div>
                            </>
                        ) : (
                            <span>위에서 좌석을 선택해주세요.</span>
                        )}
                    </SeatReservationSummaryViewInner>
                    <SeatReservationSummaryNotice>
                        <Notice width={16} height={16} />
                        <span>중복 좌석 선택이 가능합니다.</span>
                    </SeatReservationSummaryNotice>
                </SeatReservationSummaryView>
            </SeatReservationSummaryContainer>
            <SeatReservationSummaryButton
                disabled={Object.keys(selectedSeats).length === 0}
                onClick={openModal}
            >
                예매하기
            </SeatReservationSummaryButton>
            <DynamicModal open={isOpen} close={closeModal}>
                <ConfirmationModal
                    title="좌석을 예매하시겠습니까?"
                    message={`공연시간이 지난 후에는\n 좌석을 변경하실수 없습니다.`}
                    buttonText="예매하기"
                    close={closeModal}
                />
            </DynamicModal>
        </SeatReservationSummary>
    );
}

const SeatReservationSummary = styled.div`
    width: 100%;
    max-width: 76.8rem;
    display: flex;
    flex-direction: column;
    padding: 3rem 2rem 3.8rem;
    border-radius: 2.6rem 2.6rem 0 0;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
    overflow: hidden;
`;

const SeatReservationSummaryContainer = styled.div`
    flex: 1;
    margin-bottom: 4.4rem;
    & > h6 {
        font-size: 1.8rem;
        font-weight: 700;
        color: ${Colors.black1A1A1A};
    }
`;

const SeatReservationSummaryView = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
`;

const SeatReservationSummaryViewInner = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.2rem 1.8rem;
    border: 0.1rem solid ${Colors.blackE2E2E2};
    border-radius: 0.8rem;
    & > span {
        font-size: 1.4rem;
        font-weight: 500;
        color: ${Colors.black696969};
    }
    & > div strong {
        font-size: 1.4rem;
        font-weight: 700;
        color: ${Colors.black1A1A1A};
    }
    & > div span {
        font-size: 1.4rem;
        font-weight: 500;
        color: ${Colors.yanoljaPrimary};
    }
`;

const SeatReservationSummaryNotice = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    span {
        font-size: 1.2rem;
        font-weight: 500;
        color: ${Colors.black9A9A9A};
    }
`;

const SeatReservationSummaryButton = styled.button`
    width: 100%;
    min-height: 5rem;
    border-radius: 0.8rem;
    border: none;
    background: ${Colors.yanoljaPrimary};
    font-size: 1.6rem;
    font-weight: 700;
    color: ${Colors.systemWhite};
    cursor: pointer;

    &:disabled {
        background: ${Colors.blackE2E2E2};
    }
`;
