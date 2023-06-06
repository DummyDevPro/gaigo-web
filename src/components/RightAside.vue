<template>
    <div class="right-aside-content p-3">
        <div class="middle-content-indexes-listes">
            <div class="mb-4">
                <div class="middle-content-indexes-listes-title">
                    <h6>コース紹介</h6>
                </div>
                <div class="middle-content-indexes-listes-list">
                    <router-link :to="{ hash: '#_strongPoint' }">コースの特長</router-link>
                    <router-link :to="{ hash: '#_certification' }">目指す資格</router-link>
                    <router-link :to="{ hash: '#_curriculum' }">カリキュラム</router-link>
                </div>
            </div>

            <div class="mb-4">
                <div class="middle-content-indexes-listes-title">
                    <h6>コーチ</h6>
                </div>
                <div class="middle-content-indexes-listes-list">
                    <router-link :to="{ hash: '#_coach' }">メインコーチ</router-link>
                    <a href="" class="link-disabled">コーチ一覧</a>
                </div>
            </div>

            <div class="mb-4">
                <div class="middle-content-indexes-listes-title">
                    <h6>学生からのメッセージ</h6>
                </div>
                <div class="middle-content-indexes-listes-list">
                    <router-link :to="{ hash: '#_studentMsg' }">在校生からのメッセージ</router-link>
                    <a href="" class="link-disabled">卒業生からのメッセージ</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.link-disabled {
    color: gray !important;
    pointer-events: none;
    border-bottom: 1px solid gray !important;
}

.middle-content-indexes-listes-list {
    display: flex;
    flex-direction: column;
}

.middle-content-indexes-listes-list a {
    font-size: .9rem;
    padding: .5rem;
    margin-left: .5rem;
    text-decoration: none;
    color: var(--color-g-web);
    border-bottom: 1px solid var(--color-g-web);
}

.middle-content-indexes-listes-list a:hover {
    background-color: var(--color-pale-g-web);
}

.middle-content-indexes-listes-list a:focus {
    background-color: var(--color-pale-g-web);
}
</style>