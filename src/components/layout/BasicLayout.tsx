"use client";

import { Colors } from "@/utils/style/colors";
import styled from "styled-components";

export default function BasicLayout({ children }: { children: React.ReactNode }) {
    return <BasicContainer>{children}</BasicContainer>;
}

const BasicContainer = styled.div`
    width: 100%;
    max-width: 76.8rem;
    min-height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background-color: ${Colors.systemWhite};
`;
