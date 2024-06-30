"use client";

import { josefin, kanit } from "@/app/_utils/fonts";
import { getAuth } from "firebase/auth";
import { app, getUserInfo } from "../../lib/client";
import { useRouter } from "next/navigation";
import LabelInput from "@/app/components/label-input";
import React from "react";

type User = {
  name: string;
  fav_color: string;
};

async function logoutUser(): Promise<boolean> {
  const register = await fetch("/api/user/auth", {
    method: "DELETE",
  });

  if (!register.ok) return false;

  return true;
}

export default function Profile() {
  const router = useRouter();

  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const fetchUser = getAuth(app).onAuthStateChanged((u) => {
      if (u) getUserInfo(u).then((data) => setUser(data));
    });

    return () => {
      fetchUser();
    };
  }, []);

  const logout = () => {
    getAuth(app)
      .signOut()
      .then(() => {
        logoutUser().then((success) => {
          router.push("/");
        });
      })
      .catch((error) => {
        console.log("Error signing out", error);
      });
  };

  return (
    <div className="m-16 flex flex-col flex-grow justify-center items-center">
      <h2 className={`${josefin.className} my-4 text-6xl font-bold`}>
        Profile
      </h2>
      <div className={`${kanit.className} flex flex-col`}>
        <LabelInput
          label="Name"
          type="text"
          name="name"
          onChange={(e) => {
            setUser({ name: e.target.value, fav_color: user?.fav_color ?? "" });
          }}
          value={user?.name ?? ""}
        />
        <LabelInput
          label="Favourite Color"
          type="text"
          name="fav_color"
          value={user?.fav_color ?? ""}
          onChange={(e) => {
            setUser({ name: user?.name ?? "", fav_color: e.target.value });
          }}
        />
        <button
          className={`text-2xl font-bold bg-blue-400 px-8 py-4 my-4 mt-8 text-white w-full`}
          onClick={logout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
