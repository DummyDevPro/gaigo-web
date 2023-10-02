<template>
    <div class="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
        <form action="">
            <h3 class="text-center">アカウント登録</h3>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">メールアドレス<small class="text-danger">*</small></label>
                <input v-model="email" type="email" class="form-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp" required>
                <div id="emailHelp" class="form-text">あなたのメールを他の人と共有することは決してありません。</div>
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">パスワード<small class="text-danger">*</small></label>
                <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" required>
            </div>

            <div class="mb-3">
                <input type="submit" class="btn btn-success full-width" value="アカウント登録">
            </div>
        </form>
    </div>
</template>
<script></script>
<style scoped></style>