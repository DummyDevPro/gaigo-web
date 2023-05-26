<template>
    <div class="contact-us-grid">
        <contact-us />
    </div>
</template>

<script>
import ContactUs from '@/components/ContactUs.vue';

export default {
    components: {
        'contact-us': ContactUs
    }
}
</script>

<style scoped>
.contact-us-grid {
    margin-top: 5rem;
    display: flex;
    justify-content: center;
}

.contact-us-grid>div {
    flex: 0 0 50%;
}

@media (max-width: 991.98px) {
    .contact-us-grid>div {
        flex: 0 0 90%;
    }
}
</style>