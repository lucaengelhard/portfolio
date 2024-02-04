<template>
    <main>
        <WordWave text="" />
        <WordWave :text="title" />
    </main>
</template>

<script setup>
const { project: title } = useRoute().params
</script>

<style scoped>
main {
    padding: 3rem 3rem 3rem 3rem;
}
</style>