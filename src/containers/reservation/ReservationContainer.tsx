"use client";

import styled from "styled-components";
import { Colors } from "@/utils/style/colors";
import { useState } from "react";

export default function ReservationContainer() {
    const [orderNumber, setOrderNumber] = useState<string>("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setOrderNumber(event.target.value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <ReservationBody>
            <Form onSubmit={handleSubmit}>
                <FormEvent>
                    <fieldset>
                        <input
                            type="text"
                            id="orderNumber"
                            name="orderNumber"
                            required
                            autoFocus
                            value={orderNumber}
                            onChange={handleChange}
                        />
                        <label htmlFor="orderNumber">주문번호를 입력해주세요.</label>
                    </fieldset>
                </FormEvent>
                <SubmitButton type="submit" disabled={!orderNumber ? true : false}>
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
    padding-top: 5rem;
`;
const Form = styled.form`
    width: 100%;
    max-width: 48rem;
    padding: 0 2rem;
`;
const FormEvent = styled.div`
    min-height: 8rem;
    fieldset {
        position: relative;
        width: 100%;
        height: 5.6rem;
        display: flex;
        align-items: center;
        contain: content;
        padding-top: 2.8rem;
        label {
            position: absolute;
            top: 2.8rem;
            left: 0;
            font-size: 1.6rem;
            color: #ccc;
            cursor: text;
            transform-origin: left;
            transition: color 0.2s ease-out, transform 0.2s ease-out;
        }
        input {
            width: 100%;
            padding-bottom: 0.8rem;
            border: none;
            caret-color: #0152cc;
            border-bottom: 1px solid #ccc;
            font-size: 1.6rem;
            font-weight: 400;
            &:focus,
            &:valid {
                border-bottom: 1px solid #0152cc54;
            }
            &:focus + label,
            &:valid + label {
                color: #919191;
                transform: scale(0.75) translateY(-4rem);
                transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
                    transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            }
        }
    }
`;
const SubmitButton = styled.button`
    width: 100%;
    height: 4.6rem;
    margin-top: 1.6rem;
    border: none;
    background: #de2e5f;
    border-radius: 0.4rem;
    font-size: 1.6rem;
    font-weight: 700;
    color: ${Colors.systemWhite};
    &:disabled {
        background: #ccc;
    }
`;
