<template>
    <div class="list-wrapper">
        <div class="list-col1">{{ list.text }}</div>
        <ul v-if="list.content">
            <li v-for="item in list.content.content">{{ item.text }}</li>
        </ul>
    </div>
</template>


<script setup>
const { list } = defineProps(["list"])
</script>

<style scoped>
.list-wrapper {
    display: flex;
    gap: 2rem;
    padding: 3rem
}

.list-col1 {
    font-weight: 600;
}
</style>