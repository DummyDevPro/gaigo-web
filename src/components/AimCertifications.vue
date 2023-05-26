<template>
    <div class="aim-certification-box m-b-5">
        <border-title :title_text="titleText" />
        <div class="aim-certification-content p-3">
            <div class="items">
                <div v-for="cert in certificationList" class="item">
                    <span class="circle"></span>
                    <span>{{ cert }}</span>
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
            titleText: '目指す資格',
            certificationList: [
                'Java Oracle Bronze',
                'CompTIA IT Fundamentals'
            ]
        }
    },
    components: {
        'border-title': BorderTitle
    }
}
</script>


<style scoped>
.items {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}

.item {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .25rem;
}

.circle {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background-color: var(--color-g-web);
    border-radius: 50%;
}
</style>