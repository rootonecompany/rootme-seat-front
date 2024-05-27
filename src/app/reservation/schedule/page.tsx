import { NextPage } from "next";
import Header from "@/components/header/Header";
import HeaderBackButton from "@/components/header/HeaderBackButton";
import BasicLayout from "@/components/layout/BasicLayout";
import ScheduleContainer from "@/containers/reservation/schedule/ScheduleContainer";
import { CustomFetch } from "@/hooks/useCustomFetch";
import { Dates } from "@/interface";

async function getDates(orderNum: string, theaterCode: string) {
    const result = await CustomFetch<Dates>(
        "/api/v1/theater/dates",
        {
            params: {
                orderNum,
                theaterCode,
            },
        },
        "coleslaw"
    );
    return result;
}

const ScheduleSelectionPage: NextPage = async () => {
    const dates = await getDates("2", "0000001");

    if (!dates) {
        return null;
    }

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
