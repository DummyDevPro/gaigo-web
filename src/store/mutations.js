import { saveToLocalStorage, loadLocalStorage } from '@/bstorage'

export default {
    initializeAppState: (state) => {
        state.userInfo.uid = loadLocalStorage('uid')
        state.userInfo.displayName = loadLocalStorage('displayName')
    },
    loginActionState: (state, response) => {
        if (response.uid != null) {
            state.userInfo.uid = response.uid
            state.userInfo.displayName = response.displayName

            state.loginModalState = true
        } else {
            state.userInfo.uid = null
            state.userInfo.displayName = null
            state.loginModalMsg = `Login Error : (${response.code})`

            state.loginModalState = false
        }

        saveToLocalStorage(state.userInfo)
    },
    logoutActionState: (state) => {
        state.userInfo.uid = null
        state.userInfo.displayName = null

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
    updateErrorToastState: (state, error) => {
        console.log(error);
        state.errorToast = error
    }
}