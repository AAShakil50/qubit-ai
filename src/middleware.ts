import { NextResponse, type NextRequest } from "next/server";

// ! Only using for first-level authorization
export async function middleware(request: NextRequest) {
 
}

// Middleware configuration
export const config = {
  matcher: ["/profile", "/api/"],
};
