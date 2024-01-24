<template>
    <LandingMenu :mainLink="{ linkText: 'Luca Engelhard', href: '/' }" :links="[{ linkText: 'Fotografie', href: '/fotografie' },
    { linkText: 'Projekte', href: '/projekte' }]" />

    <TextBlock heading="Über mich" textContent="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
            sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis
            imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh,
            at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam
            condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Praesent lorem
            orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor
            elit. Proin tempus,." />

    <section class="contentblock" id="skills">
        <h2>Ich arbeite mit</h2>
        <ul>
            <Skill skillName="Adobe"
                :subcategories="['Illustrator', 'Photoshop', 'InDesign', 'Premiere Pro', 'After Effects', 'Lightroom']" />
            <Skill skillName="Figma" />
        </ul>
    </section>
</template>

<script setup>

</script>