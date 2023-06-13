import { signInWithEmailAndPasswordFB, signOutFB } from '@/firebase/auth'
import { readCollectionFB, addNewDocumentFB } from '@/firebase/datarw'

import router from '@/router'

export default {
    initializeApp(context) {
        context.commit('initializeAppState')
    },
    loginAction(context, { 'email': email, 'password': password }) {
        signInWithEmailAndPasswordFB(email, password, (response) => {
            context.commit('loginActionState', response)
        })
    },
    logoutAction(context) {
        signOutFB((res) => {
            console.log(res);
        });
        context.commit('logoutActionState')
    },
    updateLoginModal(context) {
        context.commit('updateLoginModalState')
    },
    updateLogoutModal(context) {
        context.commit('updateLogoutModalState')
    },
    getCollectionData(context, obj) {
        const collectionName = context.state.collectionNameMap[obj.collectionName][obj.collectionType]
        const condition = obj.where == null ? '' : { 'one': context.state.collectionNameMap[obj.collectionName][obj.where.referenceId], 'two': obj.where.chapterId }
        const orderCol = context.state.orderMap[obj.collectionName][obj.collectionType]

        readCollectionFB(collectionName
            , condition
            , orderCol
            , (response) => {
                context.commit('getCollectionDataState',
                    {
                        response: response.data,
                        collectionName: obj.collectionName,
                        collectionType: obj.collectionType
                    })
            })
    },
    addNewDocument(context, obj) {
        addNewDocumentFB(obj, (res) => {
            if (res != null) {
                router.replace({
                    name: 'user-profile'
                })
            }
        })
    },
}