// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth"
import { getAnalytics, logEvent } from "firebase/analytics";
import { collection, query, where, orderBy, getDocs, addDoc, serverTimestamp } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBb02u8O0xSzGQynNd_-TzVPp1EnD-VRWo",
    authDomain: "gaigo-6a1df.firebaseapp.com",
    projectId: "gaigo-6a1df",
    storageBucket: "gaigo-6a1df.appspot.com",
    messagingSenderId: "20940403760",
    appId: "1:20940403760:web:8c2f3e815afc343bdb29f5",
    measurementId: "G-C2FH3SXCY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

logEvent(analytics, "firebase-initialize");

const auth = getAuth(app);

logEvent(analytics, "firebase-authorized");

const db = getFirestore(app);

logEvent(analytics, "make-db-connection");

async function loginActionFB(email, password, callback) {
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            // Signed in pass
            const user = userCredential.user;

            console.log(user.getIdToken());

            // updateProfile(auth.currentUser, {
            //     displayName: "Taw Tar",
            //     photoURL: "../src/assets/img/hmm.jpg"
            // })

            callback(
                {
                    'uid': user.uid,
                    'displayName': user.displayName == null ? 'Anonymous' : user.displayName
                }
            );
        })
        .catch((error) => {
            // Signed in error
            const errorCode = error.code;
            const errorMessage = errorCode.split('/').length > 1 ? errorCode.split('/')[1] : errorCode
            callback(
                {
                    'uid': null,
                    'errorMessage': errorMessage
                }
            );
        });
}

async function logoutActionFB() {
    try {
        const res = await signOut(auth)
        console.log(res);
    } catch (error) {
        console.log(error)
    }
}

async function readDataFB(collectionName, condition, orderName) {
    let responseArr = [];
    try {
        const q = query(collection(db, collectionName), condition == '' ? '' : equalWhere(condition.one, condition.two), orderBy(orderName));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let obj = {
                'docId': doc.id,
                ...doc.data()
            }
            responseArr.push(obj)
        });
    } catch (e) {
        console.log(e)
    }
    return responseArr;
}

async function addNewDocumentFB(data, collectionName = 'user_answers_collection_v1') {
    console.log(auth.currentUser.uid);
    try {
        const docRef = await addDoc(collection(db, collectionName), {
            'uid': auth.currentUser.uid,
            'uploaded-time': serverTimestamp(),
            ...data
        });

        return docRef.id
    } catch (error) {
        console.log(error)
        return null
    }
}

function equalWhere(one, two) {
    return where(one, "==", two);
}

export {
    logEvent,
    loginActionFB,
    readDataFB,
    logoutActionFB,
    addNewDocumentFB
}