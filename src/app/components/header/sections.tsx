"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { getAuth } from "firebase/auth";
import { app, getUserInfo } from "@/app/lib/client";

export function AuthName({
  user,
}: {
  user: { name: string; fav_color: string };
}) {
  return (
    <li className="mx-4 my-4">
      <Link
        href={user ? "/profile" : "/login"}
        className="flex items-center gap-2"
      >
        {user && (
          <Image
            src="/gamer.png"
            alt=""
            width="20"
            height="20"
            className="w-7 h-7"
          />
        )}
        {user ? user.name : "Login"}
      </Link>
    </li>
  );
}

export function MobileMenu({
  user,
}: {
  user: { name: string; fav_color: string };
}) {
  const [menu, setMenu] = useState(false);

  // disable scroll when menu is open
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // cleanup
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <li className="mx-4">
      <button className="mx-8">
        <IconMenu2 width={32} height={32} onClick={() => setMenu(true)} />
        {menu && (
          <div className="fixed w-screen h-screen bg-white left-0 top-0 overflow-y-scroll z-10">
            <div className="absolute right-8 top-8">
              <IconX
                width={38}
                height={38}
                stroke={2}
                onClick={() => setMenu(false)}
              />
            </div>
            <ul className="flex flex-col items-center justify-center h-screen text-4xl font-bold">
              <li className="mx-4 my-4">
                <Link href="/">Home</Link>
              </li>
              <li className="mx-4 my-4">
                <Link href="/about">About</Link>
              </li>
              <li className="mx-4 my-4">
                <Link href="/help">Help</Link>
              </li>
              <AuthName user={user} />
            </ul>
          </div>
        )}
      </button>
    </li>
  );
}
