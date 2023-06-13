import { app } from '@/firebase/setup'
import { auth } from '@/firebase/auth'
import { analytics,logEvent } from '@/firebase/analytics'
import {
    getFirestore,
    collection,
    query,
    where,
    orderBy,
    getDocs,
    addDoc,
    serverTimestamp
} from "firebase/firestore";

const db = getFirestore(app);

logEvent(analytics, "make-db-connection");

async function readCollectionFB(collectionName, condition, orderName, callback) {

    try {
        let responseArr = [];
        const q = query(collection(db, collectionName),
            condition == '' ? '' : equalWhere(condition.one, condition.two),
            orderBy(orderName));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            responseArr.push({ 'docId': doc.id, ...doc.data() })
        });

        callback({ 'data': responseArr })
    } catch (error) {
        callback({ ...error })
    }
}

async function addNewDocumentFB(data, callback, collectionName = 'user_answers_collection_v1') {
    try {
        const docRef = await addDoc(collection(db, collectionName), {
            'uid': auth.currentUser.uid,
            'uploaded-time': serverTimestamp(),
            ...data
        });

        callback({ 'data': docRef.id })
    } catch (error) {
        callback({ ...error })
    }
}

function equalWhere(one, two) {
    return where(one, "==", two);
}

export {
    readCollectionFB,
    addNewDocumentFB
}