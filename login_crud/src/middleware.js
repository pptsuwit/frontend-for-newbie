import { NextResponse } from "next/server";

export function middleware(request) {
  try {
    const token = request.cookies.get(process.env.TOKEN_NAME);
    if (token) return NextResponse.next();
    else
      return NextResponse.redirect(
        new URL(process.env.REDIRECT_TO_LOGIN, request.url)
      );
  } catch (err) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - backoffice/regiser page
     * - backoffice/login page
     */
    "/((?!api|_next/static|_next/image|favicon.ico|darkmode|login|register).*)",
  ],
};
