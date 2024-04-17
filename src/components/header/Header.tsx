"use client";

import styled from "styled-components";
import { Colors } from "@/utils/style/colors";

interface HeaderProsp {
    title?: string;
    headerLeft?: React.ReactNode;
    headerRight?: React.ReactNode;
}

export default function Header({ title, headerLeft, headerRight }: HeaderProsp) {
    return (
        <>
            <HeaderContainer>
                <HeaderInner>
                    {headerLeft && <HeaderSide $side="left">{headerLeft}</HeaderSide>}
                    <h1>{title}</h1>
                    {headerRight && <HeaderSide $side="right">{headerRight}</HeaderSide>}
                </HeaderInner>
            </HeaderContainer>
            <HeaderSpace />
        </>
    );
}

const HeaderContainer = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color: ${Colors.systemWhite};
    z-index: 9999;
`;
const HeaderInner = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 76.8rem;
    margin: 0 auto;
    height: 5.6rem;
    h1 {
        font-size: 1.6rem;
        color: #1a1a1a;
        font-weight: 600;
    }
`;
const HeaderSide = styled.div<{ $side: "left" | "right" }>`
    position: absolute;
    ${(props) => props.$side}: 0;
    top: 0;
    height: inherit;
    display: flex;
    align-items: center;
    padding: 0 1.4rem;
`;
const HeaderSpace = styled.div`
    padding-top: 5.6rem;
`;
