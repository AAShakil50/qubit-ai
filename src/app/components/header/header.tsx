import Link from "next/link";
import { Josefin_Sans } from "next/font/google";
import { AuthName, MobileMenu } from "./sections";

const josefin = Josefin_Sans({ subsets: ["latin"] });

async function getUser() {
  return { name: "John Doe", fav_color: "blue" };
}

export const Header = async () => {
  return (
    <div
      className={`${josefin.className} bg-white shadow-lg flex flex-row justify-between items-center w-full`}
    >
      <h1 className="text-3xl my-8 ml-8 mr-4 font-bold tracking-widest">
        <Link href="/">Qubit-AI</Link>
      </h1>
      <div className="sm:hidden">
        <MobileMenu user={await getUser()} />
      </div>
      <ul className="sm:flex px-4 text-2xl hidden items-center">
        <li className="mx-4">
          <Link href="/">Home</Link>
        </li>
        <li className="mx-4">
          <Link href="/about">About</Link>
        </li>
        <li className="mx-4">
          <Link href="/help">Help</Link>
        </li>
        <AuthName user={await getUser()} />
      </ul>
    </div>
  );
};
