import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const { cookies } = request;
    const hasCookie = cookies.has("orderNumber");

    if (hasCookie) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/reservation", request.url));
}

export const config = {
    matcher: ["/reservation/option", "/reservation/schedule", "/reservation/schedule/:path*"],
};
