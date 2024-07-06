"use server"

import { getAuth } from 'firebase-admin/auth'
import { getFirebase } from '../firebase/server_admin'

export async function verifyUserBySessionToken(token: string) {
    const firebase = getFirebase()
    try {
        const claim = await getAuth(firebase).verifySessionCookie(token, true)
        if (claim) {
            return true
        }
    } catch (e) {
        return false
    }
}