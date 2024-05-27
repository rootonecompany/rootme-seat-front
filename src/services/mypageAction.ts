import { CustomFetch } from "@/hooks/useCustomFetch";
import { Invoice } from "@/interface";

export async function getMyHistory(orderNum: string) {
    const result = await CustomFetch<Invoice>(
        "/api/v1/order/invoice",
        {
            params: {
                orderNum,
            },
        },
        "coleslaw"
    );

    return result;
}
