"use client";

import styled from "styled-components";
import useGoBack from "@/hooks/useGoBack";
import Prev from "/public/images/btns/btn_prev.svg";

export default function HeaderBackButton() {
    const goBack = useGoBack();
    return (
        <IconButton onClick={goBack}>
            <Prev width={24} height={24} />
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
`;
