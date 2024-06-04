"use client";
import useModal from "@/hooks/useModal";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";
import { useRouter } from "next/navigation";

export default function TestError() {
    const router = useRouter();
    const { isOpen, openModal, closeModal } = useModal();

    return (
        <div>
            <DynamicModal open={true} close={closeModal}>
                <ConfirmationModal
                    title="서버에러"
                    message={`알수없는 오류가 발생했습니다.`}
                    buttonText="홈으로"
                    close={closeModal}
                    handler={() => {
                        router.back();
                    }}
                />
            </DynamicModal>
        </div>
    );
}
