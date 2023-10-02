<template>
    <!-- Modal -->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="logoutModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="logoutModalLabel">Logout</h5>
                    <button ref="close" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ログアウトしますか？
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">いいえ</button>
                    <button type="button" class="btn btn-warning" @click="logoutAction">はい</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        logoutAction() {
            this.$store.dispatch('logoutAction')
        }
    },
    mounted() {
        this.$store.watch(
            (_, getters) => getters.logoutModalState,
            (newValue, _) => {
                if (newValue) {
                    this.$refs.close.click();
                    this.$router.replace({
                        name: 'home'
                    })
                    // reset
                    this.$store.dispatch('updateLogoutModal')
                }
            }
        )
    }
}
</script>