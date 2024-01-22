<template>
    <section class="landing">
        <div class="landing-left">
            <h1>
                <NuxtLink :to="mainLink.href">{{ mainLink.linkText }}</NuxtLink>
            </h1>
            <ul>
                <li v-for="link in links">
                    <NuxtLink :to="link.href">{{ link.linkText }}</NuxtLink>
                </li>
            </ul>
        </div>
        <img src="/assets/.placeholder/231104-anna geburtstag-012.jpg" alt="">
    </section>
</template>

<script setup>
const { mainLink, links } = defineProps(["mainLink", "links"])
console.log(mainLink);
</script>

<style scoped>
.landing {
    width: 100%;
    height: 100vh;
}

.landing-left {
    padding: 3rem;
}

h1 {
    margin-top: 40vh;
    margin-bottom: 0;
}

img {
    width: 70%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
}
</style>