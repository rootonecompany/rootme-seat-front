"use server";

import { cookies } from "next/headers";

export async function createCookie(key: string, val: string) {
    cookies().set({
        name: key,
        value: val,
        path: "/",
        maxAge: 60 * 10,
    });
}
