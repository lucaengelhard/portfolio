<template>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,700;1,400;1,700&family=IBM+Plex+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet" />
    <NuxtPage class="noScrollBar" />
</template>

<script setup>
import '~/assets/main.css'

useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk
            ? `${titleChunk} - luca engelhard`
            : 'luca engelhard'
    }
})

const { data: seo } = await useAsyncData('seo', () => queryContent('/').where({ filetitle: "seo" }).findOne())



useSeoMeta({
    title: seo.value.title,
    ogTitle: seo.value.ogTitle,
    description: seo.value.description,
    ogDescription: seo.value.ogDescription,
    ogImage: seo.value.ogImage,
    twitterCard: seo.value.twitterCard,
})
</script>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.3s;
}
</style>