import { Metadata } from "next";
import { Kanit } from "next/font/google";

const kanit = Kanit({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata: Metadata = {
  title: "Qubit-AI | Page not found",
}

export default function NotFound() {
  return (
    <div className={`${kanit.className} flex flex-col items-center justify-center h-screen`}>
      <h1 className="text-9xl font-bold">404</h1>
      <h2 className="text-4xl font-bold text-slate-800">Page not found</h2>
      <div className="text-2xl mt-8 text-slate-500">Try using the Search Feature or Contact Help.</div>
    </div>
  );
}