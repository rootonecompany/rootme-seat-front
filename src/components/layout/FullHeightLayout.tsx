"use client";

import styled from "styled-components";

export default function FullHeightLayout({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return <FullHeightContainer className={className}>{children}</FullHeightContainer>;
}

const FullHeightContainer = styled.main`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
`;
