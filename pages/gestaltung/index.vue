<template>
    <LandingMenu :mainLink="{ linkText: 'Gestaltung', href: '/Gestaltung' }" />
    <section>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
    </section>
</template>

<script setup>

</script>

<style scoped>
section {
    margin-top: 10rem;
}
</style>