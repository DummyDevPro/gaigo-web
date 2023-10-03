import {
    handleCreateUserWithEmailAndPassword,
    handleSignInWithEmailAndPassword,
    handleSignOut,
    handleResetPassword,
    handleSendPasswordResetEmail,
    handleVerifyPasswordResetCode
} from '@/firebase/auth'

import {
    readCollectionFB,
    addNewDocumentFB,
    updateExistingDocumentFB,
    readSingleDocument
} from '@/firebase/datarw'

import {
    handleFileUpload,
    handleFileDownloadListUp
} from '@/firebase/storage'

import router from '@/router'

export default {
    initializeApp(context) {
        context.commit('initializeAppState')
    },
    loginAction(context, { 'email': email, 'password': password }) {
        handleSignInWithEmailAndPassword(email, password, (response) => {
            context.commit('loginActionState', response)
        })
    },
    logoutAction(context) {
        handleSignOut((response) => {
            console.log(response);
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
        let condition = '';
        if (prepareData.where != null && obj.where) {
            condition = [];
            for (let i = 0; i < obj.where.length; i++) {
                condition.push(
                    { key: prepareData.where[i], opt: obj.where[i].whereOperator, value: obj.where[i].whereValue }
                )
            }
        }

        const order = [prepareData.order]

        if (obj.docId) {
            readSingleDocument(
                collectionName,
                obj.docId,
                ((response) => {
                    if (response.myStatus == 'error') {
                        // context.commit('updateErrorToastState', response)
                    } else {
                        context.commit('getCollectionDataState',
                            {
                                response: response.data,
                                collectionName: prepareData.saveCollectionName,
                                collectionType: obj.collectionKey
                            })
                    }
                })
            )
        } else {
            readCollectionFB(collectionName
                , condition
                , order
                , (response) => {
                    if (response.myStatus == 'error') {
                        // context.commit('updateErrorToastState', response)
                    } else {
                        context.commit('getCollectionDataState',
                            {
                                response: response.data,
                                collectionName: prepareData.saveCollectionName,
                                collectionType: obj.collectionKey
                            })
                    }
                })
        }
    },
    addNewDocument(context, obj) {
        addNewDocumentFB(obj, (response) => {
            if (response != null) {
                router.replace({
                    name: 'user-exam-history'
                })
            }
        })
    },
    backOneHistory(context) {
        router.go(-1);
    },
    createNewAccountWithEmailAndPassword() {
    },
    resetPassword(context, { oobCode: oobCode, password: password }) {
        handleResetPassword(oobCode, password, (response) => {
            context.commit('loginActionState', response)
            router.push({ path: '/' })
            router.removeRoute('reset-password')
        })
    },
    renewPasswordByMail(context, { email: email }) {
        handleSendPasswordResetEmail(email, (response) => {
            context.commit('shortMsg', { pageId: 'renewPass', ...response })
        })
    },
    resetPasswordLinkValidCheck(context, { oobCode: oobCode }) {
        handleVerifyPasswordResetCode(oobCode, (response) => {
            context.commit('shortMsg', { ...response, pageId: 'resetPass' })
        })
    },
    getProfileImageDataUrl(context) {
        context.commit('getProfileImageDataUrlState')
    },
    fileUpload(context, { file: file, fileType: fileType, saveFileFolderName: saveFileFolderName, docId: docId }) {

        // update firebase storage/images
        handleFileUpload(
            file,
            fileType,
            saveFileFolderName,
            (response) => {
                if (response.myStatus === 'success') {

                    // save to firebase/firestore (collection : accounts)
                    if (saveFileFolderName === 'profile') {
                        updateExistingDocumentFB(
                            {
                                profileImageUrl: response.fileUrl,
                            },
                            'accounts',
                            docId,
                            (response) => {

                                // TODO: Next time
                                // get latest user profile information
                                // context.dispatch('getCollectionData', {
                                //     firstAccessCode: 'profile',
                                //     method: 'get',
                                //     collectionKey: 'account',
                                //     where: [
                                //         {
                                //             whereValue: uid,
                                //             whereOperator: '=='
                                //         }
                                //     ],
                                // })
                            })

                        // update state
                        context
                            .commit('updateAndSaveProfileImageUrlAsDataUrl',
                                { file: file, key: 'profile-image' })
                    }

                }
            })
    },
    getAllImages(context) {
        handleFileDownloadListUp((response) => {
            if (response.myStatus === 'success') {
                context.commit('handleFileDownloadListUpState', response)
            }
        })
    }
}