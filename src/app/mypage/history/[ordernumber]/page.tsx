import { NextPage } from "next";
import Header from "@/components/header/Header";
import HeaderBackButton from "@/components/header/HeaderBackButton";
import BasicLayout from "@/components/layout/BasicLayout";
import HistoryDetailHead from "@/containers/mypage/history/historydetail/HistoryDetailHead";
import HistoryDetailBody from "@/containers/mypage/history/historydetail/HistoryDetailBody";
import { getMyHistory } from "@/services/mypageAction";

interface Params {
    params: { ordernumber: string };
}

const HistoryDetailPage: NextPage<Params> = async ({ params }) => {
    const invoice = await getMyHistory(params.ordernumber);

    if (!invoice.data) {
        return <div>예매내역이 없습니다.</div>;
    }

    return (
        <>
            <Header title="예매내역 상세" headerLeft={<HeaderBackButton returnUrl />} />
            <BasicLayout>
                <HistoryDetailHead invoice={invoice.data} />
                <HistoryDetailBody invoice={invoice.data} />
            </BasicLayout>
        </>
    );
};

export default HistoryDetailPage;
