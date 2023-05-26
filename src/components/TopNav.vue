<template>
    <nav class="navbar navbar-expand-md navbar-dark g-web-bg sticky-top py-3">
        <div class="container-fluid">
            <router-link :to="{ name: 'home' }" class="navbar-brand" aria-current="page">
                Webプログラミングコース
            </router-link>
            <!-- <a class="navbar-brand" aria-current="page" href="#">Web Programming Course</a> -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li v-if="getUserID != null">
                        <router-link :to="{ name: 'web-pamphlet' }" class="nav-link">パンフレット</router-link>
                    </li>

                    <li v-if="getUserID != null">
                        <router-link :to="{ name: 'all-mondai' }" class="nav-link">問題一覧</router-link>
                    </li>

                    <li v-if="getUserID != null">
                        <router-link :to="{ name: 'user-profile' }" class="nav-link">プロフィール</router-link>
                    </li>
                    <!-- <li class="nav-item">
                        <router-link to="/" class="nav-link active">About</router-link>
                        <a class="nav-link" href="#about">コース紹介</a>
                    </li> -->
                    <li v-if="getUserID == null" class="nav-item">
                        <!-- <router-link to="/" class="nav-link">Services</router-link> -->
                        <a class="nav-link" href="#services">サービス</a>
                    </li>
                    <li v-if="getUserID == null" class="nav-item">
                        <!-- <router-link to="/" class="nav-link">Products</router-link> -->
                        <a class="nav-link" href="#products">学生製品</a>
                    </li>
                    <li v-if="getUserID == null" class="nav-item">
                        <router-link :to="{ name: 'contact-us' }" class="nav-link">お問い合わせ</router-link>
                        <!-- <a class="nav-link" href="#contactus">お問い合わせ</a> -->
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            uid: null
        }
    },
    computed: {
        getUserID() {
            return this.$store.getters.acquireUserID
        }
    }
}
</script>

<style scoped>
.navbar-brand::before {
    content: '沖縄ビジネス外語学院';
    position: absolute;
    font-size: .65rem;
    top: -.5rem;
    left: .25rem;
    font-weight: normal;
}

.navbar-brand {
    position: relative;
    font-size: 1.25rem !important;
    letter-spacing: 1px;
    font-weight: 600;
}
</style>