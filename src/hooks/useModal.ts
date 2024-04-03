import { Modal } from "@/interface";
import { modalState } from "@/utils/recoil/atom";
import { useRecoilState } from "recoil";

export default function useModal() {
    const [modals, setModals] = useRecoilState<Modal[]>(modalState);

    const openModal = (modal: Modal) => {
        const key = Math.random().toString(36).substring(2);

        const newModal = {
            key,
            component: modal.component,
            close: () => closeModal(key),
        };

        setModals((prevModals) => [...prevModals, newModal]);
        return newModal;
    };

    const closeModal = (key: string) => {
        setModals((prevModals) => prevModals.filter((modal) => modal.key !== key));
    };

    return { openModal, closeModal };
}
