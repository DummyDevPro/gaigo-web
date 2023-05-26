<template>
    <div class="course-merit-box m-b-5">
        <border-title :title_text="titleText" />
        <div class="course-merit-content p-3">
            <div v-for="(point, index) in courseMeritPoint" class="item">
                <p class="item-title">{{ (index + 1) + '. ' + point.title }}</p>
                <p class="item-detail">{{ point.detail }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import BorderTitle from './BorderTitle.vue';

export default {
    data() {
        return {
            titleText: 'コースの特長',
            courseMeritPoint: [
                {
                    title: 'パソコン未経験者でも安心',
                    detail: 'プログラミング知識がない未経験者でも、IT業界出身の講師が基礎から丁寧に指導するので安心。'
                },
                {
                    title: '創りながら学ぶ「実践的カリキュラム」',
                    detail: '実際にIT業界で働くことを想定したアプリ開発プロジェクトを通して、実践的なスキルを習得。'
                },
                {
                    title: 'プログラミングを学んで就職に勝つ',
                    detail: '近年ますますニーズが高まっているWebプログラマやアプリ開発プログラマ、システムエンジニア等を目指します。'
                }
            ]
        }
    },
    components: {
        'border-title': BorderTitle
    }
}
</script>

<style scoped>
.item-title {
    color: var(--color-g-web);
    font-weight: bold;
    margin-bottom: 0;
}

.item-title::first-letter {
    font-size: 2rem;
}

.item-detail {
    font-size: .9rem;
    margin-left: 2rem;
}
</style>