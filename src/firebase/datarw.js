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
    serverTimestamp
} from "firebase/firestore";
import router from '@/router';

const db = getFirestore(app);

logEvent(analytics, "make-db-connection");

async function readSingleDocument(collectionName, docId, callback) {
    if (!auth.currentUser) {
        callback({ 'code': 'Access Denined!', 'myStatus': 'error' })
        return;
    }

    try {
        const docRef = doc(db, collectionName, docId);
        const docSnap = await getDoc(docRef);
        callback({ 'data': docSnap.data(), 'myStatus': 'success' })
    } catch (error) {
        callback({ ...error, 'myStatus': 'error' })
    }
}

async function addNewDocumentByCustomDocId(collectionName, docId, data, callback) {
    if (!auth.currentUser) {
        callback({ 'code': 'Access Denined!', 'myStatus': 'error' })
        return;
    }

    try {
        const cityRef = doc(db, collectionName, docId)
        await setDoc(cityRef, data, { merge: true })
        callback({ 'myStatus': 'success' })
    } catch (error) {
        callback({ ...error, 'myStatus': 'error' })
    }
}

async function readCollectionFB(collectionName, condition, order, callback) {
    if (!auth.currentUser && router.currentRoute.value.meta.requiresAuth) {
        callback({ 'code': 'Access Denined!', 'myStatus': 'error' })
        return;
    }

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
        callback({ ...error, 'myStatus': 'error' })
    }
}

async function addNewDocumentFB(data, callback) {
    if (!auth.currentUser) {
        callback({ 'code': 'Access Denined!', 'myStatus': 'error' })
        return;
    }

    try {
        const dataObj = data.requireUserInfo ? {
            ...data.dataObj,
            'uid': auth.currentUser.uid,
            'uploaded-time': serverTimestamp()
        } : { ...data.dataObj }
        console.log(dataObj);
        console.log(data);
        const docRef = await addDoc(collection(db, data.collectionName), dataObj);

        callback({ 'data': docRef.id, 'myStatus': 'success' })
    } catch (error) {
        callback({ ...error, 'myStatus': 'error' })
    }
}

async function updateExistingDocumentFB(data, collectionName, docId, callback) {
    if (!auth.currentUser) {
        callback({ 'code': 'Access Denined!', 'myStatus': 'error' })
        return;
    }

    try {
        addNewDocumentByCustomDocId(collectionName, docId, data, callback)
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