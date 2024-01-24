<template>
    <ProjectCardGestaltung :project="page" />

    <PageBlock v-for="block in page.content" :block="block" />
</template>

<script setup>
const { project: title } = useRoute().params
const { data } = await useFetch(`/api/notion?type=page&page=${title}`);
const page = toRaw(data.value);
</script>

<style scoped>
img {
    width: calc(100% - 6rem);
    padding: 3rem;
}

video {
    width: calc(100% - 6rem);
    padding: 3rem;
}
</style>