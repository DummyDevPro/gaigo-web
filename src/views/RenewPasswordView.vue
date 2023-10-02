<template>
    <div class="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
        <form @submit.prevent="renewPasswordByMail">
            <h3 class="text-center mb-3">新しいパスワードの作成</h3>
            <div class="input-group mb-3">
                <input type="email" class="form-control" placeholder="yourmail@gmail.com" aria-label="Renew Password"
                    aria-describedby="button-addon2" v-model="email" required>
                <!-- <button class="btn btn-outline-primary" type="button" id="button-addon2">送信</button> -->
                <input type="submit" value="送信" class="btn btn-primary">
            </div>
        </form>
    </div>
    <div class="text-center mb-3 d-flex flex-column">
        <small v-if="error" class="text-danger">{{ error }}</small>
        <small v-if="success" v-for="obj in success" class="text-success">{{ obj }}</small>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            error: null,
            success: null
        }
    },
    methods: {
        renewPasswordByMail() {
            this.error = null
            this.success = null

            this.$store.dispatch('renewPasswordByMail',
                {
                    email: this.email
                }
            )
        }
    },
    mounted() {
        this.$store.watch(
            (state) => state.authMsg.renewPass.error,
            () => {
                this.error = `【${this.email}】のユーザーアカウントのがありません。`
            },
            { deep: true }
        )

        this.$store.watch(
            (state) => state.authMsg.renewPass.success,
            () => {
                this.success = [
                    `${this.email}`,
                    `にパスワードリセットするためのURLを送りました。`,
                    `メールで確認してください。`
                ]
            },
            { deep: true }
        )
    }
}
</script>