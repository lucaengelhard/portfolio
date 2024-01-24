<template>
    <LandingMenu :mainLink="{ linkText: 'Luca Engelhard', href: '/' }" :links="[{ linkText: 'Fotografie', href: '/fotografie' },
    { linkText: 'Projekte', href: '/projekte' }]" :image="page.thumbnail" />

    <PageBlock v-for="block in page.content" :block="block" />
</template>

<script setup>
const { data } = await useFetch(`/api/notion?type=page&id=f7bf9b0b52a8447bbf1e8837fa2a06a4`);
const page = toRaw(data.value);

</script>