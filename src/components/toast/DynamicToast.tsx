import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ToastContainer from "./ToastContainer";

export default function DynamicToast({ text }: { text: string }) {
    const [open, setOpen] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (typeof window === "undefined") return null;
    const modalRoot = document.getElementById("toast") as HTMLDivElement;

    return open ? createPortal(<ToastContainer text={text} />, modalRoot) : null;
}
