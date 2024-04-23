import { NextRequest, NextResponse } from "next/server";

const verifyJwtToken = async (token: string) => {
  try {
    const response = await fetch("http://localhost:1337/api/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
};

const AUTH_PAGES = ["/login", "/register", "/pouet"];

const isAuthPages = (url: string) =>
  AUTH_PAGES.some((page) => page.startsWith(url));

export async function middleware(request: NextRequest) {
  const { url, nextUrl, cookies } = request;
  const { value: token } = cookies.get("token") ?? { value: null };

  const hasVerifiedToken = token && (await verifyJwtToken(token));
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

  return NextResponse.next();
}

// export const config = { matcher: ["/login", "/pouet", "/panel/:path*"] };
