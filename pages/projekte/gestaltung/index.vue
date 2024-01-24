<template>
    <LandingMenu current="gestaltung" :mainLink="{ linkText: 'Projekte', href: '/projekte' }" :links="[{ linkText: 'Gestaltung', href: '/projekte/gestaltung' },
    { linkText: 'Coding', href: '/projekte/coding' }]" />
    <section>
        <ProjectCardGestaltung v-for="project in projects" :project="project" />
    </section>
</template>

<script setup>
const { data } = await useFetch(`/api/notion`);
const projects = toRaw(data.value);
</script>

<style scoped>
section {
    margin-top: 10rem;
}
</style>