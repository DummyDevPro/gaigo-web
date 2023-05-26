<template>
    <div class="all-mondai-grid mt-3">
        <all-questions />
    </div>
</template>

<script>
import AllQuestions from '@/components/AllQuestions.vue'
export default {
    components: {
        'all-questions': AllQuestions
    }
}
</script>

<style scoped>
.all-mondai-grid {
    display: flex;
    justify-content: center;
}

.all-mondai-grid>div {
    flex: 0 0 50%;
}

@media (max-width: 991.98px) {
    .all-mondai-grid>div {
        flex: 0 0 90%;
    }
}
</style>