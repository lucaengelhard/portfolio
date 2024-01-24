<template>
    <article>
        <NuxtLink :to="`/projekte/gestaltung/${project.title}`">
            <div>
                <h1>{{ project.title }}</h1>
                <p>{{ project.subtitle }}</p>
            </div>

            <ul>
                <li v-for="tag in project.tags">{{ tag.name }}</li>
            </ul>
            <img v-if="project.thumbnail" :src="project.thumbnail" alt="">
        </NuxtLink>
    </article>
</template>

<script setup>

const { project } = defineProps(["project"])

</script>

<style scoped>
article {
    height: calc(60vh + 6rem);
    position: relative;
    padding: 3rem;
    margin: 0 0 10rem 0;
}

img {
    width: 70%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    height: 100%;
}

a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
}

div {
    padding-top: 20vh;
}

h1 {
    margin: 0;
}
</style>