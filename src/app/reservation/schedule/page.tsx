import { NextPage } from "next";
import Header from "@/components/header/Header";
import HeaderBackButton from "@/components/header/HeaderBackButton";
import BasicLayout from "@/components/layout/BasicLayout";
import ScheduleContainer from "@/containers/reservation/schedule/ScheduleContainer";
import { getDates } from "@/services/reservationAction";

const ScheduleSelectionPage: NextPage = async () => {
    const dates = await getDates("2", "0000001");

    if (!dates) return null;

    return (
        <>
            <Header
                title="서울 상상나라 극장 - 고릴라 대모험 1"
                headerLeft={<HeaderBackButton />}
            />
            <BasicLayout>
                <ScheduleContainer dates={dates} />
            </BasicLayout>
        </>
    );
};

export default ScheduleSelectionPage;
