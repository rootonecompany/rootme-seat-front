"use client";

import Image from "next/image";
import styled from "styled-components";
import useGoBack from "@/hooks/useGoBack";

export default function HeaderBackButton() {
    const goBack = useGoBack();
    return (
        <IconButton onClick={goBack}>
            <Image
                src={"/images/btns/btn_prev.svg"}
                width={24}
                height={24}
                alt="뒤로가기"
                priority
            />
        </IconButton>
    );
}
const IconButton = styled.button`
    height: inherit;
    display: flex;
    align-items: center;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
`;
