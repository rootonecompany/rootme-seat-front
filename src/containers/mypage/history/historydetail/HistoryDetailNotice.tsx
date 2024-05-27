"use client";

import styled from "styled-components";
import ErrorNotice from "/public/images/icons/icon_error_notice.svg";
import { Colors } from "@/utils/style/colors";

export default function HistoryDetailNotice() {
    return (
        <HistoryDetailNoticeContainer>
            <ErrorNotice width={20} height={20} />
            <span>예매 정보가 맞는지 정확히 확인해주세요.</span>
        </HistoryDetailNoticeContainer>
    );
}

const HistoryDetailNoticeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.3rem;
    padding: 1.5rem 1.9rem;
    border-radius: 0.8rem;
    background: ${Colors.blackF4F6F7};

    span {
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.4;
        color: ${Colors.black9A9A9A};
    }
`;
