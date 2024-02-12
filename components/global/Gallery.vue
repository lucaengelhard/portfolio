<template>
    <div ref="gallery" @click="scrollGallery" class="gallery">
        <slot />
        <GalleryCounter />
    </div>
</template>

<script setup>
const gallery = ref(null)
const length = useState("length")
const current = useState("current")

callOnce(() => {
    length.value = 1
    current.value = 1
})

function scrollGallery(event) {
    const { width } = useWindowSize()
    const next = event.clientX > (width.value / 2);

    if (next) {
        gallery.value.children[0].scrollBy({ left: event.target.clientWidth, behavior: "smooth" })
    } else {
        gallery.value.children[0].scrollBy({ left: -1 * event.target.clientWidth, behavior: "smooth" })
    }
}

onMounted(() => {
    const images = Array.from(gallery.value.children[0].children);
    length.value = images.length;

    const options = {
        root: gallery.value.children[0],
        rootMargin: '10%',
        threshold: 1
    }

    function callback(entries, observer) {
        for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];
            if (entry.isIntersecting) {
                current.value = parseInt(entry.target.dataset.index) + 1;
            }
        }
    }

    let observer = new IntersectionObserver(callback, options);

    for (let i = 0; i < Array.from(gallery.value.children[0].children).length; i++) {
        const child = Array.from(gallery.value.children[0].children)[i];
        child.dataset.index = i
        observer.observe(child);
    }




})
</script>

<style scoped>
.gallery {
    display: block;
    position: relative;
}
</style>