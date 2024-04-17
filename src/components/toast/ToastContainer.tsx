"use client";

import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { Colors } from "@/utils/style/colors";

export default function ToastContainer({ text }: { text: string }) {
    return (
        <Toast>
            <Image src={"/images/icons/icon_error_notice.svg"} width={20} height={20} alt="에러" />
            <span>{text}</span>
        </Toast>
    );
}

const fadeInOut = keyframes`
    0% {
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const Toast = styled.div`
    position: fixed;
    left: 50%;
    bottom: 4rem;
    transform: translateX(-50%);
    width: 100%;
    max-width: 44rem;
    height: 5.4rem;
    display: flex;
    align-items: center;
    gap: 1.3rem;
    border-radius: 0.6rem;
    padding: 0 1.9rem;
    background: ${Colors.systemToast};
    animation: ${fadeInOut} 3s ease-in-out;

    span {
        font-size: 1.3rem;
        font-weight: 500;
        color: ${Colors.systemWhite};
    }
`;
