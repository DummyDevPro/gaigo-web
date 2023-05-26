<template>
    <div class="title-box mb-3">
        <span>{{ title_text }}</span>
    </div>
</template>

<script>
export default {
    props: ['title_text']
}
</script>

<style scoped>
.title-box {
    position: relative;
    border-bottom: 2px solid var(--color-g-web);
}

.title-box>span {
    margin-left: 1rem;
    position: absolute;
    bottom: -2px;
    left: 0;

    background-color: var(--color-white);
    border: 2px solid var(--color-g-web);
    border-bottom: none;

    padding: .5rem;
}
</style>