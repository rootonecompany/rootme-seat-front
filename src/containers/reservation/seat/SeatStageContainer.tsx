"use client";

import { Colors } from "@/utils/style/colors";
import Image from "next/image";
import styled from "styled-components";

export default function SeatStageContainer() {
    return (
        <>
            <StageInfoContainer>
                <StageInfo $stateColor="#FE4692">
                    <div />
                    <span>선택좌석</span>
                </StageInfo>
                <StageInfo $stateColor="#696969">
                    <div />
                    <span>예매완료</span>
                </StageInfo>
                <StageInfo $stateColor="#CECECE">
                    <div />
                    <span>선택가능</span>
                </StageInfo>
                <StageInfo $stateColor="">
                    <Image
                        src="/images/icons/icon_not_selectable.svg"
                        width={12}
                        height={12}
                        alt="선택불가"
                    />
                    <span>선택불가</span>
                </StageInfo>
                <StageInfo $stateColor="#8DBC13">
                    <div />
                    <span>장애인석</span>
                </StageInfo>
            </StageInfoContainer>
            <StageContainer>
                <Stage>
                    <span>무대 STAGE</span>
                </Stage>
            </StageContainer>
        </>
    );
}

const StageContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 2rem;
`;
const StageInfoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1.1rem 2rem;
    background: ${Colors.black9A9A9A};
`;
const StageInfo = styled.div<{ $stateColor: string }>`
    display: flex;
    align-items: center;
    gap: 0.2rem;

    div {
        width: 1.2rem;
        height: 1.2rem;
        background: ${(props) => props.$stateColor};
    }
    span {
        font-size: 1.1rem;
        font-weight: 400;
        line-height: 1;
        color: ${Colors.systemWhite};
    }
`;
const Stage = styled.div`
    width: 100%;
    height: 6.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 2rem 2rem;
    background: ${Colors.blackE9E9E9};

    span {
        font-size: 2.2rem;
        font-weight: 700;
        color: ${Colors.black1A1A1A};
    }
`;
