<template>
    <section class="landing">
        <div class="landing-left">
            <h1>
                <NuxtLink :to="mainLink.href">{{ mainLink.linkText }}</NuxtLink>
            </h1>
            <ul>
                <li v-for="link in links">
                    <NuxtLink style="font-weight: 600;" v-if="current === link.linkText.toLowerCase()" :to="link.href">{{
                        link.linkText }}
                    </NuxtLink>

                    <NuxtLink v-else :to="link.href">{{ link.linkText }}</NuxtLink>
                </li>
            </ul>
        </div>
        <img v-if="image" :src="image.url" alt="">
        <img v-else src="/assets/.placeholder/231104-anna geburtstag-012.jpg" alt="">
    </section>
</template>

<script setup>
const { mainLink, links, current, image } = defineProps(["mainLink", "links", "current", "image"])

</script>

<style scoped>
.landing {
    margin-top: 0;
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
    object-position: 50% 20%;
    margin-top: 70px;
    height: calc(100% - 70px);
    width: 70%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
}
</style>