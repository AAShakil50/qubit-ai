import Image from "next/image";
import { Josefin_Sans } from "next/font/google";
import { Kanit } from "next/font/google";

const josefin = Josefin_Sans({ subsets: ["latin"] });
const kanit = Kanit({ subsets: ["latin"], weight: ["400", "500", "600"] });

async function getUser() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return { name: "John Doe", fav_color: "blue" };
}

export default async function App() {
  return await getUser() && (
    <>
      <div className="flex justify-center flex-col flex-grow m-8 items-center">
        <Image src="/schedule.png" alt="" width="400" height="400" />
        <div className="flex flex-col my-8 mx-8 sm:w-1/2 text-center">
          <div className={`${josefin.className} text-5xl sm:text-6xl`}>
            Qubit-AI brings Magic
          </div>
          <div className={`${kanit.className} text-xl mt-8 text-slate-600`}>
            A very personal assistant who takes care of your valuable schedules
            and appointments. Qubit-AI is a calendar scheduling system that
            helps you manage your time efficiently.
          </div>
        </div>
      </div>
    </>
  );
}
