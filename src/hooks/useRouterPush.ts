import { useRouter } from "next/navigation";

export default function useRouterPush() {
    const router = useRouter();
    const handleRouterPush = (path: string) => {
        router.push(path, {
            scroll: false,
        });
    };

    const handleRouterReplace = (path: string) => {
        router.replace(path, {
            scroll: false,
        });
    };

    return { handleRouterPush, handleRouterReplace };
}
