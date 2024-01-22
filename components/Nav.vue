<template>
    <nav>
        <ul>
            <li>
                <NuxtLink to="/">Luca Engelhard</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/fotografie">Fotografie</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/gestaltung">Gestaltung</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    position: fixed;
    padding: 1rem 3rem 1rem 3rem;
}

ul {
    display: flex;
    gap: 3rem
}
</style>