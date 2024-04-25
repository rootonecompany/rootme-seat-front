import { NextPage } from "next";
import Header from "@/components/header/Header";
import HeaderBackButton from "@/components/header/HeaderBackButton";
import FullHeightLayout from "@/components/layout/FullHeightLayout";
import OptionContainer from "@/containers/reservation/option/OptionContainer";

const OptionPage: NextPage = () => {
    return (
        <>
            <Header title="선택하기" headerLeft={<HeaderBackButton />} />
            <FullHeightLayout>
                <OptionContainer />
            </FullHeightLayout>
        </>
    );
};

export default OptionPage;
