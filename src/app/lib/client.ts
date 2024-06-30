import { getApps, initializeApp } from "firebase/app";
import { User, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";

export const app =
  getApps().length > 0
    ? getApps()[0]
    : initializeApp({
        apiKey: "AIzaSyDrWI_Faht4RDBvq9IbiIO0PfeRNeaYgjk",
        authDomain: "qubit-ai.firebaseapp.com",
        projectId: "qubit-ai",
        storageBucket: "qubit-ai.appspot.com",
        messagingSenderId: "176210217443",
        appId: "1:176210217443:web:011628c877819c843ef8d6",
        measurementId: "G-BGEPT3VL8E",
      });

export const firestore = getFirestore(app);

export const authUser = async (
  email: string,
  password: string
): Promise<string | null> => {
  const user = await signInWithEmailAndPassword(getAuth(app), email, password);
  if (user) return user.user.getIdToken();

  return null;
};

export const getUserInfo = async (user: User): Promise<any> => {
  const token = await user.getIdToken();
  const response = await fetch("/api/user/auth", {
    headers: {
      "ID-Token": token,
    },
  });
  if (response.ok) {
    return response.json();
  }
};
