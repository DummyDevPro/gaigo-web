export default {
    acquireUserInfo: state => {
        return state.userInfo
    },
    acquireUserID: state => {
        return state.userInfo.uid
    },
    loginModalState: state => {
        return state.loginModalState
    },
    loginModalMsgState: state => {
        return state.loginModalMsg
    },
    logoutModalState: state => {
        return state.logoutModalState
    },
    acquireOneChapterData: state => obj => {
        return state.collectionData?.['chapterData']?.[obj.questionName]?.filter(
            (data) => data['chapter-code-id'] == obj.chapterId
        )
    },
    acquireChapterData: state => collectionName => {
        return state.collectionData['chapterData'][collectionName]
    },
    acquireQuestionsData: state => collectionName => {
        return state.collectionData['questionData'][collectionName]
    },
    acquireOneAnswersData: state => obj => {
        return state.collectionData['answerData'][obj.key]?.filter(
            (data) => data.docId == obj.docId
        )
    },
    acquireAnswersData: state => collectionName => {
        return state.collectionData['answerData'][collectionName]
    },
    acquireProjectData: state => collectionName => {
        return state.collectionData['projectData'][collectionName]
    }
}