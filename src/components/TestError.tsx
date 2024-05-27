"use client";
import useModal from "@/hooks/useModal";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";

export default function TestError({ orderNumber }: { orderNumber: string }) {
    const { isOpen, openModal, closeModal } = useModal();

    return (
        <div>
            <DynamicModal open={true} close={closeModal}>
                <ConfirmationModal
                    title="주문번호 오류"
                    message={`주문번호 ${orderNumber}에 대한\n 정보를 찾을 수 없습니다. 다시 확인해주세요.`}
                    buttonText="홈으로"
                    close={closeModal}
                />
            </DynamicModal>
        </div>
    );
}
