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
    acquireChapterData: state => saveCollectionName => {
        return state.collectionData['chapterData'][saveCollectionName]
    },
    acquireQuestionsData: state => saveCollectionName => {
        return state.collectionData['questionData'][saveCollectionName]
    },
    acquireOneAnswersData: state => obj => {
        return state.collectionData['answerData'][obj.key]?.filter(
            (data) => data.docId == obj.docId
        )
    },
    acquireAnswersData: state => saveCollectionName => {
        return state.collectionData['answerData'][saveCollectionName]
    },
    acquireProjectData: state => saveCollectionName => {
        return state.collectionData['projectData'][saveCollectionName]
    },
    acquireScheduleData: state => saveCollectionName => {
        return state.collectionData['schedulesData'][saveCollectionName]
    },
    acquireUserProfileData: state => saveCollectionName => {
        return state.collectionData['userProfileData'][saveCollectionName]
    },
    acquireProfileImageFromSession: state => {
        return state.profile.profileImageUrl
    },
    acquireAllImages: state => {
        return state.profile.allImages
    },
    acquireAllQuestionsNameData: state => saveCollectionName => {
        return state.collectionData['allQuestionsNameData'][saveCollectionName]
    }
}