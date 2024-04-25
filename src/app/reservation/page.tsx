import { NextPage } from "next";
import Header from "@/components/header/Header";
import FullHeightLayout from "@/components/layout/FullHeightLayout";
import ReservationContainer from "@/containers/reservation/ReservationContainer";
import { CustomFetch } from "@/hooks/useCustomFetch";

const reservationCheck = async () => {
    "use server";
    const res = await CustomFetch("http://seatrootmeback0.cafe24.com:7989/api/v1/order", {
        method: "POST",
        body: JSON.stringify({
            orderNum: "2",
            theaterCode: "0000001",
            name: "박정영",
            count: 3,
        }),
    });

    return res;
};

const ReservationPage: NextPage = () => {
    return (
        <>
            <Header title="예매조회" />
            <FullHeightLayout>
                <ReservationContainer handleReservationCheck={reservationCheck} />
            </FullHeightLayout>
        </>
    );
};

export default ReservationPage;
