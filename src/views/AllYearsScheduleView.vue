<template>
    <div class="all-years-schedules-wrapper p-3">
        <h1 class="text-center mb-5">All Years Schedules</h1>

        <div class="school-year-wrapper p-5">
            <div class="school-year-list d-flex flex-wrap gap-2">
                <div class="d-flex gap-2" v-for="year in schoolYears">
                    <div>
                        <router-link :to="{ name: 'selected-years-schedule', params: { 'year': year, grade: '01' } }"
                            class="btn btn-info p-5">
                            <strong>{{ year }}年度 | 1年生</strong>
                        </router-link>
                    </div>
                    <div v-if="year != 2022">
                        <router-link :to="{ name: 'selected-years-schedule', params: { 'year': year, grade: '02' } }"
                            class="btn btn-info p-5">
                            <strong>{{ year }}年度 | 2年生</strong>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            schoolYears: []
        }
    },
    methods: {
    },
    created() {
        const date = new Date();
        let endSchoolYear = date.getMonth() < 2 ? date.getFullYear() - 1 : date.getFullYear()
        for (let i = 2022; i <= endSchoolYear; i++) {
            this.schoolYears.push(i)
        }
    }
}
</script>

<style scoped>
/* .range-slider {
    position: relative;
}

.range-slider>input {
    position: absolute !important;
    background: none !important;
    z-index: 1 !important;
    background: none;
    pointer-events: auto;
    -webkit-appearance: none;
    -moz-appearance: none;
} */
</style>