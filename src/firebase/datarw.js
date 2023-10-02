import { app } from '@/firebase/setup'
import { auth } from '@/firebase/auth'
import { analytics, logEvent } from '@/firebase/analytics'
import {
    getFirestore,
    collection,
    query,
    where,
    orderBy,
    getDocs,
    doc,
    setDoc,
    getDoc,
    addDoc,
    serverTimestamp,
    updateDoc
} from "firebase/firestore";

const db = getFirestore(app);

logEvent(analytics, "make-db-connection");

async function readSingleDocument(collectionName, docId, callback) {
    try {
        const docRef = doc(db, collectionName, docId);
        const docSnap = await getDoc(docRef);
        callback({ 'data': docSnap.data(), 'myStatus': 'success' })
    } catch (error) {
        callback({ ...error, 'myStatus': 'error' })
    }
}

async function addNewDocumentByCustomDocId(collectionName, docId, data, callback) {
    try {
        const cityRef = doc(db, collectionName, docId)
        await setDoc(cityRef, data, { merge: true })
        callback({ 'myStatus': 'success' })
    } catch (error) {
        callback({ ...error, 'myStatus': 'error' })
    }
}

async function readCollectionFB(collectionName, condition, order, callback) {

    try {
        let responseArr = [];
        let whereList = generateWhereList(condition)
        let orderList = generateOrderList(order)
        const q = query(collection(db, collectionName), ...whereList, ...orderList);
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            responseArr.push({ ...doc.data(), 'docId': doc.id })
        });

        callback({ 'data': responseArr, 'myStatus': 'success' })
    } catch (error) {
        console.error(error)
        callback({ ...error, 'myStatus': 'error' })
    }
}

async function addNewDocumentFB(data, callback, collectionName = 'user_answers') {
    try {
        const docRef = await addDoc(collection(db, collectionName), {
            ...data,
            'uid': auth.currentUser.uid,
            'uploaded-time': serverTimestamp()
        });

        callback({ 'data': docRef.id, 'myStatus': 'success' })
    } catch (error) {
        callback({ ...error, 'myStatus': 'error' })
    }
}

async function updateExistingDocumentFB(data, collectionName, docId, callback) {
    try {
        // readSingleDocument(collectionName, docId, ((response) => {
        addNewDocumentByCustomDocId(collectionName, docId, data, callback)
        // if (response.data) {
        //     updateDoc(doc(db, collectionName, docId), data).then((res) => {
        //         callback({ ...data, 'myStatus': 'success' })
        //     }).catch((error) => {
        //         callback({ ...error, 'myStatus': 'error' })
        //     })
        // } else {
        //     addNewDocumentFB(data, callback, collectionName)
        // }
        // }))
    } catch (error) {
        callback({ ...error, 'myStatus': 'error' })
    }
}

function generateOrderList(data) {
    let list = []
    for (let i = 0; i < data.length; i++) {
        if (data[i])
            list.push(orderBy(data[i].name, data[i].type))
    }
    return list
}

function generateWhereList(data) {
    let list = []
    for (let i = 0; i < data.length; i++) {
        if (data[i])
            list.push(where(data[i].key, data[i].opt, data[i].value))
    }
    return list
}

export {
    readCollectionFB,
    readSingleDocument,
    addNewDocumentFB,
    updateExistingDocumentFB
}