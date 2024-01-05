import { app } from '@/firebase/setup'
import { analytics, logEvent } from '@/firebase/analytics'
import {
    getAuth,
    setPersistence,
    browserSessionPersistence,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    verifyPasswordResetCode,
    confirmPasswordReset,
    sendPasswordResetEmail
} from "firebase/auth";
import { serverTimestamp } from "firebase/firestore";
import { sendMail } from '@/assets/js/util'

const auth = getAuth(app)

setPersistence(auth, browserSessionPersistence)

logEvent(analytics, "firebase-authorized" + serverTimestamp)

function handleSignInWithEmailAndPassword(email, password, callback) {
    // setPersistence(auth, browserSessionPersistence).then(() => {
    signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            callback({ 'uid': res.user.uid, 'displayName': res.user.displayName, 'emailAddress': res.user.email, 'myStatus': 'success' })
        })
        .catch((error) => {
            callback({ 'myStatus': 'error', 'uid': null, ...error })
        })
}

function handleCreateUserWithEmailAndPassword(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

async function handleSignOut(callback) {
    try {
        await signOut(auth)
        callback({ 'code': 'signOut/success', 'myStatus': 'success' })
    } catch (error) {
        callback({ 'myStatus': 'error', ...error })
    }
}

function handleResetPassword(actionCode, password, callback) {
    verifyPasswordResetCode(auth, actionCode).then((email) => {
        const accountEmail = email;
        confirmPasswordReset(auth, actionCode, password).then(() => {
            // send success message to user email
            sendMail(accountEmail, 'アカウントのパスワード変更', 'パスワードの再設定をしました。')
            handleSignInWithEmailAndPassword(accountEmail, password, callback);
        }).catch((error) => {
            callback({ 'myStatus': 'error', ...error })
        })
    }).catch((error) => {
        callback({ 'myStatus': 'error', ...error })
    })
}

function handleVerifyPasswordResetCode(actionCode, callback) {
    verifyPasswordResetCode(auth, actionCode).then((email) => {
        callback({ 'myStatus': 'success' })
    }).catch((error) => {
        callback({ 'myStatus': 'error', ...error })
    })
}

function handleSendPasswordResetEmail(email, callback) {
    sendPasswordResetEmail(auth, email).then(() => {
        callback({ 'myStatus': 'success', 'extraMsg': `${email}にパスワードリセットするためのURLを送りました。` })
    }).catch((error) => {
        callback({ 'myStatus': 'error', 'extraMsg': `${email}のユーザーアカウントがありません。`, ...error })
    })
}

export {
    auth,
    handleSignInWithEmailAndPassword,
    handleCreateUserWithEmailAndPassword,
    handleSignOut,
    handleResetPassword,
    handleSendPasswordResetEmail,
    handleVerifyPasswordResetCode
}