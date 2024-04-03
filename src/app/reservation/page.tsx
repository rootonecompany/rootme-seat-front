import { NextPage } from "next";
import Header from "@/components/header/Header";
import FullHeightLayout from "@/components/layout/FullHeightLayout";
import ReservationContainer from "@/containers/reservation/ReservationContainer";

const ReservationPage: NextPage = () => {
    return (
        <>
            <Header title="좌석예매" />
            <FullHeightLayout>
                <ReservationContainer />
            </FullHeightLayout>
        </>
    );
};

export default ReservationPage;
