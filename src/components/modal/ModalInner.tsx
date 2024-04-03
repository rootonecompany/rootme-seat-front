"use client";

import { Modal } from "@/interface";
import { Colors } from "@/utils/style/colors";
import styled, { keyframes } from "styled-components";

interface ModalInnerProps extends Required<Omit<Modal, "key">> {}
export default function ModalInner({ component, close }: ModalInnerProps) {
    return (
        <ModalInnerBlock>
            <ModalOverlay onClick={close} />
            <ModalContent>{component()}</ModalContent>
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
    background: rgba(0, 0, 0, 0.4);
    z-index: 100;
`;
const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${Colors.systemWhite};
    z-index: 200;
`;
