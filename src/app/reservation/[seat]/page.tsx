import { NextPage } from "next";
import BasicLayout from "@/components/layout/BasicLayout";
import Header from "@/components/header/Header";
import SeatContainer from "@/containers/reservation/seat/SeatContainer";
import HeaderBackButton from "@/components/header/HeaderBackButton";

interface Params {
    params: { seat: string };
}

const ReservationSeat: NextPage<Params> = ({ params }) => {
    return (
        <>
            <Header title="좌석 예매하기" headerLeft={<HeaderBackButton />} />
            <BasicLayout>
                <SeatContainer />
            </BasicLayout>
        </>
    );
};

export default ReservationSeat;
