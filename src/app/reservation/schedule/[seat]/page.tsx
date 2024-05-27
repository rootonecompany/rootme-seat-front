import { NextPage } from "next";
import BasicLayout from "@/components/layout/BasicLayout";
import Header from "@/components/header/Header";
import SeatContainer from "@/containers/reservation/seat/SeatContainer";
import HeaderBackButton from "@/components/header/HeaderBackButton";
import { getSeats } from "@/services/reservationAction";

interface Params {
    params: { seat: string };
}

const ReservationSeat: NextPage<Params> = async ({ params }) => {
    const seats = await getSeats(params.seat);
    console.log(seats);
    return (
        <>
            {/* <Header title="좌석 예매하기" headerLeft={<HeaderBackButton />} />
            <BasicLayout>
                <SeatContainer seats={seats} />
            </BasicLayout> */}
        </>
    );
};

export default ReservationSeat;
