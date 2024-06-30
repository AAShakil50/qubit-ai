import { josefin } from "./_utils/fonts";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div> */}
      <div className={`${josefin.className} animate-bounce text-6xl`}>Loading ...</div>
    </div>
  );
}
