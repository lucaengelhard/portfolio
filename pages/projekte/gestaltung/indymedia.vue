<template>
    <ProjectCardGestaltung />
    <img src="/assets/.placeholder/indy-header.png" alt="">
    <TextBlock textContent="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
            sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis
            imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh,
            at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam
            condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Praesent lorem
            orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor
            elit. Proin tempus,." />

    <TwoCol :col1="{ type: 'image', body: '/assets/.placeholder/indy-header.png' }"
        :col2="{ type: 'image', body: '/assets/.placeholder/indy-header.png' }" />
</template>

<style scoped>
img {
    width: calc(100% - 6rem);
    padding: 3rem;
}

video {
    width: calc(100% - 6rem);
    padding: 3rem;
}
</style>