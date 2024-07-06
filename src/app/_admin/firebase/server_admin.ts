/* eslint-disable @typescript-eslint/no-var-requires */
"use server";

import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import path from "path";

export const getFirebase = () => {
  console.log(path.join("/qubit-ai-firebase-adminsdk.json"));
  const app = getApps().find((app) => app.name === "server_firebase");
  return (
    app ??
    initializeApp(
      {
        credential: cert(require("./qubit-ai-firebase-adminsdk.json")),
        databaseURL: "https://qubit-ai.firebaseio.com",
      },
      "server_firebase"
    )
  );
};

const verifyUser = async (token: string) => {
  return (await getAuth(getFirebase()).verifyIdToken(token))?.uid ?? null;
};

// validate user by session token
export async function validateUser(token: string) {
  try {
    const claim = await getAuth(getFirebase()).verifySessionCookie(token, true);
    if (claim) {
      return claim;
    }
  } catch (e) {
    return null;
  }
};

export async function loginUser(idToken: string): Promise<string | null> {
  try {
    const user = await verifyUser(idToken);
    if (!user) return null;

    const session = await getAuth(getFirebase()).createSessionCookie(idToken, {
      expiresIn: 60 * 60 * 24 * 5 * 1000,
    });

    return session;
  } catch (e) {
    console.error("Error: ", e);
  }

  return null;
}
