"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createCookie(key: string, val: string) {
    cookies().set({
        name: key,
        value: val,
        path: "/",
        maxAge: 60 * 10,
    });
}

export async function hasCookie(key: string, redirectPath: string) {
    const cookie = cookies().has(key);

    !cookie && redirect(redirectPath);

    return cookie;
}

export async function getCookie(key: string) {
    const cookie = cookies().get(key);

    return cookie;
}

export async function removeCookie(key: string) {
    cookies().delete(key);
}
