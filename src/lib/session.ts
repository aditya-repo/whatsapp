import "server-only"
import { SignJWT, jwtVerify } from 'jose'
import { SessionPayload } from "./definitions"
import { cookies } from "next/headers"

const secretkey = process.env.SESSION_SECRET
const encodedkey = new TextEncoder().encode(secretkey)

export async function encrypt(payload: SessionPayload) {
    const signed = new SignJWT(payload).setProtectedHeader({ alg: 'HS256' }).setIssuedAt().setExpirationTime('7d').sign(encodedkey)
    return signed
}

export async function decrypt(session: string | undefined = '') {
    try {
        const { payload } = await jwtVerify(session, encodedkey, { algorithms: ['HS256'] })
        return payload
    } catch (error) {
        console.log("Failed to verify session");

    }
}

export async function createSession(userId: string) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const session = await encrypt({ userId, expiresAt })
    const cookieStore = await cookies()

    cookieStore.set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/'
    })
}

export async function deleteSession(){
    const cookieStore = await cookies()
    cookieStore.delete('session')
}