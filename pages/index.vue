<template>
    <main>
        <WordWave @mouseenter="imageLink = imageDefault" :text="about.title" />
        <img :src="imageLink" alt="" class="landing-bg" />
        <ContentList :query="query" v-slot="{ list }">
            <div class="projectlist">
                <WordWave v-for="project in list" :text="project.title" @mouseenter="imageLink = project.thumbnail"
                    @mouseleave="imageLink = imageDefault" />
            </div>
        </ContentList>
    </main>
</template>

<script setup>
useHead({
    title: ""
})

const { data: about } = await useAsyncData('about', () => queryContent('/').where({ title: "about" }).findOne())

const imageLink = useState("imageLink");
const imageDefault = about.value.thumbnail;

await callOnce(async () => {
    const { data: aboutonce } = await useAsyncData('about', () => queryContent('/').where({ title: "about" }).findOne())
    imageLink.value = aboutonce.value.thumbnail
})

const query = { path: '/projects', where: [{ title: { $ne: 'about' } }] }

</script>

<style scoped>
main {
    height: 100vh;
    width: 100vw;
    display: grid;
    justify-items: center;
    align-content: center;

    position: relative;
    overflow: hidden;
}

main>*:nth-child(1) {
    position: absolute;
    top: 1rem;
    left: 3rem;
    mix-blend-mode: difference;


    overflow: hidden;
    cursor: pointer;
    z-index: 1;
}

.projectlist {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 8rem 3rem 3rem 3rem;

    mix-blend-mode: difference;
    height: calc(100vh - 11rem);
    overflow: auto;
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.projectlist::-webkit-scrollbar {
    display: none;
}

.landing-bg {
    width: 85%;
    height: 90%;
    position: absolute;
    z-index: -1;
    top: 50%;
    translate: 0 -50%;
    object-fit: contain;
    scale: 0.8;
    transition: all 0.3s;
}

.page-enter-from .landing-bg,
.page-leave-to .landing-bg {
    width: 100%;
    height: 100%;
    scale: 1;

}

a {
    transition: all 0.3s;
}

.page-enter-from a,
.page-leave-to a {
    opacity: 0;
    filter: blur(1rem);
}

@media screen and (max-width: 500px) {
    .landing-bg {
        width: 100%;
        scale: 1;
    }

    .projectlist {
        padding: 8rem 2rem 2rem 2rem;
        height: calc(100vh - 10rem);
    }

    main>*:nth-child(1) {
        left: 2rem;
    }

}
</style>