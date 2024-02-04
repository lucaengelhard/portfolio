<template>
    <main>
        <WordWave text="about" />
        <img :src="imageLink" alt="" class="landing-bg" />
        <div class="projectlist">
            <WordWave v-for="project in projects" :text="project.name" @mouseenter="imageLink = project.thumbnail"
                @mouseleave="imageLink = imageDefault" />
        </div>

    </main>
</template>

<script setup>

const projects = [{ name: "indymedia", thumbnail: "/images/indy-header.png", href: " " }, { name: "indymedia", thumbnail: "/images/indy-header.png" }, { name: "indymedia", thumbnail: "/images/indy-header.png" }, { name: "indymedia", thumbnail: "/images/indy-header.png" }, { name: "indymedia", thumbnail: "/images/indy-header.png" }, { name: "indymedia", thumbnail: "/images/indy-header.png" }, { name: "indymedia", thumbnail: "/images/indy-header.png" }, { name: "indymedia", thumbnail: "/images/indy-header.png" }, { name: "indymedia", thumbnail: "/images/indy-header.png" }, { name: "indymedia", thumbnail: "/images/indy-header.png" }, { name: "indymedia", thumbnail: "/images/indy-header.png" }, { name: "indymedia", thumbnail: "/images/indy-header.png" }, { name: "indymedia", thumbnail: "/images/indy-header.png" }, { name: "indymedia", thumbnail: "/images/indy-header.png" }]

const imageLink = useState("imageLink")
const imageDefault = "/images/231104-anna geburtstag-012.jpg"

callOnce(() => {
    imageLink.value = imageDefault
})

</script>

<style scoped>
main {
    height: 100vh;
    width: 100vw;
    display: grid;
    justify-items: center;
    align-content: center;

    position: relative;
}

main>*:nth-child(1) {
    position: absolute;
    top: 1rem;
    left: 3rem;
    mix-blend-mode: difference;
    font-size: 4rem;

    overflow: hidden;
    cursor: pointer;
    z-index: 1;
}

.projectlist {
    font-size: 4rem;
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
}
</style>