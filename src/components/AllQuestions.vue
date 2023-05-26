<template>
    <div class="row">
        <div class="col-6">
            <div class="card mb-3 position-relative overflow-hidden">
                <img src="@/assets/img/java_bronze.png" class="card-img-top" alt="Java Bronze">
                <div class="card-body text-center">
                    <h5 class="card-title">Java Bronze</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Exam Practice Questions</h6>
                </div>
                <div class="card-footer text-center">
                    <router-link :to="{
                        name: 'questions', params: {
                            'specific': 'java-bronze'
                        }
                    }" class="btn btn-primary">チャレンジ</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card img {
    width: 75%;
    margin: 0 auto;
}

.ul-wrapper {
    color: var(--color-g-web);
    margin: 0;
    padding-left: 1.5rem;
    text-indent: 1rem;
}

.ul-wrapper li::marker {
    content: '✓';
    color: var(--color-g-web);
    font-weight: bold;
    font-size: 1.25rem;
}
</style>