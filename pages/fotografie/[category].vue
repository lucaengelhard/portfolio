<template>
    <LandingMenu :mainLink="{ linkText: 'Fotografie', href: '/Fotografie' }" :links="[{ linkText: 'Politik', href: '/fotografie/politik' },
    { linkText: 'People', href: '/fotografie/people' }, { linkText: 'Things', href: '/fotografie/things' }]" />

    <ImageGallery v-for="section in set" :title="section.title" :id="section.id" />
</template>

<style scoped></style>

<script setup>
const { category } = useRoute().params

const { data } = await useFetch(`/api/flickr?category=${category}&getType=set`);
const set = toRaw(data.value);
</script>