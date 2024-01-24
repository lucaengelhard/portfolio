<template>
    <section class="contentblock">
        <h2>{{ heading }}</h2>
        <p>{{ textContent }}</p>
    </section>
</template>


<script setup>
const { heading, textContent } = defineProps(["heading", "textContent"])
</script>
