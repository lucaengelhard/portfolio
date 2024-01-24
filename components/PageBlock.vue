<template>
    <img v-if="block.type === 'image'" :src="block.url" alt="">
    <TextBlock v-if="block.type === 'paragraph'" :textContent="block.content" />
    <Nested v-if="block.type === 'recursive'" :blocks="block.content" />
</template>

<script setup>
const { block } = defineProps(["block"])
</script>

<style scoped></style>