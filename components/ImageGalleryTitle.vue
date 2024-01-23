<template>
    <div>
        <h1>{{ title }}</h1>
        <img :src="titleImage.url_m" alt="">
    </div>
</template>

<script setup>
const { title, titleImage } = defineProps(["title", "titleImage"])
</script>

<style scoped>
div {
    position: relative;
    height: calc(60vh + 6rem);
}

h1 {
    margin: 0;
    width: 100%;
    padding-top: 20vh;
    word-break: break-word;
}

img {
    position: absolute;
    top: 0;
    right: 0;
    width: 70%;
    z-index: -1;
}
</style>