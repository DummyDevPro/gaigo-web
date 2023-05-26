<template>
    <!-- <div v-if="getUserID != null">
        <left-aside />
    </div>

    <div v-if="getUserID == null">
        <web-pamphlet />
    </div> -->
    <web-pamphlet />

    <login-modal></login-modal>
    <logout-modal></logout-modal>
</template>

<script>
import LeftAside from '@/components/LeftAside.vue';
import WebPamphlet from '@/components/WebPamphlet.vue';
import LoginModal from '@/components/LoginModal.vue';
import LogoutModal from '@/components/LogoutModal.vue';

export default {
    components: {
        'left-aside': LeftAside,
        'web-pamphlet': WebPamphlet,
        'login-modal': LoginModal,
        'logout-modal': LogoutModal,
    },
    computed: {
        getUserID() {
            return this.$store.getters.acquireUserID
        }
    }
}
</script>