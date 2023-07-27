<template>
    <div v-if="projectsList.length == 0">
        <strong>There is no projects.</strong>
    </div>
    <div v-else class="d-flex flex-wrap p-3 gap-3">
        <div v-for="project in projectsList" class="card" style="width: 18rem;">
            <strong class="image-info position-absolute">Image file will add on next update.</strong>
            <img class="card-img-top" src="../assets/img/default.png" alt="Default Image">
            <div class="card-body">
                <h5 class="card-title">{{ project['project_title'] }}</h5>
                <p class="card-text">
                    <span class="badge bg-dark">Developer : {{ project['userName'] }}</span>
                </p>
                <a :href="project['project_url']" class="btn btn-link" target="_blank">Visit
                    Site</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            projectsList: []
        }
    },
    mounted() {
        this.$store.watch(
            (_, getters) => getters.acquireProjectData('all-projects'),
            (newValue, _) => {
                this.projectsList = newValue
            }
        )

        this.$store.dispatch('getCollectionData', {
            firstAccessCode: 'all',
            method: 'get',
            collectionKey: 'project'
        })
    }
}
</script>
<style scoped>
.image-info {
    left: .5rem;
    top: 1rem;
}
</style>