"use client";

import styled from "styled-components";

export default function BasicLayout({ children }: { children: React.ReactNode }) {
    return <BasicContainer>{children}</BasicContainer>;
}

const BasicContainer = styled.main`
    position: relative;
    width: 100%;
`;
