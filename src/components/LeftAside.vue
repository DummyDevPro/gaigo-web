<template>
    <div class="left-aside-content d-flex flex-column gap-3 p-3">
        <div class="account-info-form d-flex flex-column gap-2 p-3 border border-success rounded">
            <div v-if="getUserID == null" class="login-acc">
                <button class="btn btn-outline-success w-100" data-bs-toggle="modal"
                    data-bs-target="#loginModal">ログイン</button>
            </div>

            <div v-if="getUserID == null" class="create-acc">
                <button @click="createNewAccount" class="btn btn-outline-primary w-100">新規作成</button>
            </div>

            <div v-if="getUserID != null" class="logout-acc">
                <button class="btn btn-outline-danger w-100" data-bs-toggle="modal"
                    data-bs-target="#logoutModal">ログアウト</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        getUserID() {
            return this.$store.getters.acquireUserID
        }
    },
    methods: {
        createNewAccount() {
            this.$store.dispatch('createNewAccountWithEmailAndPassword')
        }
    }
}
</script>

<style scoped>
@media (max-width: 991.98px) {

    .left-aside-content {
        width: fit-content;
        margin: 0 auto;
    }

    .account-info-form {
        width: fit-content;
        flex-direction: row !important;
    }

    .account-info-form button {
        padding-left: 2rem;
        padding-right: 2rem;
    }
}
</style>