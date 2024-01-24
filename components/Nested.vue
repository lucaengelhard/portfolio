<template>
    <div class="nestedBlock">
        <PageBlock v-for="block in blocks" :block="block" />
    </div>
</template>

<script setup>
const { blocks } = defineProps(["blocks"]);
</script>

<style scoped>
.nestedBlock {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

.nestedBlock>* {
    min-width: 50%;
}

.nestedBlock>.nestedBlock {
    display: block;
}
</style>