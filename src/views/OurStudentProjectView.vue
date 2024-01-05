<template>
    <div v-if="!getAllStudentProjects" class="loading"></div>
    <div v-else-if="getAllStudentProjects.length == 0">
        Students' Projects are not found!
    </div>
    <div v-else class="row gy-3 py-5 px-3 m-0">
        <!-- d-flex flex-wrap px-3 py-5 gap-4 -->
        <div v-for="project in getAllStudentProjects" class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div class="card">
                <!-- style="width: 18rem;" -->
                <!-- <strong class="image-info position-absolute">Image file will add on next update.</strong> -->
                <img class="card-img-top card-image" :src="project['project_image']" alt="Default Image">
                <!-- src="../assets/img/default.png" -->
                <div class="card-body">
                    <h5 class="card-title">{{ project['project_title'] }}</h5>
                    <p class="card-text">
                        <span class="badge bg-dark">Developer :<wbr> {{ project['userName'] }}</span>
                    </p>
                    <a :href="project['project_url']" class="btn btn-link" target="_blank">Visit
                        Site</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        getAllStudentProjects() {
            return this.$store.getters.acquireProjectData('all-projects')
        }
    },
    mounted() {
        setTimeout(() => {
            this.$store.dispatch('getCollectionData', {
                firstAccessCode: 'all',
                method: 'get',
                collectionKey: 'project'
            })
        }, 1500);
    }
}
</script>
<style scoped>
.image-info {
    left: .5rem;
    top: 1rem;
}

.card {
    box-shadow: 0 2px 8px gray;
    transition: all .3s linear;
}

.card:hover {
    box-shadow: none;
}

.card-image {
    background-image: url('../assets/img/default.png');

    width: 100%;
    height: 12rem;

    object-fit: cover;
    object-position: top center;
}
</style>