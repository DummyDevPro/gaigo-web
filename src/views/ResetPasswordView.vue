<template>
    <div v-if="error === ''" class="my-3">
        <h3 class="text-info text-center">URL Validating Process</h3>
    </div>
    <div v-else-if="error == true" class="my-3">
        <h3 class="text-danger text-center">Your password reset link is invalid.</h3>
    </div>
    <div v-else class="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
        <form @submit.prevent="resetPassword">
            <h3 class="text-center mb-3">パスワードの再設定</h3>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">パスワード<small class="text-danger">*</small></label>
                <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" required>
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword2" class="form-label">パスワードの再入力<small class="text-danger">*</small></label>
                <input v-model="repassword" type="password" class="form-control" id="exampleInputPassword2" required>
            </div>

            <div class="mb-3">
                <input type="submit" class="btn btn-primary full-width" value="パスワードの再設定">
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            error: '',
            mode: '',
            oobCode: '',
            apiKey: '',
            lang: '',
            password: '',
            repassword: '',
        }
    },
    created() {
        this.mode = this.$route.query.mode
        this.oobCode = this.$route.query.oobCode
        this.apiKey = this.$route.query.apiKey
        this.lang = this.$route.query.lang
    },
    methods: {
        resetPassword() {
            if (this.password && this.password.length > 8 && this.password === this.repassword) {
                this.$store.dispatch('resetPassword',
                    {
                        'oobCode': this.oobCode,
                        'password': this.password
                    }
                )
            }
        }
    },
    mounted() {
        this.$store.dispatch('resetPasswordLinkValidCheck',
            {
                'oobCode': this.oobCode
            })

        this.$store.watch(
            (state) => state.authMsg.resetPass.error,
            () => {
                this.error = true
                console.log(this.error);
            },
            { deep: true }
        )

        this.$store.watch(
            (state) => state.authMsg.resetPass.success,
            () => {
                this.error = false
            },
            { deep: true }
        )
    }
}
</script>
<style></style>