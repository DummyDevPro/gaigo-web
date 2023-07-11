<template>
    <div class="wrapper">
        <div v-if="overallContent" class="page-header text-center">
            <h1>{{ overallContent[0]['chapter-title'] }}</h1>
            <h2 class="text-secondary">{{ overallContent[0]['chapter-subtitle'] }}</h2>
        </div>
        <div class="questions-grid col-11 col-sm-11 col-md-11 col-md-9 col-lg-7">
            <div v-if="questionsList != null && questionsList.length != 0" class="qiestion-item overflow-auto">
                <div class="question-title d-flex mb-3 p-2">
                    <span class="q-no">{{ `(${currentIndex + 1})` }}</span>
                    <span class="q-text">{{ questionsList[currentIndex]['q_text'] }}</span>
                </div>

                <div v-if="questionsList[currentIndex]['q_code']" class="question-code p-2">
                    <pre v-for="qCode in questionsList[currentIndex]['q_code']"
                        class="code-layout ps-3"><code><ol><li v-for="(line, index) in formattingJavaCode(qCode)">{{ line.textContent }}</li></ol></code></pre>
                    <!-- <span v-for="(line, index) in formattingJavaCode(qCode)"><span class="d-flex"><span class="pe-3 prevent-select" style="flex: 0 0 3.5rem;text-align: right;">{{ index + 1 + '.' }}</span><span style="display: inline-block;">{{ line.textContent }}</span></span></span> -->
                </div>

                <div class="question-code-output p-2 mb-3" v-if="questionsList[currentIndex]['q_code_output']">
                    <p>【表示結果】</p>
                    <div class="bg-code-output px-2 py-3">
                        <p class="text-output" v-for="output in questionsList[currentIndex]['q_code_output']">{{ output }}
                        </p>
                    </div>
                </div>

                <div class="question-code-run p-2 mb-3" v-if="questionsList[currentIndex]['q_code_run']">
                    <p>【実行方法】</p>
                    <div class="bg-code-output px-2 py-3">
                        <p class="text-output" v-for="output in questionsList[currentIndex]['q_code_run']">{{ output }}</p>
                    </div>
                </div>

                <div class="question-choice ps-4 pe-4 mb-3 d-flex flex-column gap-3">
                    <div class="d-flex align-items-start" v-for="choice, key in questionsList[currentIndex]['ans_choices']">
                        <div>
                            <input type="checkbox" :value="key" v-model="selectedItems" :id="key" :disabled="selectedItems.length == questionsList[currentIndex]['n_q_ans']
                                && selectedItems.indexOf(key) == -1" @click="userTakeAction">
                        </div>
                        <div>
                            <label :for="key" class="ps-2 d-block" v-for="ch in formatChoice(choice)">{{ ch }}</label>
                        </div>
                    </div>
                </div>

                <div class="question-change-actions">
                    <button @click="changeQuestion('minus')" class="g-web-bg p-2 back rounded"
                        :class="currentIndex == 0 ? 'btn-remove' : ''">戻る</button>

                    <button @click="changeQuestion('plus')" class="g-web-bg p-2 next rounded"
                        :class="currentIndex == (questionsList.length - 1) ? 'btn-remove' : ''">次</button>

                    <button @click="addNewDocument" class="btn btn-success"
                        v-if="currentIndex == (questionsList.length - 1)">完了</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['specific', 'chapter'],
    data() {
        return {
            'overallContent': null,
            'questionName': this.specific,
            'chapterId': this.chapter,
            'questionsList': null,
            'currentIndex': 0,
            'selectedItems': [],
            'isSubmit': false,
            'isChanges': false
        }
    },
    methods: {
        userTakeAction() {
            this.isChanges = true;
        },
        beforeUnloadListener(event) {
            event.preventDefault();
            event.returnValue = "Check";
            return false
        },
        changeQuestion(action) {
            if (action == 'plus') {
                this.currentIndex++;
            } else {
                this.currentIndex--;
            }

            if (this.questionsList != null && this.questionsList[this.currentIndex]['your_ans_keys']) {
                this.selectedItems = this.questionsList[this.currentIndex]['your_ans_keys']
            } else {
                this.selectedItems = []
            }
        },
        formattingJavaCode(data) {
            const codeArray = data.trim().split(/[\s]{4}/)
            let htmlCode = []
            let spaceCount = 0
            codeArray.forEach(element => {
                if (element == '') {
                    spaceCount += 1
                } else {
                    let spaceText = '';
                    for (let i = 0; i < spaceCount; i++) {
                        spaceText += '\xa0\xa0\xa0\xa0'
                    }
                    htmlCode.push({
                        'textContent': spaceText + element.trim()
                    })
                    spaceCount = 0
                }
            })
            return htmlCode
        },
        shuffleArray(arr) {
            // return arr
            return arr.sort(() => Math.random() - 0.5)
        },
        formatChoice(str) {
            return str.split(/\\n/)
        },
        addNewDocument() {
            window.removeEventListener('beforeunload', this.beforeUnloadListener, { capture: true })
            if (confirm("試験完了で宜しいですか？") == true) {
                this.isSubmit = true
                let totalTrueCount = 0
                this.questionsList.forEach(element => {
                    if (element['result'] != null && element['result']) {
                        totalTrueCount++
                    }
                });
                this.$store.dispatch('addNewDocument', {
                    'answers': this.questionsList,
                    'total-correct-count': totalTrueCount,
                    'total-question-count': this.questionsList.length,
                    'chapter-code-id': this.chapter
                })
            }
        }
    },
    unmounted() {
        window.removeEventListener('beforeunload', this.beforeUnloadListener, { capture: true })
    },
    created() {
        window.addEventListener('beforeunload', this.beforeUnloadListener, { capture: true })
    },
    beforeMount() {
        window.addEventListener('beforeunload', this.beforeUnloadListener, { capture: true })
    },
    beforeRouteUpdate() { },
    beforeRouteLeave(to, from, next) {
        if (!this.isSubmit && this.isChanges) {
            const answer = window.confirm('Do you really want to leave? You have unsaved changes!')
            if (!answer) {
                next(false)

                return;
            }
            // else {
            //     // { name: to.name, replace: true }
            //     next()
            // }
        }
        // else {
        next()
        // }
    },
    mounted() {
        this.$store.watch(
            (_, getters) => getters.acquireQuestionsData(this.questionName),
            (newValue, _) => {
                this.questionsList = this.shuffleArray(newValue)
                if (this.questionsList != null && this.questionsList.length > 0) {
                    this.questionsList[0]['your_ans_keys'] = []
                }
                // this.currentIndex = newValue.length - 1
            }
        )

        this.$store.dispatch('getCollectionData', {
            firstAccessCode: this.questionName,
            method: 'get',
            collectionKey: 'question',
            whereValue: this.chapterId,
            whereOperator: '=='
        })

        this.overallContent = this.$store.getters.acquireOneChapterData({ 'questionName': this.questionName, 'chapterId': this.chapterId })
    },
    watch: {
        selectedItems: function (value) {
            if (this.questionsList[this.currentIndex]['ans_keys'].length == value.length) {
                let flg = true;
                value.forEach(ans => {
                    if ((this.questionsList[this.currentIndex]['ans_keys']).indexOf(ans) == -1) {
                        flg = false;
                    }
                });
                this.questionsList[this.currentIndex]['result'] = flg;
            } else {
                this.questionsList[this.currentIndex]['result'] = false;
            }
            this.questionsList[this.currentIndex]['your_ans_keys'] = value

            // console.log(JSON.stringify(this.questionsList[this.currentIndex]))
        }
    }
}
</script>

<style scoped>
.text-output {
    margin: 0;
}

.code-layout {
    font-size: 1rem;
    background-color: #f5f2f0;
    padding: .75rem .25rem;
}

.prevent-select {
    -webkit-user-select: none;
    /* Safari */
    -ms-user-select: none;
    /* IE 10 and IE 11 */
    user-select: none;
    /* Standard syntax */
}

.btn-remove {
    display: none;
    /* background-color: gray;
    pointer-events: none; */
}

.qiestion-item {
    border: 1px solid var(--color-g-web);
    border-radius: .25rem;
}

.question-change-actions {
    display: flex;
}

.question-change-actions>button {
    flex: 1;
    border: 1px solid var(--color-white);
    color: var(--color-white);
    font-weight: bold;
    transition: all .5s;
}

.question-change-actions>button.back {
    border-bottom-left-radius: .25rem;
}

.question-change-actions>button.next {
    border-bottom-right-radius: .25rem;
}

.question-change-actions>button:hover {
    color: var(--color-g-web);
    background-color: var(--color-pale-g-web);
}

.q-no {
    font-weight: bold;
}

.q-text {
    display: inline-block;
    text-indent: .25rem;
}

.questions-grid {
    margin: 3rem auto;
    display: flex;
    justify-content: center;
}

.questions-grid>div {
    width: 100%;
    /* flex: 0 0 75%; */
}

.questions-grid ol {
    margin: 0;
}

@media (max-width: 991.98px) {
    /* .questions-grid>div { */
    /* flex: 0 0 95%; */
    /* } */
}
</style>