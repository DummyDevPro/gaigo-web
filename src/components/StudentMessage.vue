<template>
    <div class="std-msg-box mt-5">
        <border-title :title_text="titleText" />
        <div class="std-msg-content p-3">
            <div class="std-msg-list">
                <div v-for="obj in msgList" class="std-msg-item">
                    <img src="@/assets/img/hmm-01.jpg" alt="">
                    <p class="name-en">{{ obj.nameEn }}</p>
                    <p class="name-jp">{{ obj.nameJp }}</p>
                    <p class="txt-country">{{ '出身国：' + obj.country }}</p>
                    <p class="txt-message">{{ obj.message }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BorderTitle from './BorderTitle.vue';

export default {
    data() {
        return {
            'titleText': '在校生からのメッセージ',
            'msgList': [
                {
                    'nameJp': 'コントゥラミンウー',
                    'nameEn': 'KHUN THU RA MIN OO',
                    'img': 'hmm-01.jpg',
                    'country': 'ミャンマー',
                    'message': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt quidem earum officiis consequatur delectus magnam, harum nesciunt repellat esse ducimus iusto dolore rem nihil, amet quia voluptate. Culpa, voluptas.',
                },
                {
                    'nameJp': 'コントゥラミンウー',
                    'nameEn': 'KHUN THU RA MIN OO',
                    'img': 'hmm-01.jpg',
                    'country': 'ミャンマー',
                    'message': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt quidem earum officiis consequatur delectus magnam, harum nesciunt repellat esse ducimus iusto dolore rem nihil, amet quia voluptate. Culpa, voluptas.',
                }, {
                    'nameJp': 'コントゥラミンウー',
                    'nameEn': 'KHUN THU RA MIN OO',
                    'img': 'hmm-01.jpg',
                    'country': 'ミャンマー',
                    'message': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt quidem earum officiis consequatur delectus magnam, harum nesciunt repellat esse ducimus iusto dolore rem nihil, amet quia voluptate. Culpa, voluptas.',
                },
                {
                    'nameJp': 'コントゥラミンウー',
                    'nameEn': 'KHUN THU RA MIN OO',
                    'img': 'hmm-01.jpg',
                    'country': 'ミャンマー',
                    'message': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt quidem earum officiis consequatur delectus magnam, harum nesciunt repellat esse ducimus iusto dolore rem nihil, amet quia voluptate. Culpa, voluptas.',
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
.std-msg-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    column-gap: 1rem;
    row-gap: 1rem;
}

.std-msg-item>img {
    width: 100%;
    display: block;
    margin: 0 auto;
}

.std-msg-item>p {
    margin: 0;
}

.name-en {
    font-size: .9rem;
    text-align: center;
    border-bottom: 1px solid var(--color-g-web);
}

.name-jp {
    font-size: .9rem;
    text-align: center;
    border-top: 1px solid var(--color-g-web);
}

.txt-country {
    font-weight: bold;
    font-size: .8rem;
    margin-bottom: .5rem !important;
}

.txt-message {
    text-indent: 3rem;
    text-align: justify;
}

@media (max-width: 518px) {
    .std-msg-list {
        display: flex;
        flex-direction: column;
    }

    .std-msg-item {
        width: 75%;
        margin: 0 auto;
    }
}
</style>