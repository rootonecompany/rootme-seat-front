import { useRouter } from "next/navigation";

export default function useRouterPush() {
    const router = useRouter();
    const handleRouterPush = (path: string) => {
        router.push(path, {
            scroll: false,
        });
    };

    return { handleRouterPush };
}
