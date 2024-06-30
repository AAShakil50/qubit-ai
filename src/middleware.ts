import { NextResponse, type NextRequest } from "next/server";
import { redis } from "./app/_admin/redis/redis";

function urlStartsWith(request: NextRequest, path: string) {
  return request.nextUrl.pathname.startsWith(path);
}

// Check in the redis if the session was registered
async function checkSessionExists(session: string): Promise<boolean> {
  return (await redis.get(session)) != null;
}

export function middleware(request: NextRequest) {
  console.log("Middleware: ", request.nextUrl.pathname);
  // Authenticity check on protected routes
  if (
    urlStartsWith(request, "/profile") ||
    urlStartsWith(request, "/api/user/auth")
  ) {
    const session = request.cookies.get("Session")?.value;
    if (!session) {
      // Redirect to login page if Session not available
      console.log("Session not available");
      return NextResponse.redirect("/login?required=true");
    } else {
      if (!checkSessionExists(session)) {
        // Redirect to login page if Session does not exist in record
        console.log("Session not found in record");
        return NextResponse.redirect("/login?error=1");
      }else{
        // Continue to the next middleware
        console.log("Session found in record");
        return NextResponse.next();
      }
    }
  }
  if (request.nextUrl.pathname.startsWith("/api/user/auth")) {
  }
}

export const config = {
  matcher: ['/profile', '/api/']
};
