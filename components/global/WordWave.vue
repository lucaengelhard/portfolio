<template>
    <NuxtLink class="waveReverse" v-if="link === 'external'" :to="external" target="_blank">
        <div><span v-for="(letter, index) in  textArray " :style="{ transitionDelay: `${0.1 * index}s` }">{{ letter
        }}</span>
        </div>
        <div><span v-for="( letter, index ) in  textArray " :style="{ transitionDelay: `${0.1 * index}s` }">{{ letter
        }}</span></div>
    </NuxtLink>
    <NuxtLink v-else-if="link !== 'false'" :to="`/${text}`">
        <div><span v-for="(letter, index) in  textArray " :style="{ transitionDelay: `${0.1 * index}s` }">{{ letter
        }}</span>
        </div>
        <div><span v-for="( letter, index ) in  textArray " :style="{ transitionDelay: `${0.1 * index}s` }">{{ letter
        }}</span></div>
    </NuxtLink>
    <NuxtLink class="waveReverse noLink" v-else>
        <div><span v-for="(letter, index) in  textArray " :style="{ transitionDelay: `${0.1 * index}s` }">{{ letter
        }}</span>
        </div>
        <div><span v-for="( letter, index ) in  textArray " :style="{ transitionDelay: `${0.1 * index}s` }">{{ letter
        }}</span></div>
    </NuxtLink>
</template>

<script setup>
const { text, link, external } = defineProps(["text", "link", "external"])

const cleanText = text ? text : "← home"

const textArray = cleanText.split("")

</script>

<style scoped>
a {
    display: inline-block;
    height: 100px;
    overflow: hidden;
    cursor: pointer;
    margin-right: 2rem;
    white-space: nowrap;

    mix-blend-mode: difference;
    font-size: 4rem;
}

.content a {
    height: 70px;
}

p a span {
    color: white;
}

p a {
    translate: 0 15px;
}

a>div:nth-child(1) {
    overflow: hidden;
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

.waveReverse>div:nth-child(1) {
    font-family: "IBM Plex Serif", serif;
    font-style: italic;
}

.waveReverse>div:nth-child(2) {
    font-family: "IBM Plex Sans", sans-serif;
    font-style: normal;
}

.noLink {
    cursor: default;
}

@media screen and (max-width: 600px) {
    a {
        height: 40px !important;
        font-size: 1.5rem;
    }

    a span {
        min-width: 5px;
    }
}
</style>