<template>
    <div class="container p-3">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 m-auto accordion" id="accordionExample">
            <div v-if="!getChaptersData" class="loading">
            </div>
            <div class="accordion-item" v-for="ques in getChaptersData">
                <h2 class="accordion-header" :id="'heading' + ques['docId']">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="'#' + 'collapse' + ques['docId']" aria-expanded="true"
                        :aria-controls="'collapse' + ques['docId']">
                        {{ ques['chapter-title'] }}
                    </button>
                </h2>
                <div :id="'collapse' + ques['docId']" class="accordion-collapse collapse"
                    :aria-labelledby="'heading' + ques['docId']" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <h6 class="mb-2 color-g-web fw-bold">{{ ques['chapter-subtitle'] }}</h6>
                        <ul class="ul-wrapper">
                            <li v-for="detail in ques['details']" class="">
                                <small>{{ detail }}</small>
                            </li>
                        </ul>
                    </div>
                    <div class="p-2 accordion-footer">
                        <router-link :to="{
                            name: 'questions-chapter',
                            params: {
                                'chapter': ques['chapter-code-id'],
                            }
                        }" class="btn btn-primary">チャレンジ</router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="row g-4">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6" v-for="ques in getChaptersData">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ ques['chapter-title'] }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{ ques['chapter-subtitle'] }}</h6>
                        <hr>
                        <ul>
                            <li v-for="detail in ques['details']">
                                {{ detail }}
                            </li>
                        </ul>
                    </div>
                    <div class="card-footer">
                        <router-link :to="{
                            name: 'questions-chapter',
                            params: {
                                'chapter': ques['chapter-code-id']
                            }
                        }" class="btn btn-primary">チャレンジ</router-link>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    props: ['specific'],
    data() {
        return {
            'collectionName': this.specific
        }
    },
    computed: {
        getChaptersData() {
            return this.$store.getters.acquireChapterData(this.collectionName)
        }
    },
    mounted() {
        this.$store.dispatch('getCollectionData', { 'collectionName': this.collectionName, 'collectionType': 'Chapter' })
    }
}
</script>

<style scoped>
.ul-wrapper {
    color: var(--color-g-web);
    margin: 0;
    padding-left: 1.5rem;
    text-indent: 1rem;
}

.ul-wrapper li::marker {
    content: '✓';
    color: var(--color-g-web);
    font-weight: bold;
    font-size: 1.25rem;
}

.accordion-footer {
    background-color: var(--bs-accordion-active-bg);
}
</style>