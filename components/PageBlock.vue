<template>
    <img v-if="block.type === 'image'" :src="block.url" alt="">
    <TextBlock v-if="block.type === 'paragraph'" :textContent="block.content" />
    <Nested v-if="block.type === 'recursive'" :blocks="block.content" />
    <h2 v-if="block.type === 'heading_2'">{{ block.text }}</h2>
    <List v-if="block.type === 'list'" :list="block" />
</template>

<script setup>
const { block } = defineProps(["block"])
</script>

<style scoped></style>