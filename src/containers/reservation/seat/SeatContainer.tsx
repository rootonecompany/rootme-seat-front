"use client";

import { useParams } from "next/navigation";

export default function Seat() {
    const { seat } = useParams();

    return <div>{seat}</div>;
}
