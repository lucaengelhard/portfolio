<template>
    <section>
        <div class="col1"><img v-if="col1.type === 'image'" :src="'/_nuxt/' + col1.body" alt="">
            <video v-if="col1.type === 'video'" :src="'/_nuxt/' + col1.body"></video>
            <div v-if="col1.type === 'text'">{{ col1.body }}</div>
        </div>
        <div class="col2"><img v-if="col2.type === 'image'" :src="'/_nuxt/' + col2.body" alt="">
            <video v-if="col2.type === 'video'" :src="'/_nuxt/' + col2.body"></video>
            <div v-if="col2.type === 'text'">{{ col2.body }}</div>
        </div>
    </section>
</template>

<script setup>
const { col1, col2 } = defineProps(["col1", "col2"])
</script>

<style scoped>
section {
    display: flex;
    gap: 2rem;
    padding: 3rem;
}
</style>