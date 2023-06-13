import { app } from '@/firebase/setup'
import { analytics, logEvent } from '@/firebase/analytics'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { serverTimestamp } from "firebase/firestore";

const auth = getAuth(app)

logEvent(analytics, "firebase-authorized" + serverTimestamp)

async function signInWithEmailAndPasswordFB(email, password, callback) {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        callback({ 'uid': res.user.uid, 'displayName': res.user.displayName, 'photoURL': res.user.photoURL })
    } catch (error) {
        callback({ 'uid': null, ...error })
    }
}

async function signOutFB(callback) {
    try {
        await signOut(auth)
        callback({ 'code': 'signOut/success' })
    } catch (error) {
        callback({ ...error })
    }
}

export {
    auth,
    signInWithEmailAndPasswordFB,
    signOutFB
}