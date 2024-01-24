<template>
    <LandingMenu :mainLink="{ linkText: 'Fotografie', href: '/Fotografie' }" :links="[{ linkText: 'Politik', href: '/fotografie/politik' },
    { linkText: 'People', href: '/fotografie/people' }, { linkText: 'Things', href: '/fotografie/things' }]"
        :image="page.thumbnail" />
</template>

<script setup>
const { data } = await useFetch(`/api/notion?type=page&id=acd2d80f6e2e49e48fc6e9952f4e3c05`);
const page = toRaw(data.value);
</script>

<style scoped></style>