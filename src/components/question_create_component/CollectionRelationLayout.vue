<script setup>
defineProps(['fsCollection', 'id'])
defineEmits(['update:fsCollection', 'callbackId'])
</script>

<template>
    <div class="d-flex flex-column gap-2">
        <div class="d-flex gap-2 align-items-center">
            <select class="form-select" v-model="fsCollection.selectedCollectionName" v-on:change="getQuestionChapters"
                required>
                <option disabled value="">Please Select Question Type</option>
                <option v-for="col in getAllQuestionsNameData" :value="col['specific']">
                    {{ col['title'] + ' / ' + col['sub_title'] }}
                </option>
            </select>
            <a href="" class="btn btn-success fs-6 disabled">
                <i class="bi bi-plus-circle-fill"></i>
            </a>
        </div>

        <div class="d-flex gap-2 align-items-center">
            <select :disabled="fsCollection.selectedCollectionName == ''" class="form-select"
                v-model="fsCollection.chapterName" required>
                <option disabled value="">
                    {{ fsCollection.selectedCollectionName == '' ? "Please Select Question Type First" :
                        fsCollection.selectedCollectionName != '' && chapterList &&
                            chapterList.length == 0 ?
                            "Create Chapter ➤" : "Please Select Chapter" }}
                </option>
                <option v-for="chpt in chapterList" :value="chpt['chapter-code-id']">
                    {{ chpt['chapter-title'] }}
                </option>
            </select>

            <a href="#" @click.prevent="showCreateChapterModal" class="btn btn-success fs-6"
                :class="fsCollection.selectedCollectionName == '' ? 'disabled' : ''">
                <i class="bi bi-plus-circle-fill"></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chapterList: [],
        }
    },
    methods: {
        getQuestionChapters() {
            this.fsCollection.chapterName = ''
            this.chapterList = []
            this.chapterList = this.$store.getters.acquireChapterData(this.fsCollection.selectedCollectionName)
            // if (!this.chapterList) {
            this.$store.dispatch('getCollectionData', {
                firstAccessCode: this.fsCollection.selectedCollectionName,
                method: 'get',
                collectionKey: 'chapter',
            })
            // }
        },
        showCreateChapterModal() {
            this.$emit('callbackId', this.id)
        }
    },
    computed: {
        getAllQuestionsNameData() {
            return this.$store.getters.acquireAllQuestionsNameData('all-questions-name-list')
        }
    },
    mounted() {
        this.$store.watch(
            (_, getters) => getters.acquireChapterData(this.fsCollection.selectedCollectionName),
            (newValue, _) => {
                this.chapterList = newValue
            }
        )

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