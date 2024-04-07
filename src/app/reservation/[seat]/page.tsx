import { NextPage } from "next";
import Header from "@/components/header/Header";
import SeatContainer from "@/containers/reservation/seat/SeatContainer";
import HeaderBackButton from "@/components/header/HeaderBackButton";

const ReservationSeat: NextPage = () => {
    return (
        <>
            <Header title="좌석 예매하기" headerLeft={<HeaderBackButton />} />
            <SeatContainer />
        </>
    );
};

export default ReservationSeat;
