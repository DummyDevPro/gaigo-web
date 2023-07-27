import query from "./query"
export default {
    userRole: 0, // 0 : everyone, 1 : member, 2 : admin
    userInfo: {
        'uid': null,
        'displayName': null,
        'photoUrl': null,
    },
    loginModalMsg: '',
    loginModalState: null,
    logoutModalState: null,
    collectionRelation: query,
    collectionData: {
        'chapterData': {},
        'questionData': {},
        'answerData': {},
        'projectData': {}
    },
    collectionDataType: {
        'chapter': 'chapterData',
        'question': 'questionData',
        'answer': 'answerData',
        'project': 'projectData'
    },
    errorToast: null
}