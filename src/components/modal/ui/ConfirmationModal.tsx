"use client";

import { ModalActionButton } from "@/components/button/Button";
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
                <ModalActionButton onClick={close}>아니요</ModalActionButton>
                <ModalActionButton onClick={handler} $primary>
                    {buttonText}
                </ModalActionButton>
            </ConfirmationButtonContainer>
        </ConfirmationModalContainer>
    );
}

const ConfirmationModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.8rem;
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
        font-weight: 500;
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
`;
