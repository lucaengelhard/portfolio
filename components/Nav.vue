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
    background-color: white;
    width: 100%;
    border-bottom: 2px solid black;
    z-index: 1;
    top: 0;
    left: 0;
}

ul {
    display: flex;
    gap: 3rem
}
</style>