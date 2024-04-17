"use client";

import styled from "styled-components";
import { Colors } from "@/utils/style/colors";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    const handleGoHome = () => {
        router.push("/reservation");
    };

    return (
        <NotFoundContainer>
            <NotFoundInner>
                <div>
                    <h1>4😵4</h1>
                    <span>찾으시는 페이지가 없습니다.</span>
                    <p>
                        요청하신 페이지를 찾을 수 없습니다.
                        <br />
                        입력하신 주소가 정확한지 다시 한번 확인해주세요.
                    </p>
                </div>
                <button onClick={handleGoHome}>홈으로</button>
            </NotFoundInner>
        </NotFoundContainer>
    );
}

const NotFoundContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const NotFoundInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        h1 {
            font-size: 7.2rem;
            font-weight: 900;
            color: ${Colors.black1A1A1A};
        }

        span {
            font-size: 1.8rem;
            font-weight: 700;
            color: ${Colors.black1A1A1A};
            margin: 2.4rem 0 1.2rem;
        }

        p {
            font-size: 1.3rem;
            font-weight: 500;
            color: ${Colors.black9A9A9A};
            line-height: 1.6;
        }
    }

    & > button {
        width: 14rem;
        height: 4rem;
        border-radius: 0.6rem;
        background: ${Colors.black1A1A1A};
        font-size: 1.4rem;
        font-weight: 600;
        color: ${Colors.systemWhite};
    }
`;
