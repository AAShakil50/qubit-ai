import { josefin, kanit } from "@/app/_utils/fonts";
import Link from "next/link";
import { LoginFormFields } from "./edit_area";

export default function Login({ searchParams }: { searchParams: { required: string | undefined, error: string | undefined } }) {
  const { required, error } = searchParams;

  return (
    <form
      className={`flex flex-grow flex-col justify-center items-center`}
    >
      <div className={`${josefin.className} text-7xl font-bold`}>Login</div>
      <div className={`${kanit.className} my-8 mx-8 flex flex-col`}>
        {required && (
          <div
            className={`${kanit.className} my-2 p-4 bg-red-500 rounded-md text-white text-center text-2xl font-bold`}
          >
            Authentication Required
          </div>
        )}
        {error && (
          <div
            className={`${kanit.className} my-2 p-4 bg-red-500 rounded-md text-white text-center text-xl font-bold`}
          >
            Error! Try Again or Contact <Link className="underline" href="/help">Support</Link>
          </div>
        )}
        <LoginFormFields />
      </div>
    </form>
  );
}
