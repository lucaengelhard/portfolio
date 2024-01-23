<template>
    <section v-if="pending">
        <h1>{{ title }}</h1>
        <p>Lädt...</p>
    </section>
    <section v-else>
        <ImageGalleryTitle :title="title" :titleImage="pictureList[0]" />
        <div><img loading="lazy" v-for="image in pictureList" :src="image.url_o" alt="">
        </div>

    </section>
</template>

<script setup>
const { title, id } = defineProps(["title", "id"])
const { data, pending } = await useLazyFetch(`/api/flickr?getType=section&photosetId=${id}`);
const pictureList = toRaw(data.value);
</script>

<style scoped>
section {
    padding: 3rem;
    margin: 10rem 0 10rem 0;
}

div {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem
}

img {
    aspect-ratio: 1/1;
}
</style>

