<template>
    <section class="exam-result-layout px-3 py-5">
        <h4 class="text-center">全試験履歴</h4>
        <div class="ps-3 pe-3">

            <div v-if="filterAnswersData.length != 0"
                class="table-controller d-flex align-items-center gap-2 justify-content-end">
                <span>
                    Showing <span>{{ currentFilterPageStartNumber }}</span>
                    to {{ currentFilterPage * filterLimit > totalAnswersDataCount ? totalAnswersDataCount :
                        currentFilterPage * filterLimit }}
                    of {{ totalAnswersDataCount }}
                </span>
                <i @click="updateFilterAnswersData('minus')" :class="currentFilterPage == 1 ? 'd-none' : 'd-block'"
                    class="bi bi-caret-left left-icon"></i>
                <i @click="updateFilterAnswersData('plus')" :class="currentFilterPage == filterCount ? 'd-none' : 'd-block'"
                    class="bi bi-caret-right right-icon"></i>
            </div>

            <table class="table caption-top table-hover">
                <thead>
                    <tr>
                        <th>Uploaded DateTime</th>
                        <th>Start Time</th>
                        <th>Finish Time</th>
                        <!-- <th>Uploaded Time</th> -->
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody class="align-middle">
                    <tr v-if="filterAnswersData.length == 0">
                        <td colspan="100%" class="text-center">{{ tableDataMsg }}</td>
                    </tr>

                    <tr v-else @click="moveToExamResultDetailsPage(ans.docId)" v-for="ans in filterAnswersData"
                        title="Click On Show Details" class="align-middle">
                        <td>
                            {{ convertTimeStampToDate(ans?.['uploaded-time']) }} <br>
                            {{ convertTimeStampToTime(ans?.['uploaded-time']) }}
                        </td>
                        <td>{{ convertTimeStampToDate(ans?.['started-time']) }}</td>
                        <td>{{ convertTimeStampToDate(ans?.['finish-time']) }}</td>
                        <!-- <td>{{ convertTimeStampToTime(ans?.['uploaded-time']) }}</td> -->
                        <td>{{ ans?.['total-correct-count'] + '/' + ans?.['answers']?.length }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            'tableDataMsg': `Fetching your exam's answers data`,
            'answersData': [],
            'filterAnswersData': [],
            'totalAnswersDataCount': 0,
            'filterLimit': 5,
            'filterCount': 0,
            'currentFilterPageStartNumber': 1,
            'currentFilterPage': 1,
        }
    },
    methods: {
        updateFilterAnswersData(key) {
            if (key == 'plus') {
                this.currentFilterPage++
            } else {
                this.currentFilterPage--
            }
            const start = (this.currentFilterPage - 1) * this.filterLimit
            const stop = this.currentFilterPage * this.filterLimit
            this.currentFilterPageStartNumber = start + 1
            this.filterAnswersData = []
            for (let i = start; i < stop; i++) {
                if (this.answersData[i] && this.answersData[i] != undefined) {
                    this.filterAnswersData.push(this.answersData[i])
                }
            }
        },
        moveToExamResultDetailsPage(uid) {
            this.$router.push({
                name: 'exam-result-by-id', params: {
                    'examId': uid
                }
            })
        },
        convertTimeStampToTime(timestamp) {
            let date = new Date(timestamp.seconds * 1000)
            let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
            let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
            let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
            let fullTime = hours + ":" + minutes + ":" + seconds
            return fullTime
        },
        convertTimeStampToDate(timestamp) {
            if (timestamp == null) {
                return '-'
            }

            let date = new Date(timestamp.seconds * 1000)
            let year = date.getFullYear()
            let month = date.getMonth()
            let day = date.getDate()
            let fullDate = year + "/" + (month + 1) + "/" + day
            return fullDate
        }
    },
    components: {

    },
    computed: {
        getUserID() {
            return this.$store.getters.acquireUserInfo
        }
    },
    mounted() {
        this.$store.watch(
            (_, getters) => getters.acquireAnswersData('all-answers'),
            (newValue, _) => {
                this.answersData = newValue
                this.totalAnswersDataCount = this.answersData.length
                if (this.totalAnswersDataCount > 0) {
                    this.filterCount = Math.ceil(this.totalAnswersDataCount / this.filterLimit)

                    let start = this.currentFilterPage - 1
                    let stop = this.currentFilterPage * this.filterLimit
                    for (let i = start; i < stop; i++) {
                        if (this.answersData[i] && this.answersData[i] != undefined) {
                            this.filterAnswersData.push(this.answersData[i])
                        }
                    }
                } else {
                    this.tableDataMsg = `There is no exam's answer data.`
                }
            }
        )

        setTimeout(() => {
            this.$store.dispatch('getCollectionData', {
                firstAccessCode: 'all',
                method: 'get',
                collectionKey: 'answer',
                where: [{
                    whereValue: this.$store.getters.acquireUserInfo.uid,
                    whereOperator: '=='
                }],
            })
        }, 1500);
    }
}
</script>
<style scoped>
.exam-result-layout table tbody tr {
    cursor: pointer;
}

.left-icon,
.right-icon {
    color: white;
    height: fit-content;
    width: fit-content;
    background-color: var(--color-g-web);
    padding: .25rem .5rem;
    border-radius: 50%;
    cursor: pointer;
    transition: all .3s linear;
}

.left-icon:hover,
.right-icon:hover {
    box-shadow: 2px 0 4px black;
}
</style>