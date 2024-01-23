<template>
    <LandingMenu :mainLink="{ linkText: 'Fotografie', href: '/Fotografie' }" :links="[{ linkText: 'Politik', href: '/fotografie/politik' },
    { linkText: 'People', href: '/fotografie/people' }, { linkText: 'Things', href: '/fotografie/things' }]" />

    <ImageGallery />
</template>

<style scoped></style>