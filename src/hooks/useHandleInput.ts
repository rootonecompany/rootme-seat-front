import { useState } from "react";
import { KeyValueData } from "@/interface";

export default function useHandleInput<T = KeyValueData>() {
    const [inputValue, setInputValue] = useState<T>({} as T);

    function handleInputValue(e: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = e.target;
        setInputValue((prev) => ({ ...((prev || {}) as T), [name]: value }));
    }

    return { inputValue, handleInputValue };
}
