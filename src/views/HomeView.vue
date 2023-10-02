<template>
    <section v-if="getUserID">
        <dashboard-home-view />
        <!-- <user-profile-view /> -->
    </section>
    <section v-else>
        <login-view />
    </section>
</template>
<script>
import UserProfileView from './UserProfileView.vue'
import LoginView from './LoginView.vue'
import DashboardHomeView from './DashboardHomeView.vue'

export default {
    components: {
        'user-profile-view': UserProfileView,
        'dashboard-home-view': DashboardHomeView,
        'login-view': LoginView,
    },
    computed: {
        getUserID() {
            return this.$store.getters.acquireUserID
        }
    }
}
</script>
<style scoped></style>