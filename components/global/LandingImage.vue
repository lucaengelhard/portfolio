<template>
    <NuxtImg preload width="100vw" format="webp" quality="80" :src="src" alt="" class="landing-bg" />
</template>

<script setup>
const { src, maxDegrees } = defineProps(["src", "maxDegrees"])
const offsetX = useState("offsetX");
const offsetY = useState("offsetY");

callOnce(() => {
    offsetX.value = "0deg"
    offsetY.value = "0deg"
})

const extractor = (event) => {
    const x = event.clientX
    const y = event.clientY

    const middleX = window.innerWidth / 2
    const middleY = window.innerHeight / 2

    offsetX.value = `${((x - middleX) / middleX) * maxDegrees}deg`
    offsetY.value = `${-1 * (((y - middleY) / middleY) * maxDegrees)}deg`
}

const mouseWithExtractor = reactive(useMouse({ type: extractor }))
</script>

<style scoped>
img {
    --rotateX: v-bind(offsetX);
    --rotateY: v-bind(offsetY);
    transform: perspective(5000px) rotateY(var(--rotateX)) rotateX(var(--rotateY));
}

.page-enter-from .landing-bg,
.page-leave-to .landing-bg {
    transform: perspective(5000px) rotateY(0) rotateX(0);
    transition: transform 0.3s;
}
</style>