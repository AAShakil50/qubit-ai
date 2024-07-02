import { NextResponse, type NextRequest } from "next/server";

// Check if the URL starts with the given path
function urlStartsWith(request: NextRequest, path: string) {
  return request.nextUrl.pathname.startsWith(path);
}

// Check in the redis if the session was registered
async function fetchSession(session: string): Promise<boolean> {
  const session_request = await fetch("http://localhost:3000/api/user/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: session }),
  });

  if (session_request.status === 200) return true;
  return false;
}

// ! Only using for first-level authorization
export async function middleware(request: NextRequest) {
  console.log("Middleware: ", request.nextUrl.pathname);
  // Authenticity check on protected routes
  if (
    urlStartsWith(request, "/profile") ||
    urlStartsWith(request, "/api/user/auth")
  ) {
    const session = request.cookies.get("Session")?.value;

    if (session) {
      if (await fetchSession(session)) return NextResponse.next();
      else return NextResponse.redirect(new URL("/login?required=1", request.url));
    } else {
      return NextResponse.redirect(new URL("/login?error=1", request.url));
    }
  }
}

// todo Add more configurations to the middleware
// Middleware configuration
export const config = {
  matcher: ["/profile", "/api/"],
};
