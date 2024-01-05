<template>
    <div v-if="!getAllQuestionsNameData" class="loading"></div>
    <div v-else class="all-mondai-grid my-5 px-5">
        <all-questions :qnl="getAllQuestionsNameData" />
    </div>
</template>

<script>
import AllQuestions from '@/components/AllQuestions.vue'
export default {
    components: {
        'all-questions': AllQuestions
    },
    computed: {
        getAllQuestionsNameData() {
            return this.$store.getters.acquireAllQuestionsNameData('all-questions-name-list')
        }
    },
    mounted() {
        setTimeout(() => {
            this.$store.dispatch('getCollectionData', {
                firstAccessCode: 'all',
                method: 'get',
                collectionKey: 'question-name-list',
                where: [{
                    whereValue: 'question',
                    whereOperator: '=='
                }],
            })
        }, 1500);
    }
}
</script>

<style scoped></style>