<template>
    <div class="curriculum-box m-b-5">
        <border-title :title_text="titleText" />
        <div class="curriculum-content p-3">

            <table class="other-field">
                <tr v-for="(obj, key) in fileds.other">
                    <td class="other-field-title">
                        {{ key }}
                    </td>
                    <td>
                        <span class="other-field-items">
                            <span v-for="inObj in obj">
                                <span class="circle"></span>
                                <span>{{ inObj }}</span>
                            </span>
                        </span>
                    </td>
                </tr>
            </table>

            <div class="special-field">
                <div class="special-field-title">
                    専門分野
                </div>
                <div class="special-field-items">
                    <span v-for="obj in fileds.specialized">
                        <span class="circle"></span>
                        <span>{{ obj }}</span>
                    </span>
                </div>
            </div>
            <div class="text-center mt-3">
                <small>※カリキュラムは年度によって変更になる事があります。</small>
            </div>
        </div>
    </div>
</template>

<script>
import BorderTitle from './BorderTitle.vue';

export default {
    data() {
        return {
            titleText: 'カリキュラム',
            'fileds': {
                'specialized': [
                    'HTML/CSS',
                    'JavaScript',
                    'Java',
                    'Database',
                    'Framework'
                ],
                'other':
                {
                    '日本語分野': [
                        'JLPT対策'
                    ],
                    'ビジネス分野': [
                        'ビジネスマナー',
                        '就職対策'
                    ]
                }

            }
        }
    },
    components: {
        'border-title': BorderTitle
    }
}
</script>

<style scoped>
.curriculum-content>table {
    border-collapse: separate;
    border-spacing: 1.5rem .5rem;
    margin-bottom: 1rem;
}

.curriculum-content>table>tr>td {
    vertical-align: middle;
}

.other-field-title {
    color: var(--color-white);
    padding: .5rem .5rem .5rem 1rem;
    background-color: var(--color-g-web);
    border-radius: 1rem 0% 0% 1rem;
}

.other-field-items {
    display: flex;
    gap: .5rem;
}

.other-field-items>span {
    display: flex;
    align-items: center;
    gap: .25rem;
}

.circle {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: var(--color-g-web);
}

.special-field {
    margin-left: 1.5rem;
    display: flex;
    gap: 1rem;
}

.special-field-title {
    color: var(--color-white);
    writing-mode: vertical-lr;
    padding: 1.5rem .75rem;
    background-color: var(--color-g-web);
    border-radius: 1rem 0% 0% 1rem;
    letter-spacing: .25rem;
}

.special-field-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.special-field-items>span {
    display: flex;
    gap: .25rem;
    align-items: center;
}
</style>