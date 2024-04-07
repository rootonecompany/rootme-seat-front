"use client";

import styled from "styled-components";
import useHandleInput from "@/hooks/useHandleInput";
import { pretendard } from "@/utils/style/fonts";
import { Colors } from "@/utils/style/colors";

interface UserInputFormData {
    orderNumber: string;
}

export default function ReservationContainer() {
    const { inputValue, handleInputValue } = useHandleInput<UserInputFormData>();

    return (
        <ReservationBody>
            <Form>
                <FormFieldSet>
                    <label htmlFor="orderNumber">
                        <h6>좌석예매</h6>
                        <p>주문번호를 먼저 입력해주세요!</p>
                    </label>
                    <input
                        type="text"
                        id="orderNumber"
                        name="orderNumber"
                        autoFocus
                        value={inputValue.orderNumber || ""}
                        onChange={(e) => handleInputValue(e)}
                        placeholder="주문번호를 입력해주세요."
                    />
                    <span>주문번호를 다시 입력해주세요.</span>
                </FormFieldSet>
                <SubmitButton type="submit" disabled={!inputValue.orderNumber}>
                    확인
                </SubmitButton>
            </Form>
        </ReservationBody>
    );
}

const ReservationBody = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
`;
const Form = styled.form`
    width: 100%;
    max-width: 48rem;
    padding: 0 2rem;
`;
const FormFieldSet = styled.fieldset`
    display: flex;
    flex-direction: column;
    label {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        grid-gap: 0.6rem;
        h6 {
            font-size: 2.6rem;
            font-weight: 700;
            color: ${Colors.black1A1A1A};
        }
        p {
            font-size: 1.4rem;
            font-weight: 400;
            color: ${Colors.black9A9A9A};
        }
    }
    input {
        width: 100%;
        height: 5.6rem;
        border-radius: 0.8rem;
        border: 1px solid ${Colors.black1A1A1A};
        padding: 0 2rem;
        margin-top: 4rem;
        font-size: 1.5rem;
        font-weight: 500;
        color: ${Colors.black1A1A1A};

        &::placeholder {
            color: ${Colors.blackBBBBBB};
            font-family: ${pretendard.style.fontFamily};
            font-weight: 500;
        }
    }
    span {
        display: none;
        font-size: 1.3rem;
        font-weight: 500;
        color: ${Colors.systemError};
        margin: 0.8rem 0 0.6rem;
    }
    &.error {
        input {
            border: 1px solid ${Colors.systemError};
        }
        span {
            display: block;
        }
    }
`;
const SubmitButton = styled.button`
    width: 100%;
    height: 5rem;
    margin-top: 1.4rem;
    border: none;
    background: ${Colors.buttonGradient};
    border-radius: 0.8rem;
    font-size: 1.6rem;
    font-weight: 700;
    color: ${Colors.systemWhite};
    &:disabled {
        background: ${Colors.blackE2E2E2};
    }
`;
