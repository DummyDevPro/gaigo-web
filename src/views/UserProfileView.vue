<template>
    <div class="profile-layout">
        <section class="user-info-layout text-center mx-auto">
            <!-- <a href=""><i class="bi bi-pencil-square"></i></a> -->
            <div v-if="getUserID">
                <div class="profile-img-layout p-2">
                    <a class="disabled"><i class="bi bi-pencil-square"></i>Edit</a>
                    <img class="profile-img" :src="getUserID.photoUrl != null ? getUserID.photoUrl : personIcon" alt="">
                </div>
                <div class="g-web-bg text-white">
                    <p class="fs-5 m-0">{{ getUserID.displayName != null ? getUserID.displayName : '' }}</p>
                </div>
            </div>
        </section>

        <section class="exam-result-layout px-3">
            <h4>試験結果の履歴</h4>
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
                    <i @click="updateFilterAnswersData('plus')"
                        :class="currentFilterPage == filterCount ? 'd-none' : 'd-block'"
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
    </div>
</template>
<script>
import personIcon from "@/assets/img/person_icon.png";
export default {
    data() {
        return {
            'tableDataMsg': `Fetching your exam's answers data`,
            'answersData': [],
            'filterAnswersData': [],
            'personIcon': personIcon,
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

        this.$store.dispatch('getCollectionData', {
            firstAccessCode: 'all',
            method: 'get',
            collectionKey: 'answer',
            whereValue: this.$store.getters.acquireUserInfo.uid,
            whereOperator: '=='
        })
    }
}
</script>
<style scoped>
.profile-layout {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.user-info-layout {
    width: fit-content;
    border: 1px solid var(--color-g-web);
    border-radius: 4px;
    overflow: hidden;
}

.profile-img-layout {
    position: relative;
}

.profile-img-layout a {
    text-decoration: none;
    position: absolute;
    bottom: 0;
    right: 4px;
    color: var(--color-g-web);
}

.profile-img-layout>img {
    width: 150px;
}

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