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
            <h4>Your Exam Results</h4>
            <div class="ps-3 pe-3">
                <table class="table caption-top">
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
                            <td>{{ ans['total-correct-count'] + '/' + ans['answers']?.length }}</td>
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
            'answersData': [],
            'personIcon': personIcon
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
    components: {

    },
    computed: {
        getUserID() {
            return this.$store.getters.acquireUserInfo
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
</style>