<template>
    <div class="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
        <div v-if="errorMsg != ''" class="bg-danger text-white p-3 mb-3">
            {{ errorMsg }}
        </div>
        <form @submit.prevent="loginAction">
            <h3 class="text-center">ログイン</h3>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">メールアドレス<small class="text-danger">*</small></label>
                <div class="input-group mb-3">
                    <div class="input-group-text">
                        <i class="bi bi-envelope-at-fill"></i>
                    </div>
                    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" required>
                </div>
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">パスワード<small class="text-danger">*</small></label>
                <div class="input-group mb-3">
                    <input v-model="password" :type="pwdShowHide ? 'password' : 'text'" class="form-control"
                        id="exampleInputPassword1" required>
                    <div class="input-group-text" @click="pwdShowHideAction">
                        <i class="bi" :class="pwdShowHide ? 'bi-eye-fill' : 'bi-eye-slash-fill'"></i>
                        <!-- <i class="bi bi-eye-slash-fill"></i> -->
                    </div>
                </div>
            </div>

            <div class="mb-3">
                <input type="submit" class="btn btn-primary full-width" value="ログイン">
            </div>
        </form>
        <div class="text-center">
            <router-link :to="{ name: 'renew-pass' }">パスワードを忘れた場合</router-link>
        </div>

        <hr class="mb-3">

        <div class="mb-3">
            <router-link :to="{ name: 'create-acccount' }" class="btn btn-success full-width">新しいアカウントを作成</router-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            'email': '',
            'password': '',
            'errorMsg': '',
            'pwdShowHide': true
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
        },
        pwdShowHideAction() {
            this.pwdShowHide = !this.pwdShowHide
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
<style scoped></style>