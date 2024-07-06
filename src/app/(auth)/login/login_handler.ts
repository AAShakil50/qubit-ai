import { app } from "@/app/lib/client";
import { getAuth, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import router from "next/navigation";

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

export const _login = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const pass = formData.get("password") as string;

    signInWithEmailAndPassword(getAuth(app), email, pass)
        .then((userCreds) => {
            registerToken(userCreds).then((success) => {
                if (success) router.redirect("/profile");
                else router.redirect("/login?error=true");
            });
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}