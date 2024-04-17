import { NextPage } from "next";
import Header from "@/components/header/Header";
import HeaderBackButton from "@/components/header/HeaderBackButton";
import BasicLayout from "@/components/layout/BasicLayout";
import HistoryDetailHead from "@/containers/mypage/history/historydetail/HistoryDetailHead";
import HistoryDetailBody from "@/containers/mypage/history/historydetail/HistoryDetailBody";

const HistoryDetailPage: NextPage = () => {
    return (
        <>
            <Header title="예매내역 상세" headerLeft={<HeaderBackButton />} />
            <BasicLayout>
                <HistoryDetailHead />
                <HistoryDetailBody />
            </BasicLayout>
        </>
    );
};

export default HistoryDetailPage;
