<template>
    <LandingMenu current="gestaltung" :mainLink="{ linkText: 'Projekte', href: '/projekte' }" :links="[{ linkText: 'Gestaltung', href: '/projekte/gestaltung' },
    { linkText: 'Coding', href: '/projekte/coding' }]" />
    <section>
        <ProjectCardGestaltung :id="1" :tags="['NodeJS', 'JavaScript', 'HTML', 'CSS']" />
    </section>
</template>

<script setup>

</script>

<style scoped>
section {
    margin-top: 10rem;
}
</style>