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
    collectionData: {
        'chapterData': {},
        'questionData': {},
        'answerData': {}
    },
    collectionNameMap: {
        'all': {
            'Answer': 'user_answers_collection_v1',
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
}