<template>
    <li>
        <div class="skills-col1">{{ skillName }}</div>
        <div class="skills-col2">
            <ul>
                <li v-for="category in subcategories">{{ category }}</li>
            </ul>
        </div>
    </li>
</template>


<script setup>
const { skillName, subcategories } = defineProps(["skillName", "subcategories"])
</script>

<style scoped>
li {
    display: flex;
    gap: 2rem
}

.skills-col1 {
    font-weight: 600;
}

.skills-col2 li {
    display: block;
}
</style>