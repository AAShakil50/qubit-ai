"use client";

import { josefin, kanit } from "@/app/_utils/fonts";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { IconMathGreater } from "@tabler/icons-react";
import LabelInput from "@/app/components/label-input";
import {
  UserCredential,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "@/app/lib/client";
import Link from "next/link";

async function registerToken(creds: UserCredential): Promise<boolean> {
  const token = await creds.user.getIdToken();
  if (!token) return false;

  const register = await fetch("/api/user/auth", {
    method: "PUT",
    body: JSON.stringify({ token: token }),
  });

  if (!register.ok) return false;

  return true;
}

export default function Login() {
  const router = useRouter();
  const params = useSearchParams();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const _login = async () =>
    signInWithEmailAndPassword(getAuth(app), email, pass)
      .then((userCreds) => {
        registerToken(userCreds).then((success) => {
          console.log("Success: ", success);
          if (success) router.push("/profile");
          else router.push("/login?error=1");
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  return (
    <form
      action={_login}
      className={`flex flex-grow flex-col justify-center items-center`}
    >
      <div className={`${josefin.className} text-7xl font-bold`}>Login</div>
      <div className={`${kanit.className} my-8 mx-8 flex flex-col`}>
        {params.get("required") && (
          <div
            className={`${kanit.className} my-2 p-4 bg-red-500 rounded-md text-white text-center text-2xl font-bold`}
          >
            Authentication Required
          </div>
        )}
        {params.get("error") && (
          <div
            className={`${kanit.className} my-2 p-4 bg-red-500 rounded-md text-white text-center text-xl font-bold`}
          >
            Error! Try Again or Contact <Link className="underline" href="/help">Support</Link>
          </div>
        )}
        <LabelInput
          label="Email"
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <LabelInput
          label="Password"
          type="password"
          name="password"
          onChange={(e) => setPass(e.target.value)}
        />
        <button
          type="submit"
          id="password"
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 bg-blue-400 w-full p-4 text-white text-3xl font-bold rounded-md cursor-pointer
          hover:bg-blue-500 transition-colors duration-300 ease-in-out flex justify-center items-center"
        >
          <IconMathGreater className="mr-4" stroke={4} width={30} height={30} />{" "}
          Login
        </button>
      </div>
    </form>
  );
}
