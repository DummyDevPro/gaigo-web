<template>
    <div class="wrapper">
        <div class="exam-result-header text-center">
            <h1>Check Answers</h1>
        </div>
        <div class="exam-result-detail col-11 col-sm-11 col-md-11 col-md-9 col-lg-7">
            <div v-if="answerData" class="qiestion-item overflow-auto">
                <div class="question-title d-flex mb-3 p-2">
                    <span class="q-no">{{ `(${currentIndex + 1})` }}</span>
                    <span class="q-text">{{ answerData['answers'][currentIndex]['q_text'] }}</span>
                </div>

                <div v-if="answerData['answers'][currentIndex]['q_code']" class="question-code p-2">
                    <pre v-for="qCode in answerData['answers'][currentIndex]['q_code']"
                        class="code-layout ps-3"><code><ol><li v-for="(line, index) in formattingJavaCode(qCode)">{{ line.textContent }}</li></ol></code></pre>
                    <!-- <span v-for="(line, index) in formattingJavaCode(qCode)"><span class="d-flex"><span class="pe-3 prevent-select" style="flex: 0 0 3.5rem;text-align: right;">{{ index + 1 + '.' }}</span><span style="display: inline-block;">{{ line.textContent }}</span></span></span> -->
                </div>

                <div class="question-code-output p-2 mb-3" v-if="answerData['answers'][currentIndex]['q_code_output']">
                    <p>【表示結果】</p>
                    <div class="bg-code-output px-2 py-3">
                        <p class="text-output" v-for="output in answerData['answers'][currentIndex]['q_code_output']">
                            {{ output }}
                        </p>
                    </div>
                </div>

                <div class="question-code-run p-2 mb-3" v-if="answerData['answers'][currentIndex]['q_code_run']">
                    <p>【実行方法】</p>
                    <div class="bg-code-output px-2 py-3">
                        <p class="text-output" v-for="output in answerData['answers'][currentIndex]['q_code_run']">{{ output
                        }}</p>
                    </div>
                </div>

                <div class="question-choice ps-4 pe-4 mb-3 d-flex flex-column gap-3">
                    <div class="d-flex align-items-start"
                        v-for="choice, key in answerData['answers'][currentIndex]['ans_choices']">
                        <div>
                            <input type="checkbox" :value="key" :id="key"
                                :checked="answerData['answers'][currentIndex]['your_ans_keys']?.indexOf(key) != -1"
                                disabled>
                        </div>
                        <div>
                            <label :for="key" :class="answerData['answers'][currentIndex]['your_ans_keys']?.indexOf(key) != -1 ?
                                answerData['answers'][currentIndex]['ans_keys'].indexOf(key) != -1 ?
                                    'bg-ok' : 'bg-ng' : answerData['answers'][currentIndex]['ans_keys'].indexOf(key) != -1 ?
                                    'bg-ans' : ''" class="ps-2 d-block" v-for="ch in formatChoice(choice)">
                                {{ ch }}
                                <!-- <span v-if="answerData['answers'][currentIndex]['ans_keys'].indexOf(key) != -1">
                                    <i class="bi bi-check-circle-fill text-success"></i>
                                </span> -->
                            </label>
                        </div>
                    </div>
                </div>

                <div class="question-change-actions">
                    <button @click="changeQuestion('minus')" class="g-web-bg p-2 back rounded"
                        :class="currentIndex == 0 ? 'btn-remove' : ''">戻る</button>

                    <button @click="changeQuestion('plus')" class="g-web-bg p-2 next rounded"
                        :class="currentIndex == (answerData['answers'].length - 1) ? 'btn-remove' : ''">次</button>

                    <button @click="backToProfile" class="btn btn-success"
                        v-if="currentIndex == (answerData['answers'].length - 1)">試験履歴へ戻る</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['examId'],
    data() {
        return {
            'currentIndex': 0,
            'answerData': null
        }
    },
    methods: {
        backToProfile() {
            this.$store.dispatch('backOneHistory')
        },
        changeQuestion(action) {
            if (action == 'plus') {
                this.currentIndex++;
            } else {
                this.currentIndex--;
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
        formatChoice(str) {
            return str.split(/\\n/)
        }
    },
    created() {
        this.answerData = this.$store.getters.acquireOneAnswersData({
            'key': 'all-answers',
            'docId': this.examId
        })?.[0]

        // console.log(this.answerData?.answers?.[this.currentIndex]);
    }
}
</script>
<style scoped>
.btn-remove {
    display: none;
    /* background-color: gray;
    pointer-events: none; */
}

.text-output {
    margin: 0;
}

.code-layout {
    font-size: 1rem;
    background-color: #f5f2f0;
    padding: .75rem .25rem;
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

.exam-result-detail {
    margin: 3rem auto;
}

.bg-ng {
    background-color: rgb(231, 73, 73);
}

.bg-ok {
    background-color: rgb(73, 231, 73);
}

.bg-ans {
    background-color: rgb(75, 198, 203);
}
</style>