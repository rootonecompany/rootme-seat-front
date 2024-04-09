"use client";

import styled, { keyframes } from "styled-components";
import { Colors } from "@/utils/style/colors";

interface ModalContainerProps {
    children: React.ReactNode;
    close: () => void;
}

export default function ModalContainer({ children, close }: ModalContainerProps) {
    return (
        <ModalInnerBlock>
            <ModalOverlay onClick={close} />
            <ModalContent>{children}</ModalContent>
        </ModalInnerBlock>
    );
}

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const ModalInnerBlock = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    animation: ${fadeIn} 0.25s ease-in-out;
    z-index: 9999;
`;
const ModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 100;
`;
const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 4rem);
    max-width: 32rem;
    border-radius: 1.2rem;
    padding: 3.6rem 2rem 1.8rem;
    background: ${Colors.systemWhite};
    z-index: 200;
`;
