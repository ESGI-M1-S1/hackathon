import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { verifyJwtToken } from "@/libs/auth";

const AUTH_PAGES = ["/login", "/register"];

const isAuthPages = (url: string) =>
  AUTH_PAGES.some((page) => page.startsWith(url));

export function middleware(request: NextRequest) {
  console.log("=======================+> middleware.ts");
  const { url, nextUrl, cookies } = request;
  const { value: token } = cookies.get("token") ?? { value: null };

  console.log("token", token);

  const hasVerifiedToken = token && verifyJwtToken(token);
  const isAuthPageRequested = isAuthPages(nextUrl.pathname);

  if (isAuthPageRequested) {
    if (!hasVerifiedToken) {
      const response = NextResponse.next();
      response.cookies.delete("token");
      return response;
    }

    return NextResponse.redirect(new URL(`/`, url));
  }

  if (!hasVerifiedToken) {
    const searchParams = new URLSearchParams(nextUrl.searchParams);
    searchParams.set("next", nextUrl.pathname);

    const response = NextResponse.redirect(
      new URL(`/login?${searchParams}`, url),
    );
    response.cookies.delete("token");

    return response;
  }

  console.log("is verified");

  return NextResponse.next();
}

export const config = {
  matcher: "/pouet/:path*",
};
