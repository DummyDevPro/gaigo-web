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
        // console.log('-----');
        // console.log(state.profile.profileImageUrl.length);
        // if (state.profile.profileImageUrl.length == 0) {
        //     loadLocalStorage('profile-image', (datUrl) => {
        //         console.log('asdfghj');
        //         return state.profile.profileImageUrl = datUrl
        //     })
        // }
        // console.log('-----');
        return state.profile.profileImageUrl
    },
    acquireAllImages: state => {
        console.log('Repunch');
        return state.profile.allImages
    }
}