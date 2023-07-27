export default {
    'all': {
        get: {
            answer: {
                saveCollectionName: 'all-answers',
                collectionName: 'user_answers_collection_v1',
                where: 'uid',
                order: {
                    name: 'uploaded-time',
                    type: 'desc'
                }
            },
            project: {
                saveCollectionName: 'all-projects',
                collectionName: 'student_projects',
                order: {
                    name: 'project_end_date',
                    type: 'asc'
                }
            }
        }
    },
    'java-bronze': {
        get: {
            chapter: {
                saveCollectionName: 'java-bronze',
                collectionName: 'java_bronze_overview_collection',
                where: null,
                order: {
                    name: 'chapter-code-id',
                    type: 'asc'
                },
            },
            question: {
                saveCollectionName: 'java-bronze',
                collectionName: 'questions_collection',
                where: 'chapter-code-id',
                order: {
                    name: 'id',
                    type: 'asc'
                },
            }
        },
        post: {
        },
    }
}