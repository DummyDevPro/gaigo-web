<template>
    <web-pamphlet />

    <login-modal></login-modal>
    <logout-modal></logout-modal>
</template>

<script>
import WebPamphlet from '@/components/WebPamphlet.vue';
import LoginModal from '@/components/LoginModal.vue';
import LogoutModal from '@/components/LogoutModal.vue';

export default {
    components: {
        'web-pamphlet': WebPamphlet,
        'login-modal': LoginModal,
        'logout-modal': LogoutModal,
    }
}
</script>