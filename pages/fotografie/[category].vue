<template>
    <LandingMenu :current="category" :mainLink="{ linkText: 'Fotografie', href: '/Fotografie' }" :links="[{ linkText: 'Politik', href: '/fotografie/politik' },
    { linkText: 'People', href: '/fotografie/people' }, { linkText: 'Things', href: '/fotografie/things' }]"
        :image="page.thumbnail" />

    <ImageGallery v-for="section in set" :title="section.title" :id="section.id" />
</template>

<script setup>
const { category } = useRoute().params

const { data: pagedata } = await useFetch(`/api/notion?type=page&category=${category}`);
const page = toRaw(pagedata.value);

const { data } = await useFetch(`/api/flickr?category=${category}&getType=set`);
const set = toRaw(data.value);
</script>