<template>
    <div><span class="galleryCounterCurrent">{{ current }}</span> of <span class="galleryCounterTotal"></span>{{ length }}
    </div>
</template>

<script setup>
const length = useState("length")
const current = useState("current")
</script>

<style scoped>
div {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 0;
    mix-blend-mode: difference;
    font-family: "IBM Plex Serif", serif;
    font-style: italic;

    pointer-events: none;
}
</style>