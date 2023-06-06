import { logEvent, loginActionFB, readDataFB, logoutActionFB, addNewDocumentFB } from '@/firebase'
import { createStore } from 'vuex'
import { saveToLocalStorage, loadLocalStorage } from '@/bstorage'
import router from '@/router'

export default createStore({
  state: {
    userRole: 0, // 0 : everyone, 1 : member, 2 : admin
    userInfo: {
      'uid': null,
      'displayName': null,
      'photoUrl': null,
    },
    loginModalMsg: '',
    loginModalState: null,
    logoutModalState: null,
    collectionData: {
      'chapterData': {},
      'questionData': {},
      'answerData': {}
    },
    collectionNameMap: {
      'all': {
        'Answer': 'user_answers_collection',
        'loginUserId': 'uid'
      },
      'java-bronze': {
        'Chapter': 'java_bronze_overview_collection',
        'Question': 'questions_collection',
        'ReferenceId': 'chapter-code-id'
      }
    },
    orderMap: {
      'java-bronze': {
        'Chapter': 'chapter-title',
        'Question': 'id'
      },
      'all': {
        'Answer': 'uploaded-time'
      }
    },
    collectionDataType: {
      'Chapter': 'chapterData',
      'Question': 'questionData',
      'Answer': 'answerData'
    }
  },
  getters: {
    acquireUserInfo: state => {
      return state.userInfo
    },
    acquireUserID: state => {
      return state.userInfo.uid
    },
    loginModalState: state => {
      return state.loginModalState
    },
    logoutModalState: state => {
      return state.logoutModalState
    },
    acquireOneChapterData: state => obj => {
      console.log(obj);
      console.log(state.collectionData['chapterData'][obj.questionName]);
    },
    acquireChapterData: state => collectionName => {
      return state.collectionData['chapterData'][collectionName]
    },
    acquireQuestionsData: state => collectionName => {
      return state.collectionData['questionData'][collectionName]
    },
    acquireAnswersData: state => collectionName => {
      return state.collectionData['answerData'][collectionName]
    }
  },
  mutations: {
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
        state.loginModalMsg = `Login Error(${response.errorMessage})`

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
    }
  },
  actions: {
    initializeApp(context) {
      context.commit('initializeAppState')
    },
    loginAction(context, { 'email': email, 'password': password }) {
      loginActionFB(email, password, (response) => {
        context.commit('loginActionState', response)
      })
    },
    logoutAction(context) {
      logoutActionFB();
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

      readDataFB(collectionName
        , condition
        , orderCol)
        .then((response) => {
          context.commit('getCollectionDataState',
            {
              response: response,
              collectionName: obj.collectionName,
              collectionType: obj.collectionType
            })
        })
    },
    addNewDocument(context, obj) {
      addNewDocumentFB(obj).then((res) => {
        if (res != null) {
          router.replace({
            name: 'user-profile'
          })
        }
      }).catch((error) => {
        console.log(error)
      })
    },
  },
  modules: {
  }
})
