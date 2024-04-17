"use client";

import styled, { css } from "styled-components";
import { Colors } from "@/utils/style/colors";

const Button = styled.button`
    width: 100%;
    border: none;
    cursor: pointer;
`;

export const EnabledButton = styled(Button)`
    height: 5rem;
    border-radius: 0.8rem;
    background: ${Colors.buttonGradient};
    font-size: 1.6rem;
    font-weight: 700;
    color: ${Colors.systemWhite};
    &:disabled {
        background: ${Colors.blackE2E2E2};
        cursor: default;
    }
`;

export const ActionButton = styled(Button)<{ $primary?: boolean }>`
    height: 4rem;
    border-radius: 0.6rem;
    background: ${Colors.systemWhite};
    border: 0.1rem solid ${Colors.blackE2E2E2};
    font-size: 1.4rem;
    font-weight: 500;
    color: ${Colors.black1A1A1A};

    ${(props) =>
        props.$primary &&
        css`
            background: ${Colors.buttonGradient};
            color: ${Colors.systemWhite};
            border: none;
            font-weight: 600;
        `}
`;

export const ModalActionButton = styled(Button)<{ $primary?: boolean }>`
    height: 4.8rem;
    border-radius: 1rem;
    background: ${Colors.blackF0F0F0};
    font-size: 1.4rem;
    font-weight: 500;
    color: ${Colors.black1A1A1A};

    ${(props) =>
        props.$primary &&
        css`
            background: ${Colors.yanoljaPrimary};
            color: ${Colors.systemWhite};
            font-weight: 700;
        `}
`;
