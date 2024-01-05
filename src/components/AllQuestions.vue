<template>
    <div class="row gy-4">
        <div class="col-xs-7 col-sm-6 col-md-4 col-lg-3" v-for="item in qnl">
            <div class="card">
                <img :src="item.photo" class="card-img-top" style="height: 150px;object-fit: scale-down;">

                <div class="card-body text-center">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <h6 class="card-subtitle mb-2 text-muted text-truncate">{{ item.sub_title }}
                    </h6>
                </div>

                <div class="card-footer text-center">
                    <router-link :to="{
                        name: 'questions', params: {
                            'specific': item.specific
                        }
                    }" class="btn btn-primary">チャレンジ</router-link>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="row">
        <div class="col-6 col-md-4 col-lg-3">
            <div class="card mb-3 position-relative overflow-hidden">
                <img src="@/assets/img/java-logo.png" class="card-img-top" alt="Java Bronze">
                <div class="card-body text-center">
                    <h5 class="card-title">Java In Class</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Multiple Choice Questions</h6>
                </div>
                <div class="card-footer text-center">
                    <router-link :to="{
                        name: 'questions', params: {
                            'specific': 'java-basic'
                        }
                    }" class="btn btn-primary">チャレンジ</router-link>
                </div>
            </div>
        </div>

        <div class="col-6 col-md-4 col-lg-3">
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
    </div> -->
</template>

<script>
export default {
    props: ['qnl']
}
</script>

<style scoped>
.card img {
    width: 75%;
    margin: 0 auto;
}
</style>