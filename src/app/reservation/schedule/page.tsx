import { NextPage } from "next";
import Header from "@/components/header/Header";
import HeaderBackButton from "@/components/header/HeaderBackButton";
import BasicLayout from "@/components/layout/BasicLayout";
import ScheduleContainer from "@/containers/reservation/schedule/ScheduleContainer";
import { getDates } from "@/services/reservationAction";

export const dynamic = "force-dynamic";

const ScheduleSelectionPage: NextPage = async () => {
    const dates = await getDates("2", "0000001");

    return (
        <>
            <Header
                title="서울 상상나라 극장 - 고릴라 대모험 1"
                headerLeft={<HeaderBackButton />}
            />
            <BasicLayout>
                {!dates ? (
                    <div>알수없는 에러가 발생했습니다.</div>
                ) : (
                    <ScheduleContainer dates={dates} />
                )}
            </BasicLayout>
        </>
    );
};

export default ScheduleSelectionPage;
