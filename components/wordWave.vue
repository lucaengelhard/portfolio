<template>
    <NuxtLink :to="`/${text}`">
        <div><span v-for="(letter, index) in  textArray " :style="{ transitionDelay: `${0.1 * index}s` }">{{ letter
        }}</span>
        </div>
        <div><span v-for="( letter, index ) in  textArray " :style="{ transitionDelay: `${0.1 * index}s` }">{{ letter
        }}</span></div>
    </NuxtLink>
</template>

<script setup>
const { text } = defineProps(["text"])

const cleanText = text ? text : "← home"

const textArray = cleanText.split("")

</script>

<style scoped>
a {
    display: inline-block;
    height: 80px;
    overflow: hidden;
    cursor: pointer;
    padding-right: 2rem;
    white-space: nowrap;

    mix-blend-mode: difference;
    font-size: 4rem;
}

a>div:nth-child(2) {
    font-family: "IBM Plex Serif", serif;
    font-style: italic;
}

a span {
    transition: translate 0.2s;
    display: inline-block;
    min-width: 15px;
}

a:hover span {
    translate: 0 -100%;
}
</style>