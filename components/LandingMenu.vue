<template>
    <div class="landing">
        <div class="landing-left">
            <h1>
                <NuxtLink to="/">Luca Engelhard</NuxtLink>
            </h1>
            <ul>

                <li v-for="link in links">
                    <NuxtLink :to="link.href">{{ link.linkText }}</NuxtLink>
                </li>
            </ul>
        </div>
        <img src="/assets/.placeholder/231104-anna geburtstag-012.jpg" alt="">
    </div>
</template>

<script setup>
const { links } = defineProps(["links"])
console.log(links);
</script>

<style scoped>
.landing {
    width: 100%;
    height: 100vh;
    display: grid;
    align-items: center;
}

.landing-left {
    padding: 3rem;
}

h1 {
    font-size: 6rem;
    margin-bottom: 0;
}

ul {
    font-size: 2rem;
}

img {
    width: 70%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
}
</style>