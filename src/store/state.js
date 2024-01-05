import query from "./query"
export default {
    userRole: 0, // 0 : everyone, 1 : member, 2 : admin
    // fireabse user
    userInfo: {
        'uid': null,
        'displayName': null,
        'emailAddress': null,
    },
    // user profile
    profile: {
        profileImageByteData: '',
        profileImageUrl: '',
        allImages: {}
    },
    loginModalMsg: '',
    loginModalState: null,
    logoutModalState: null,
    collectionRelation: query,
    collectionData: {
        'userProfileData': {},
        'chapterData': {},
        'questionData': {},
        'answerData': {},
        'projectData': {},
        'schedulesData': {},
        'allQuestionsNameData': {}
    },
    collectionDataType: {
        'account': 'userProfileData',
        'chapter': 'chapterData',
        'question': 'questionData',
        'answer': 'answerData',
        'project': 'projectData',
        'question-name-list': 'allQuestionsNameData',
        'schedules': 'schedulesData'
    },
    errorToast: null,
    authMsg: {
        renewPass: {
            success: {
                msg: '',
                time: ''
            },
            error: {
                msg: '',
                time: ''
            }
        },
        resetPass: {
            success: {
                msg: '',
                time: ''
            },
            error: {
                msg: '',
                time: ''
            }
        }
    },
    alertMsg: {
        status: null,
        message: null,
        time: null,
        extraMsg: null
    }
}