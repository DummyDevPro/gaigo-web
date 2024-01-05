<template>
    <nav id="top-nav-bar" class="navbar navbar-expand-lg navbar-dark g-web-bg sticky-top py-3">
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
                        <router-link :to="{ name: 'all-mondai' }" class="nav-link">問題一覧</router-link>
                    </li>

                    <router-link :to="{ name: 'student-projects' }" class="nav-link">学生製品</router-link>

                    <li v-if="getUserID != null">
                        <router-link :to="{ name: 'user-profile' }" class="nav-link">プロフィール</router-link>
                    </li>

                    <!-- <li v-if="getUserID != null">
                        <router-link :to="{ name: 'web-pamphlet' }" class="nav-link">パンフレット</router-link>
                    </li> -->

                    <!-- TODO: User Role -> Visible only admin -->
                    <router-link :to="{ name: 'all-years-schedule' }" class="nav-link">年間スケジュール</router-link>

                    <!-- <li class="nav-item">
                        <router-link to="/" class="nav-link active">About</router-link>
                        <a class="nav-link" href="#about">コース紹介</a>
                    </li> -->
                    <!-- <li v-if="getUserID == null" class="nav-item"> -->
                    <!-- <router-link to="/" class="nav-link">Services</router-link> -->
                    <!-- </li> -->
                    <!-- <li v-if="getUserID == null" class="nav-item"> -->
                    <!-- <a class="nav-link" href="#products">学生製品</a> -->
                    <!-- </li> -->
                    <!-- <li v-if="getUserID == null" class="nav-item"> -->
                    <!-- <router-link :to="{ name: 'contact-us' }" class="nav-link">お問い合わせ</router-link> -->
                    <!-- <a class="nav-link" href="#contactus">お問い合わせ</a> -->
                    <!-- </li> -->

                    <!-- TODO: Temporary Remove -->
                    <!-- <router-link :to="{ name: 'contact-us' }" class="nav-link">お問い合わせ</router-link> -->

                    <button v-if="getUserID != null" class="btn btn-logout" data-bs-toggle="modal"
                        data-bs-target="#logoutModal">ログアウト</button>
                </ul>
            </div>
        </div>
    </nav>

    <logout-modal></logout-modal>
</template>

<script>
import LogoutModal from './LogoutModal.vue';

export default {
    data() {
        return {
            uid: null
        }
    },
    components: {
        'logout-modal': LogoutModal
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

.btn-logout {
    width: fit-content;
    background-color: var(--color-white);
    color: var(--color-g-web);
    transition: all .2s ease;
}

.btn-logout:hover {
    color: white;
    outline: 1px solid white;
    background-color: transparent;
}
</style>