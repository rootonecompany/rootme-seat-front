import { NextPage } from "next";
import Header from "@/components/header/Header";
import FullHeightLayout from "@/components/layout/FullHeightLayout";
import ReservationContainer from "@/containers/reservation/ReservationContainer";
import HeaderBackButton from "@/components/header/HeaderBackButton";

const ReservationPage: NextPage = () => {
    return (
        <>
            <Header title="좌석예매" headerLeft={<HeaderBackButton />} />
            <FullHeightLayout>
                <ReservationContainer />
            </FullHeightLayout>
        </>
    );
};

export default ReservationPage;
