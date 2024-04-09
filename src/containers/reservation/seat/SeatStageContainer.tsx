"use client";

import { Colors } from "@/utils/style/colors";
import styled from "styled-components";

export default function SeatStageContainer() {
    return (
        <StageContainer>
            <Stage>
                <span>무대 STAGE</span>
            </Stage>
        </StageContainer>
    );
}

const StageContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 2rem;
`;
const Stage = styled.div`
    width: 100%;
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 2rem 2rem;
    background: ${Colors.blackF0F0F0};

    span {
        font-size: 2.2rem;
        font-weight: 700;
        color: ${Colors.black1A1A1A};
    }
`;
