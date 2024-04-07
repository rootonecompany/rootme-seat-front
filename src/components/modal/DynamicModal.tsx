import { createPortal } from "react-dom";
import ModalContainer from "./ModalContainer";

interface Props {
    children: React.ReactNode;
    open: boolean;
    close: () => void;
}

export default function DynamicModal({ children, open, close }: Props) {
    if (typeof window === "undefined") return null;
    const modalRoot = document.getElementById("modal") as HTMLDivElement;
    return open
        ? createPortal(<ModalContainer close={close}>{children}</ModalContainer>, modalRoot)
        : null;
}
