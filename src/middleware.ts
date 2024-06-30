import { NextResponse, type NextRequest } from "next/server";
import { validateUser } from "@/app/_firebase/server_admin";

function urlStartsWith(request: NextRequest, path: string) {
  return request.nextUrl.pathname.startsWith(path);
}

export function middleware(request: NextRequest) {
  console.log("Middleware: ", request.nextUrl.pathname);
  // Authenticity check on protected routes
  // if (
  //   urlStartsWith(request, "/profile") ||
  //   urlStartsWith(request, "/api/user/auth")
  // ) {
  //   const session = request.cookies.get("Session")?.value;
  //   if (!session) {
  //     // Redirect to login page if Session not available
  //     return NextResponse.redirect("/login?required=true");
  //   } else {
  //     if (!validateUser(session)) {
  //       return NextResponse.redirect("/login?error=1");
  //     }
  //   }
  // }
  if (request.nextUrl.pathname.startsWith("/api/user/auth")) {
  }
}

export const config = {
  matcher: ['/profile', '/api/']
};
