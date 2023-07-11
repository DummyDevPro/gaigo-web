<template>
    <!-- Modal -->
    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="loginModalLabel">ログイン</h5>
                    <button ref="close" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div v-if="errorMsg != ''" class="bg-danger text-white p-3 mb-3">
                        {{ errorMsg }}
                    </div>
                    <form @submit.prevent="loginAction">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">メールアドレス<small
                                    class="text-danger">*</small></label>
                            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" required>
                            <div id="emailHelp" class="form-text">あなたのメールを他の人と共有することは決してありません。</div>
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">パスワード<small
                                    class="text-danger">*</small></label>
                            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1"
                                required>
                        </div>

                        <div class="mb-3 d-flex justify-content-between">
                            <button type="submit" class="btn btn-primary">実行</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">閉じる</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            'email': '',
            'password': '',
            'errorMsg': ''
        }
    },
    methods: {
        loginAction() {
            this.$store.dispatch('loginAction',
                {
                    'email': this.email,
                    'password': this.password
                }
            )
        }
    },
    mounted() {
        this.$store.watch(
            (_, getters) => getters.loginModalState,
            (newValue, _) => {
                if (newValue) {
                    this.email = ''
                    this.password = ''
                    this.$refs.close.click();
                    this.$store.dispatch('updateLoginModal')
                }
            }
        )

        this.$store.watch(
            (_, getters) => getters.loginModalMsgState,
            (newValue, _) => {
                if (newValue != '' && newValue != null) {
                    this.errorMsg = newValue
                }
            }
        )
    }
}
</script>