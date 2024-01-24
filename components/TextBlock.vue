<template>
    <section class="contentblock">

        <p>{{ textContent }}</p>
    </section>
</template>


<script setup>
const { textContent } = defineProps(["textContent"])
</script>
