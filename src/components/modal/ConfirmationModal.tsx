"use client";

import { Colors } from "@/utils/style/colors";
import styled from "styled-components";

interface ConfirmationModalProps {
    close: () => void;
    title: string;
    message: string;
    buttonText: string;
    handler?: () => void;
}

export default function ConfirmationModal({
    close,
    handler,
    title,
    message,
    buttonText,
}: ConfirmationModalProps) {
    return (
        <ConfirmationModalContainer>
            <ConfirmationContent>
                <h6>{title}</h6>
                <p>{message}</p>
            </ConfirmationContent>
            <ConfirmationButtonContainer>
                <button onClick={close}>아니요</button>
                <button onClick={handler}>{buttonText}</button>
            </ConfirmationButtonContainer>
        </ConfirmationModalContainer>
    );
}

const ConfirmationModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`;
const ConfirmationContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.4rem;

    h6 {
        font-size: 2rem;
        font-weight: 600;
        line-height: 1.1;
        color: ${Colors.black1A1A1A};
    }

    p {
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1.38;
        color: ${Colors.black9A9A9A};
        white-space: pre-line;
    }
`;
const ConfirmationButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
        flex: 1;
        height: 4.8rem;
        border-radius: 1rem;
        border: none;
        background: ${Colors.blackF0F0F0};
        font-size: 1.4rem;
        font-weight: 500;
        color: ${Colors.black1A1A1A};
        cursor: pointer;

        &:last-child {
            background: ${Colors.yanoljaPrimary};
            color: ${Colors.systemWhite};
            font-weight: 700;
        }
    }
`;
