<template>
    <div>
        <ContentDoc :path="`/projects/${title}`" v-slot="{ doc }">
            <div class="landing">
                <div class="heading">
                    <WordWave text="" />

                </div>
                <WordWave :text="doc.title" />
                <img :src="doc.thumbnail" alt="" class="landing-bg" />
            </div>
            <div class="content">
                <ContentRenderer :value="doc" />
            </div>
        </ContentDoc>
    </div>
</template>

<script setup>
const { project: title } = useRoute().params
</script>

<style scoped>
.landing {
    height: 100vh;

    display: grid;
    justify-items: center;
    align-content: center;
    position: relative;
}

.landing>.heading {
    position: fixed;
    top: 1rem;
    left: 3rem;
    mix-blend-mode: difference;
    font-size: 4rem;

    overflow: hidden;
    cursor: pointer;
    z-index: 1;
}

.landing-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 50%;
    translate: 0 -50%;
    object-fit: contain;
    scale: 1;
    transition: all 0.3s;
}

a {
    transition: all 0.3s;
}

.page-enter-from a,
.page-leave-to a {
    opacity: 0;
    filter: blur(1rem);
}

.content {
    margin: auto;
    margin-top: 3rem;
    width: 70%;
    padding: 2rem;
}
</style>