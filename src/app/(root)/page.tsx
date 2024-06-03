import { NextPage } from "next";
import FullHeightLayout from "@/components/layout/FullHeightLayout";
import Test from "@/containers/main/Test";

const Main: NextPage = async () => {
    return (
        <FullHeightLayout>
            <Test />
        </FullHeightLayout>
    );
};

export default Main;
