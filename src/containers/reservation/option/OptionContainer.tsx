"use client";

import Image from "next/image";
import styled from "styled-components";
import { Colors } from "@/utils/style/colors";
import OptionList from "./OptionList";

export default function OptionContainer() {
    return (
        <OptionWrapper>
            <OptionInner>
                <h6>
                    서비스를
                    <br />
                    선택해주세요.
                </h6>
                <OptionList />
                <div className="logo">
                    <Image
                        src="/images/icons/icon_yanolja.svg"
                        width={89}
                        height={26}
                        alt="yanolja"
                    />
                </div>
            </OptionInner>
        </OptionWrapper>
    );
}

const OptionWrapper = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 4rem;
`;
const OptionInner = styled.div`
    flex: 1;
    width: 100%;
    max-width: 48rem;
    display: flex;
    flex-direction: column;
    padding: 0 2rem 4.2rem;
    h6 {
        font-size: 2.6rem;
        font-weight: 700;
        color: ${Colors.black1A1A1A};
    }
    .logo {
        display: flex;
        justify-content: center;
    }
`;
