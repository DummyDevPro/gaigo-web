<template>
    <div class="coach-box m-b-5">
        <border-title :title_text="titleText" />
        <div class="coach-content p-3">
            <div class="pic">
                <img src="@/assets/img/hmm-01.jpg" alt="Coach Pic">
            </div>
            <div class="pic-detail">
                <p class="pf-name">{{ profile.name }}</p>
                <p class="pf-country">{{ profile.country }}</p>
                <p class="pf-message">{{ profile.message }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import BorderTitle from './BorderTitle.vue';

export default {
    data() {
        return {
            'titleText': 'コーチ',
            'profile': {
                'name': 'トウン　ミャツ　モー',
                'country': '（ミャンマー出身）',
                'message': 'プログラミングはコツさえ覚えれば、面白いほど出来るようになります。IT業界で得た私のスキルを身に着けて、就職に役に立っててください！'
            }
        }
    },
    components: {
        'border-title': BorderTitle
    }
}
</script>

<style scoped>
.coach-content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    place-items: center;
    place-content: center;
}

.coach-content>.pic {
    padding: .5rem;
}

.coach-content>.pic>img {
    width: 100%;
}

.coach-content>.pic-detail {
    font-size: .9rem;
    padding: .5rem;
}

.pf-country {
    text-align: right;
}

.pf-message {
    text-indent: 2rem;
    text-align: justify;
}

@media (max-width: 991.98px) {
    .coach-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .coach-content>.pic {
        flex: 1 1 15rem;
    }

    .coach-content>.pic-detail {
        flex: 1 1 15rem;
    }
}

@media (max-width: 518px) {
    .coach-content {
        display: flex;
        flex-direction: column;
    }

    .coach-content {
        width: 75%;
        margin: 0 auto;
    }
}
</style>