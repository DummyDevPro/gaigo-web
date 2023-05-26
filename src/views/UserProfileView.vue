<template>
    <div class="container-fluid">
        <table class="table">
            <thead>
                <tr>
                    <th>Uploaded Date</th>
                    <th>Uploaded Time</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="ans in answersData">
                    <td>{{ convertTimeStampToDate(ans['uploaded-time']) }}</td>
                    <td>{{ convertTimeStampToTime(ans['uploaded-time']) }}</td>
                    <td>{{ ans['total-correct-count'] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            'answersData': []
        }
    },
    methods: {
        convertTimeStampToTime(timestamp) {
            let date = new Date(timestamp.seconds * 1000)
            let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
            let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
            let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
            let fullTime = hours + ":" + minutes + ":" + seconds
            return fullTime
        },
        convertTimeStampToDate(timestamp) {
            let date = new Date(timestamp.seconds * 1000)
            let year = date.getFullYear()
            let month = date.getMonth()
            let day = date.getDate()
            let fullDate = year + "/" + (month + 1) + "/" + day
            return fullDate
        }
    },
    computed: {
        getUserID() {
            return this.$store.getters.acquireUserID
        }
    },
    mounted() {
        this.$store.watch(
            (_, getters) => getters.acquireAnswersData('all'),
            (newValue, _) => {
                this.answersData = newValue
            }
        )

        this.$store.dispatch('getCollectionData', {
            'collectionName': 'all',
            'collectionType': 'Answer',
            'where': {
                'chapterId': this.$store.getters.acquireUserID,
                'referenceId': 'loginUserId'
            }
        })
    }
}
</script>