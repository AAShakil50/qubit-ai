import "server-only";

import { loginUser } from "@/app/_admin/firebase/server_admin";
// import { getUser } from "@/app/_firebase/server_admin";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { redis } from "@/app/_admin/redis/redis";

// export async function GET(request: Request, response: Response) {
//   console.log("GET /api/user/auth");
//   const token = cookies().get("ID-Token")?.value;
//   if (token) {
//     const user = await getUser(token);
//     if (user) {
//       console.log("But for how long? ", user);
//       return Response.json({ name: user.name });
//     }
//   }
//   return Response.json({ message: "User not found" });
// }

export async function POST(request: Request, response: Response) {
  return Response.error();
}

// Handle User Login
export async function PUT(request: Request, response: Response) {
  const token = await request.json();
  if (token.token) {
    const session = await loginUser(token.token);
    if (!session) {
      redirect("/login");
    } else {
      cookies().set("Session", session, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 5,
      });
      await redis.set(session, 1, "EX", 60 * 60 * 24 * 5)
      return Response.json({ message: "Session created" }, { status: 200 });
    }
  } else {
    return Response.json({ message: "Token required" }, { status: 400 });
  }
}

// Handle User Logout
export async function DELETE(request: Request, response: Response) {
  cookies().set("Session", "", {
    httpOnly: true,
    maxAge: 0,
  });
  return Response.json({ message: "Session deleted" }, { status: 200 });
}