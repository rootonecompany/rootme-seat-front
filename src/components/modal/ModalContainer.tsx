"use client";

import { useRecoilValue } from "recoil";
import { modalState } from "@/utils/recoil/atom";
import ModalInner from "./ModalInner";
import { Modal } from "@/interface";

export default function ModalContainer() {
    const modals = useRecoilValue(modalState);
    return (
        <>
            {modals.map(
                ({ key, component, close }: Modal) =>
                    component &&
                    close && <ModalInner key={key} component={component} close={close} />
            )}
        </>
    );
}
