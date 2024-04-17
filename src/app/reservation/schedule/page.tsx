import Header from "@/components/header/Header";
import HeaderBackButton from "@/components/header/HeaderBackButton";
import BasicLayout from "@/components/layout/BasicLayout";
import ScheduleContainer from "@/containers/reservation/schedule/ScheduleContainer";
import { NextPage } from "next";

const ScheduleSelectionPage: NextPage = () => {
    return (
        <>
            <Header title="서울 상상나라 극장 - 고릴라 대모험" headerLeft={<HeaderBackButton />} />
            <BasicLayout>
                <ScheduleContainer />
            </BasicLayout>
        </>
    );
};

export default ScheduleSelectionPage;
