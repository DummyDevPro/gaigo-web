import { fileToDataUrl } from '@/assets/js/fileRWUtils'
import { loadLocalStorage, saveToLocalStorage } from '@/bstorage'

export default {
    initializeAppState: (state) => {
        state.userInfo.uid = loadLocalStorage('uid')
        state.userInfo.displayName = loadLocalStorage('displayName')
        state.userInfo.emailAddress = loadLocalStorage('emailAddress')
    },
    loginActionState: (state, response) => {
        if (response.uid != null) {
            state.userInfo.uid = response.uid
            state.userInfo.displayName = response.displayName
            state.userInfo.emailAddress = response.emailAddress

            // state.loginModalState = true
        } else {
            state.userInfo.uid = null
            state.userInfo.displayName = null
            state.userInfo.emailAddress = null

            // state.loginModalMsg = `Login Error : (${response.code})`

            // state.loginModalState = false
        }

        saveToLocalStorage(state.userInfo)
    },
    logoutActionState: (state) => {
        state.userInfo.uid = null
        state.userInfo.displayName = null
        state.userInfo.emailAddress = null

        state.logoutModalState = true
        saveToLocalStorage(state.userInfo)
    },
    updateLoginModalState: (state) => {
        state.loginModalState = null
    },
    updateLogoutModalState: (state) => {
        state.logoutModalState = null
    },
    getCollectionDataState: (state, obj) => {
        state.collectionData[state.collectionDataType[obj.collectionType]][obj.collectionName] = obj.response
    },
    addNewDocumentState: (state, res) => {
    },
    shortMsg: (state, obj) => {
        state.authMsg[obj.pageId][obj.myStatus]['msg'] = obj.code ? obj.code : null
        state.authMsg[obj.pageId][obj.myStatus]['time'] = Date.now()
    },
    getProfileImageDataUrlState: (state) => {
        state.profile.profileImageUrl = loadLocalStorage('profile-image')
    },
    updateAndSaveProfileImageUrlAsDataUrl: (state, obj) => {
        fileToDataUrl(obj.file, (dataUrl) => {
            let saveObj = {}
            saveObj[obj.key] = dataUrl
            saveToLocalStorage(saveObj)
            state.profile.profileImageUrl = dataUrl
        })
    },
    handleFileDownloadListUpState: (state, obj) => {
        state.profile.allImages = obj.allImages
    },
    alertMsg: (state, obj) => {
        state.alertMsg.status = obj.myStatus
        state.alertMsg.message = obj.code ? obj.code : null
        state.alertMsg.time = Date.now()
        state.alertMsg.extraMsg = obj.extraMsg ? obj.extraMsg : null
    }
}