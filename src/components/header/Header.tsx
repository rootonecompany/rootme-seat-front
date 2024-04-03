"use client";

import styled from "styled-components";
import { Colors } from "@/utils/style/colors";

interface HeaderProsp {
    title?: string;
}

export default function Header({ title }: HeaderProsp) {
    return (
        <>
            <HeaderContainer>
                <HeaderInner>
                    <h1>{title}</h1>
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
    box-shadow: 0px 0px 0px 0.1rem #e6e6e6;
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
    height: 4.8rem;
    h1 {
        font-size: 1.8rem;
    }
`;
const HeaderSpace = styled.div`
    padding-top: 4.8rem;
`;
