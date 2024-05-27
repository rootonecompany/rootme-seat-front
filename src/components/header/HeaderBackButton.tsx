"use client";

import Image from "next/image";
import styled from "styled-components";
import useGoBack from "@/hooks/useGoBack";
import useRouterPush from "@/hooks/useRouterPush";

interface HeaderBackButtonProps {
    returnUrl?: boolean;
}

export default function HeaderBackButton({ returnUrl = false }: HeaderBackButtonProps) {
    const { handleRouterPush } = useRouterPush();
    const goBack = useGoBack();

    return (
        <IconButton
            onClick={() => {
                returnUrl ? handleRouterPush("/reservation") : goBack();
            }}
        >
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
