<template>
    <LandingMenu :mainLink="{ linkText: 'Projekte', href: '/projekte' }" :links="[{ linkText: 'Gestaltung', href: '/projekte/gestaltung' },
    { linkText: 'Coding', href: '/projekte/coding' }]" />
</template>

<script setup>

</script>

<style scoped>
section {
    margin-top: 10rem;
}
</style>