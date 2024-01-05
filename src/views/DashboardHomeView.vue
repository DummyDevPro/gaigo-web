<template>
    <current-datetime-comp />
    <div class="text-center recent-activity bg-light py-5">
        <span class="fs-6 text-secondary">There is no recent activity.</span>
    </div>

    <div>
        <div class="calendar"></div>
    </div>

    <div class="row text-center gy-4 p-4 m-0">
        <div class="col-12 col-sm-6 col-md-4">
            <a href="" class="btn btn-primary d-block py-5 fs-6">メモ</a>
        </div>
        <!-- <div class="col-12 col-sm-6 col-md-4">
            <router-link :to="{ name: 'create-exam' }" class="btn btn-primary d-block py-5 fs-6">問題作成</router-link>
        </div> -->
        <div class="col-12 col-sm-6 col-md-4">
            <router-link :to="{ name: 'user-exam-history' }" class="btn btn-primary d-block py-5 fs-6">試験歴</router-link>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <a href="" class="btn btn-primary d-block py-5 fs-6">作品</a>
        </div>
    </div>
    <!-- <div class="d-flex gap-3 px-3 my-5 menu-container">
        <a href="" class="memos">
            <div class="icon-wrapper">
                <div class="icons">
                    <i class="fs-3 bi bi-pencil-fill pencil"></i>
                    <i class="fs-1 bi bi-journal-text"></i>
                </div>
            </div>
            <h3 class="title text-center">メモ</h3>
        </a>

        <router-link :to="{ name: 'create-exam' }" class="create-exam">
            <div class="icon-wrapper">
                <div class="icons">
                    <i class="fs-3 bi bi-question-lg mortarboard"></i>
                    <i class="fs-1 bi bi-box-fill text-black"></i>
                </div>
            </div>
            <h3 class="title text-center">問題作成</h3>
        </router-link>

        <router-link :to="{ name: 'user-exam-history' }" class="exams">
            <div class="icon-wrapper">
                <div class="icons">
                    <i class="fs-3 bi bi-mortarboard-fill mortarboard"></i>
                    <i class="fs-1 bi bi-book"></i>
                </div>
            </div>
            <h3 class="title text-center">試験歴</h3>
        </router-link>

        <a href="" class="projects">
            <div class="icon-wrapper">
                <div class="icons">
                    <i class="fs-6 bi bi-activity activity"></i>
                    <i class="fs-6 bi bi-bar-chart-fill chart"></i>
                    <i class="fs-1 bi bi-circle"></i>
                </div>
            </div>
            <h3 class="title text-center">作品</h3>
        </a>
    </div> -->
</template>
<script>
import CurrentDateTimeComp from '@/components/CurrentDateTimeComp.vue';
export default {
    components: {
        'current-datetime-comp': CurrentDateTimeComp
    }
}
</script>
<style scoped>
.menu-container {
    flex-wrap: wrap;
}

.d-flex>a {
    flex: 1;
    color: var(--color-white);
    background-color: var(--color-g-web);
    text-decoration: none;

    display: flex;
    flex-direction: column;
}

.d-flex>a>div>div {
    margin: 0 auto;
}

.d-flex>a>div>div {
    transition: all .5s ease-in-out;
}

.d-flex>a:hover div>div {
    transform: scale(1.3);
}

.d-flex>a>h3 {
    flex: 1;
    font-size: 1.25rem;
    padding: .5rem 1rem;
    margin: 0;
    background-color: black;
}

.icon-wrapper {
    padding: 1rem 0;
}

.icons {
    position: relative;
    width: max-content;
}

.pencil {
    left: calc(50% + 1px);
    top: 4px;
    position: absolute;
}

.mortarboard {
    position: absolute;
    top: -4px;
    left: calc(50% + 1px);
}

.chart {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
}

.activity {
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
}
</style>