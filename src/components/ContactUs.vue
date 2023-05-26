<template>
    <div class="contact-form">
        <border-title :title_text="titleText" />
        <div class="contact-form-content p-3">
            <form action="">
                <div class="mb-3 row">
                    <label for="" class="col-12 col-sm-2 col-md-2 col-form-label">
                        氏名<span class="red-notice">*</span>
                    </label>

                    <div class="col-12 col-sm-5 col-md-5">
                        <label for="name-sei" class="form-label">姓</label>
                        <input type="text" class="form-control" id="name-sei" placeholder="必須" required>
                    </div>

                    <div class="col-12 col-sm-5 col-md-5">
                        <label for="name-mei" class="form-label">名</label>
                        <input type="text" class="form-control" id="name-mei" placeholder="必須" required>
                    </div>
                </div>

                <div class="mb-3 row">
                    <label for="email" class="col-12 col-sm-2 col-md-2 col-form-label">
                        メール<span class="red-notice">*</span>
                    </label>

                    <div class="col-12 col-sm-10 col-md-10">
                        <input type="email" class="form-control" id="email" placeholder="必須" required>
                    </div>
                </div>

                <div class="mb-3 row">
                    <label for="phone" class="col-12 col-sm-2 col-md-2 col-form-label">
                        携帯・固定電話<span class="red-notice">*</span>
                    </label>

                    <div class="col-12 col-sm-10 col-md-10">
                        <input type="tel" class="form-control" id="phone" placeholder="必須" required>
                    </div>
                </div>

                <div class="mb-3 row">
                    <label for="toiawase" class="col-12 col-sm-2 col-md-2 col-form-label">お問い合わせ内容</label>

                    <div class="col-12 col-sm-10 col-md-10">
                        <textarea class="form-control" id="toiawase" cols="30" rows="5" placeholder="任意"></textarea>
                        <!-- <input type="tel" class="form-control" id="email" placeholder="必須" required> -->
                    </div>
                </div>

                <div class="mb-3 row">
                    <div class="offset-sm-2 offset-md-2 col-12 col-sm-10 col-md-10">
                        <button class="btn btn-primary">送信</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import BorderTitle from './BorderTitle.vue';

export default {
    data() {
        return {
            titleText: 'お問い合わせ'
        }
    },
    components: {
        'border-title': BorderTitle
    }
}
</script>

<style scoped>
:is(input[type="text"], input[type="email"], input[type="tel"], #toiawase):focus {
    border-color: var(--color-g-web);
    box-shadow: 3.5px 3.5px 0 var(--color-pale-g-web),
        -3.5px -3.5px 0 var(--color-pale-g-web),
        3.5px -3.5px 0 var(--color-pale-g-web),
        -3.5px 3.5px 0 var(--color-pale-g-web);
}

.red-notice {
    color: red;
}
</style>