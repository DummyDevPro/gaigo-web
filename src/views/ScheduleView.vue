<template>
    <!-- {{ schedules }} -->
    <div class="px-1">
        <h2 id="page-title" class="text-center page-title-sticky bg-white py-2 m-0">
            <span>{{ year }}年</span>
            <span v-if="grade == '01'">1年生</span>
            <span v-if="grade == '02'">2年生</span>の全カリキュラム
        </h2>
        <div class="text-center" v-if="schedules == null || schedules.length == 0">
            {{ scheduleFetchingStateMsg }}
        </div>
        <div v-else class="col border">
            <!-- col-sm-11 col-md-8 p-0 -->
            <div v-for="schedule in schedules">
                <div class="g-web-bg p-3 text-white text-center schedule-sticky rounded-bottom schedule-title">
                    <strong>{{ schedule['part_period_text'] }}</strong>
                </div>
                <div class="day-list row m-0">
                    <div v-for="day in schedule['days']" class="day p-2 border-g-web col-md-6 col-lg-4">
                        <div class="day-name">
                            <strong v-if="day['day_code'] == 1">月曜日</strong>
                            <strong v-if="day['day_code'] == 2">火曜日</strong>
                            <strong v-if="day['day_code'] == 3">水曜日</strong>
                            <strong v-if="day['day_code'] == 4">木曜日</strong>
                            <strong v-if="day['day_code'] == 5">金曜日</strong>
                        </div>
                        <div v-for="(lecture, index) in day['lectures']"
                            :class="index != day['lectures'].length - 1 ? 'border-bottom' : ''"
                            class="fw-light lecture p-2">
                            <table>
                                <tr>
                                    <td class="td-style">科目名</td>
                                    <td class="td-style">：</td>
                                    <td>{{ lecture['lecture_name'] }}</td>
                                </tr>
                                <tr v-if="getUserID">
                                    <td class="td-style">講師名</td>
                                    <td class="td-style">：</td>
                                    <td>{{ lecture['lecturer'] }}</td>
                                </tr>
                                <tr>
                                    <td class="td-style">時限目</td>
                                    <td class="td-style">：</td>
                                    <td><span class="badge bg-danger">{{ lecture['lecture_period'] }}</span></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['year', 'grade'],
    data() {
        return {
            scheduleFetchingStateMsg: `Fetching Data From Server!`,
            schedules: null
        }
    },
    computed: {
        getUserID() {
            return this.$store.getters.acquireUserID
        }
    },
    mounted() {
        // Sticking page title and schedule title
        const pageTitle = document.getElementById('page-title')
        const topNavBar = document.getElementById('top-nav-bar')
        let topNavBarHeight = 72
        if (topNavBar) {
            topNavBarHeight = topNavBar.clientHeight

            pageTitle.style.top = `${topNavBarHeight}px`
        }
        addEventListener("scroll", () => {
            if (topNavBar) {
                topNavBarHeight = topNavBar.clientHeight

                pageTitle.style.top = `${topNavBarHeight}px`
            }

            let scheduleTitle = document.getElementsByClassName('schedule-title')
            if (scheduleTitle && scheduleTitle.length > 0) {
                for (let i = 0; i < scheduleTitle.length; i++) {
                    let totalHeight = topNavBarHeight + pageTitle.clientHeight
                    scheduleTitle[i].style.top = `${totalHeight}px`
                }
            }
        })

        this.$store.watch(
            (_, getters) => getters.acquireScheduleData('year-schedule'),
            (newValue, _) => {
                this.schedules = newValue
                if (this.schedules == null || this.schedules.length == 0) {
                    this.scheduleFetchingStateMsg = `Data Not Found!`
                }
            }
        )

        setTimeout(() => {
            this.$store.dispatch('getCollectionData', {
                firstAccessCode: 'year-schedule',
                method: 'get',
                collectionKey: 'schedules',
                where: [
                    {
                        whereValue: parseInt(this.year),
                        whereOperator: '=='
                    },
                    {
                        whereValue: this.grade,
                        whereOperator: '=='
                    }
                ],
            })
        }, 1500);
    }
}
</script>
<style scoped>
.schedule-sticky {
    position: sticky;
    top: 120px;
    left: 0;
    z-index: 1;
}

.page-title-sticky {
    position: sticky;
    top: 72px;
    left: 0;
    z-index: 2;
}

.td-style {
    white-space: nowrap;
    vertical-align: top;
    text-align: justify;
}
</style>