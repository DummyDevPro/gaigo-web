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
    addDoc,
    serverTimestamp
} from "firebase/firestore";

const db = getFirestore(app);

logEvent(analytics, "make-db-connection");

async function readCollectionFB(collectionName, condition, order, callback) {

    try {
        let responseArr = [];
        let whereList = generateWhereList(condition)
        let orderList = generateOrderList(order)
        const q = query(collection(db, collectionName), ...whereList, ...orderList);
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            responseArr.push({ 'docId': doc.id, ...doc.data() })
        });

        callback({ 'data': responseArr, 'status': 'success' })
    } catch (error) {
        console.log(error);
        callback({ ...error, 'status': 'error' })
    }
}

async function addNewDocumentFB(data, callback, collectionName = 'user_answers_collection_v1') {
    try {
        const docRef = await addDoc(collection(db, collectionName), {
            'uid': auth.currentUser.uid,
            'uploaded-time': serverTimestamp(),
            ...data
        });

        callback({ 'data': docRef.id, 'status': 'success' })
    } catch (error) {
        console.log(error);
        callback({ ...error, 'status': 'error' })
    }
}

function generateOrderList(data) {
    let list = []
    for (let i = 0; i < data.length; i++) {
        list.push(orderBy(data[i].name, data[i].type))
    }
    return list
}

function generateWhereList(data) {
    let list = []
    for (let i = 0; i < data.length; i++) {
        list.push(where(data[i].key, data[i].opt, data[i].value))
    }
    return list
}

export {
    readCollectionFB,
    addNewDocumentFB
}