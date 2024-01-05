<template>
    <div class="container py-5">

        <form @submit.prevent="showResult">
            <div class="d-flex flex-column align-items-center">

                <div class="question-container col-12 col-sm-11 col-md-8 col-lg-6 d-flex flex-column gap-3">
                    <div v-for="(__, idx) in  questions " class="question">
                        <div class="up-action d-flex justify-content-between">
                            <div class="up-action-left bg-dark rounded-top d-flex" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <a href="#" @click.prevent="" class="text-white d-block px-2 py-1 fs-5">
                                    <i class="bi bi-layout-wtf"></i>
                                </a>

                                <ul class="dropdown-menu">
                                    <li>
                                        <h6 class="dropdown-header">Select Layout</h6>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#"
                                            @click.prevent="addSubLayout(idx, 'code')">Code</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#"
                                            @click.prevent="addSubLayout(idx, 'hint')">Hint</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#"
                                            @click.prevent="addSubLayout(idx, 'table')">Table</a>
                                    </li>
                                    <li>
                                        <a :class="questions[idx].choice == null ? '' : 'disabled'" class="dropdown-item"
                                            href="#" @click.prevent="addMultipleChoiceLayout(idx)">Choices</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="up-action-right bg-dark rounded-top d-flex">
                                <!-- TODO duplicateQuestionLayout(idx) -->
                                <a href="#" @click.prevent="" class="text-white d-block px-2 py-1 fs-5"
                                    title="Duplicate Layout | In the process of developing.">
                                    <i class="bi bi-copy"></i>
                                </a>
                                <a href="#" @click.prevent="addNewQuestionLayout(idx)"
                                    class="text-white d-block px-2 py-1 fs-5">
                                    <i class="bi bi-plus-lg" title="New Layout"></i>
                                </a>
                                <a href="#" @click.prevent="deleteCurrentQuestionLayout(idx)"
                                    class="text-white d-block px-2 py-1 fs-5" title="Delete Layout">
                                    <i class="bi bi-dash-lg"></i>
                                </a>
                            </div>
                        </div>

                        <div class="d-flex flex-column gap-2 question-content p-2 bg-dark rounded-bottom">
                            <div class="question-title">
                                <textarea v-model="questions[idx].title" class="form-control" rows="2"
                                    placeholder="Type question title..." required></textarea>
                            </div>

                            <div v-if="questions[idx].items.length > 0" class="question-body d-flex flex-column gap-2">
                                <!-- item -->
                                <div class="position-relative" v-for="(item, iidx) in questions[idx].items" :key="iidx">

                                    <button type="button" class="btn-close bg-danger position-absolute" aria-label="Close"
                                        style="top: .25rem;right: .25rem;" @click="removeSubLayout(idx, iidx)"></button>

                                    <div v-if="item.type == 'code'">
                                        <code-layout v-model:content="questions[idx].items[iidx].data" />
                                    </div>

                                    <div v-if="item.type == 'hint'">
                                        <hint-layout v-model:hints="questions[idx].items[iidx].data" />
                                    </div>

                                    <div v-if="item.type == 'table'">
                                        <table-layout v-model:testData="questions[idx].items[iidx].data" />
                                    </div>
                                </div>
                            </div>

                            <!-- firestore database  -->
                            <collection-relation-layout :id="idx" v-model:fsCollection="questions[idx].fsCollection"
                                @callbackId="showCreateChapterModal" />

                            <!-- Multiple Choice Layout -->
                            <div class="position-relative" v-if="questions[idx].choice != null">
                                <button type="button" class="btn-close bg-danger position-absolute" aria-label="Close"
                                    style="top: .25rem;right: .25rem;" @click="removeMultipleChoiceLayout(idx)"></button>

                                <multiple-choice-layout v-model:choice="questions[idx].choice"></multiple-choice-layout>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="form-control btn btn-success">Create</button>
                    </div>
                </div>
            </div>
        </form>

        <!-- Modal Dialog : Create Chapter -->
        <div class="modal fade" id="createChapterModal" ref="createChapterModal" role="dialog" tabindex="-1">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalScrollableTitle">Add New Chapter</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="chapterCodeId" class="form-label">Chapter Code Id</label>
                            <input v-model="newChapt['chapter-code-id']" type="text" class="form-control" id="chapterCodeId"
                                placeholder="j-bz-chapter-1,j-b-chapter-2,..." required>
                        </div>
                        <div class="mb-3">
                            <label for="chapterTitle" class="form-label">Chapter Title</label>
                            <input v-model="newChapt['chapter-title']" type="text" class="form-control" id="chapterTitle"
                                placeholder="Java Basic,Java OOP,...">
                        </div>
                        <div class="mb-3">
                            <label for="chapterSubTitle" class="form-label">Chapter Sub-Title</label>
                            <input v-model="newChapt['chapter-subtitle']" type="text" class="form-control"
                                id="chapterSubTitle" placeholder="Java Basic,Java OOP,...">
                        </div>
                        <div class="mb-3">
                            <label for="chapterDetail" class="form-label">Details</label>
                            <textarea v-model="newChapt['chapter-detail']" class="form-control" id="chapterDetail"
                                rows="3"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="createNewChapter">Create</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import CodeLayout from '@/components/question_create_component/CodeLayout.vue';
import HintLayout from '@/components/question_create_component/HintLayout.vue';
import TableLayout from '@/components/question_create_component/TableLayout.vue';
import MultipleChoiceLayout from '@/components/question_create_component/MultipleChoiceLayout.vue';
import CollectionRelationLayout from '@/components/question_create_component/CollectionRelationLayout.vue';

let modal;
export default {
    components: {
        'code-layout': CodeLayout,
        'hint-layout': HintLayout,
        'table-layout': TableLayout,
        'multiple-choice-layout': MultipleChoiceLayout,
        'collection-relation-layout': CollectionRelationLayout,
    },
    data() {
        return {
            questions: [
                {
                    // FireStore Collection Name & Save Doc's attribute name
                    fsCollection: {
                        selectedCollectionName: '',
                        chapterName: ''
                    },
                    title: '',
                    items: [],
                    choice: null
                }
            ],
            newChapt: {
                'chapter-code-id': '',
                'chapter-title': '',
                'chapter-subtitle': '',
                'chapter-detail': '',
            },
            modalAccessId: null
        }
    },
    methods: {
        // UI Control Methods
        questionObject() {
            return { fsCollection: { selectedCollectionName: '', chapterName: '' }, title: '', items: [] }
        },
        chooseLayoutObject() {
            return { items: [{ key: 'opt1', val: '' }, { key: 'opt2', val: '' }, { key: 'opt3', val: '' },], ans: [] }
        },
        questionTotalLength() {
            return this.questions.length - 1;
        },
        questionSubLayout(type) {
            if (type == 'code') {
                return { type: 'code', data: '' }
            }
            if (type == 'hint') {
                return { type: 'hint', data: [] }
            }
            if (type == 'table') {
                return { type: 'table', data: { heading: [], body: [] } }
            }
        },
        duplicateQuestionLayout(pos) {
            const qObj = this.questions[pos];
            if (pos == this.questionTotalLength()) {
                this.questions.push(qObj)
            } else {
                this.questions.splice(pos + 1, 0, qObj)
            }
        },
        addNewQuestionLayout(pos) {
            if (pos == this.questionTotalLength()) {
                this.questions.push(this.questionObject())
            } else {
                this.questions.splice(pos + 1, 0, this.questionObject())
            }
        },
        deleteCurrentQuestionLayout(pos) {
            this.questions.splice(pos, 1)
        },
        addMultipleChoiceLayout(pos) {
            this.questions[pos].choice = this.chooseLayoutObject()
        },
        removeMultipleChoiceLayout(pos) {
            this.questions[pos].choice = null
        },

        addSubLayout(pos, type) {
            this.questions[pos].items.push(this.questionSubLayout(type))
        },
        removeSubLayout(pos, ipos) {
            this.questions[pos].items.splice(ipos, 1)
        },

        // Firebase Communication Methods
        showResult() {
            // console.log(this.questions);
            for (let i = 0; i < this.questions.length; i++) {
                // Prepare firestore send data
                let data = {};
                const qObj = this.questions[i];

                // Multiple Choices
                if (qObj.choice) {
                    data['ans_choices'] = {}
                    for (let j = 0; j < qObj.choice.items.length; j++) {
                        const element = qObj.choice.items[j];
                        data['ans_choices'][element.key] = element.val
                    }
                    data['ans_keys'] = qObj.choice.ans
                    data['n_q_ans'] = qObj.choice.ans.length
                }
                // Question Title
                data['q_text'] = qObj.title

                if (qObj.items && qObj.items.length > 0) {
                    for (let i = 0; i < qObj.items.length; i++) {
                        const element = qObj.items[i];

                        // Question Code Data
                        if (element.type == 'code') {
                            if (!data['q_code'])
                                data['q_code'] = []
                            data['q_code'].push(element.data)
                        }
                    }
                }

                data['chapter-code-id'] = qObj.fsCollection.chapterName

                const spfKey = qObj.fsCollection.selectedCollectionName
                const collectionName = this.$store.state.collectionRelation[spfKey]['get']['question']['collectionName']

                // console.log(data);

                this.$store.dispatch('addNewDocument', {
                    dataObj: { ...data },
                    collectionName: collectionName,
                    requireUserInfo: true,
                    redirectPath: null
                }).then(() => {
                    console.log('FIN');
                }).catch((error) => {
                    console.log(error);
                })
            }
        },
        showCreateChapterModal(id) {
            modal = new bootstrap.Modal(this.$refs.createChapterModal, {})
            this.modalAccessId = id
            modal.show()
        },
        createNewChapter() {
            const spfKey = this.questions[this.modalAccessId].fsCollection.selectedCollectionName
            const collectionName = this.$store.state.collectionRelation[spfKey]['get']['chapter']['collectionName']
            this.$store.dispatch('addNewDocument', {
                dataObj: { ...this.newChapt },
                collectionName: collectionName,
                requireUserInfo: false,
                redirectPath: null
            }).then(() => {
                modal.hide()
            })
        }
    },
}
</script>