export default {
    'profile': {
        get: {
            account: {
                saveCollectionName: 'user-profile',
                collectionName: 'accounts',
            }
        }
    },
    'all': {
        get: {
            answer: {
                saveCollectionName: 'all-answers',
                collectionName: 'user_answers',
                where: ['uid'],
                order: {
                    name: 'uploaded-time',
                    type: 'desc'
                }
            },
            project: {
                saveCollectionName: 'all-projects',
                collectionName: 'student_projects',
                where: null,
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
                collectionName: 'java_bronze_overview',
                where: null,
                order: {
                    name: 'chapter-code-id',
                    type: 'asc'
                },
            },
            question: {
                saveCollectionName: 'java-bronze',
                collectionName: 'java_bronze_questions',
                where: ['chapter-code-id'],
                order: {
                    name: 'id',
                    type: 'asc'
                },
            }
        },
        post: {
        },
    },
    'java-basic': {
        get: {
            chapter: {
                saveCollectionName: 'java-basic',
                collectionName: 'java_basic_overview',
                where: null,
                order: {
                    name: 'chapter-code-id',
                    type: 'asc'
                },
            },
            question: {
                saveCollectionName: 'java-basic',
                collectionName: 'java_basic_questions',
                where: ['chapter-code-id'],
                order: {
                    name: 'id',
                    type: 'asc'
                },
            }
        },
        post: {
        },
    },
    'year-schedule': {
        get: {
            schedules: {
                saveCollectionName: 'year-schedule',
                collectionName: 'all_years_schedule',
                where: ['school_year', 'grade'],
                order: {
                    name: 'part',
                    type: 'asc'
                }
            }
        },
        post: {}
    }
}