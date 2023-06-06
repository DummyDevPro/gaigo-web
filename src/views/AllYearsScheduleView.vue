<template>
    <div class="all-years-schedules-wrapper p-3">
        <h1 class="text-center">All Years Schedules</h1>
        <!-- <div class="schedule-list">
            <div class="schedule-item">

            </div>
        </div> -->
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Year</th>
                    <th>Student's year</th>
                    <th>Created Date</th>
                    <th>Updated Date</th>
                    <th>Reference</th>
                </tr>
            </thead>

            <tbody>
                <tr @click="goSchedule">
                    <td>1</td>
                    <td>2022</td>
                    <td>First Year</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2023</td>
                    <td>First Year</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>2023</td>
                    <td>Second Year</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    methods: {
        goSchedule() {
            this.$router.push({ name: 'selected-years-schedule' })
        }
    }
}
</script>

<style scoped></style>