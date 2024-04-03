import { NextPage } from "next";
import Header from "@/components/header/Header";
import SeatContainer from "@/containers/reservation/seat/SeatContainer";

const ReservationSeat: NextPage = () => {
    return (
        <>
            <Header title="좌석선택" />
            <SeatContainer />
        </>
    );
};

export default ReservationSeat;
