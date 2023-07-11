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
        const prepareData = context
            .state
            .collectionRelation[obj.firstAccessCode][obj.method][obj.collectionKey]
        const collectionName = prepareData.collectionName
        const condition =
            prepareData.where == null || obj.whereValue == null ? '' : [
                { key: prepareData.where, opt: obj.whereOperator, value: obj.whereValue }
            ]
        const order = [prepareData.order]
        readCollectionFB(collectionName
            , condition
            , order
            , (response) => {
                if (response.status == 'error') {
                    context.commit('updateErrorToastState', response)
                } else {
                    context.commit('getCollectionDataState',
                        {
                            response: response.data,
                            collectionName: prepareData.saveCollectionName,
                            collectionType: obj.collectionKey
                        })
                }
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
    backOneHistory(context) {
        router.go(-1);
    }
}